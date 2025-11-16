from firebase_functions import https_fn, options
import firebase_admin
from firebase_admin import firestore, initialize_app

import json
import requests
import numpy as np
import vertexai
from vertexai.vision_models import Image, MultiModalEmbeddingModel
from google.cloud.firestore_v1.base_query import FieldFilter

PROJECT_ID = "capstone-12e6910598105066"
LOCATION = "us-central1"


# Firestore, Firebase Admin, Vertex 초기화
def init_services():
    # Firebase Admin
    if not firebase_admin._apps:
        initialize_app()
    db = firestore.client()

    # VertexAI + 모델
    vertexai.init(project=PROJECT_ID, location=LOCATION)
    model = MultiModalEmbeddingModel.from_pretrained("multimodalembedding")

    return db, model


# 코사인 유사도
def cosine_similarity(v1, v2):
    v1 = np.array(v1)
    v2 = np.array(v2)
    num = np.dot(v1, v2)
    den = np.linalg.norm(v1) * np.linalg.norm(v2)
    return float(num / den) if den != 0 else 0.0


# HTTPS 함수 (유사 이미지 검색)
@https_fn.on_request(
    region=LOCATION,
    timeout_sec=300,
    cors=options.CorsOptions(
        cors_origins="*",
        cors_methods=["post", "options"],
    ),
)
def find_similar(req: https_fn.Request) -> https_fn.Response:
    """이미지 URL을 받아서, Firestore에 저장된 임베딩 중 비슷한 이미지 찾기"""

    # 1) OPTIONS 요청 (preflight) 처리
    if req.method == "OPTIONS":
        return https_fn.Response("", status=204)

    # 2) POST 요청만 허용
    if req.method != "POST":
        return https_fn.Response(
            json.dumps({"error": "POST 메서드만 지원합니다."}),
            status=405,
            headers={"Content-Type": "application/json"},
        )

    try:
        # 3) 서비스 초기화
        db, model = init_services()

        # 4) JSON 파싱
        body = req.get_json(silent=True)
        if not body:
            return https_fn.Response(
                json.dumps({"error": "JSON body가 비어있거나 잘못되었습니다."}),
                status=400,
                headers={"Content-Type": "application/json"},
            )

        image_url_query = body.get("image_url_query")
        if not image_url_query:
            return https_fn.Response(
                json.dumps({"error": "image_url_query 파라미터가 필요합니다."}),
                status=400,
                headers={"Content-Type": "application/json"},
            )

        print(f"유사 이미지 검색 시작: {image_url_query}")

        # 5) 기준 이미지 다운로드 → 임베딩 구하기
        resp = requests.get(image_url_query)
        resp.raise_for_status()

        query_image = Image(resp.content)
        query_result = model.get_embeddings(image=query_image)
        query_embedding = query_result.image_embedding

        # 6) Firestore에서 이미 저장된 임베딩들 가져오기
        docs_stream = db.collection("image_metadata").where(
            filter=FieldFilter("status", "==", "INDEXED")
        ).stream()

        all_images = []
        for doc in docs_stream:
            doc_data = doc.to_dict()
            emb = doc_data.get("embedding")
            if emb:
                all_images.append(
                    {
                        "id": doc.id,
                        "path": doc_data.get("path"),
                        "originalPostId": doc_data.get("originalPostId"),
                        "embedding": emb,
                    }
                )

        if not all_images:
            # 유사 이미지가 하나도 없으면 빈 배열
            return https_fn.Response(
                json.dumps({"similar_images": []}),
                status=200,
                headers={"Content-Type": "application/json"},
            )

        # 7) 코사인 유사도 계산하고 점수 매기기
        results = []
        for img in all_images:
            score = cosine_similarity(query_embedding, img["embedding"])
            results.append(
                {
                    "id": img["id"],
                    "path": img["path"],
                    "originalPostId": img["originalPostId"],
                    "score": score,
                }
            )

        # 8) 점수 순으로 내림차순 정렬 후 상위 5개
        results.sort(key=lambda x: x["score"], reverse=True)
        top_5 = results[:5]

        print(f"상위 5개 유사 이미지: {top_5}")

        # 9) 결과 반환
        return https_fn.Response(
            json.dumps({"similar_images": top_5}),
            status=200,
            headers={"Content-Type": "application/json"},
        )

    except requests.exceptions.HTTPError as he:
        # 기준 이미지 다운로드 실패
        status_code = he.response.status_code if he.response else 503
        print(f"이미지 다운로드 실패: {he}")
        return https_fn.Response(
            json.dumps(
                {"error": f"이미지를 다운로드할 수 없습니다. HTTP {status_code}"}
            ),
            status=503,
            headers={"Content-Type": "application/json"},
        )

    except Exception as e:
        # 나머지 모든 에러
        print(f"유사 이미지 검색 오류: {e}")
        return https_fn.Response(
            json.dumps({"error": str(e)}),
            status=500,
            headers={"Content-Type": "application/json"},
        )
