# --- 1. 전역 (Global) 범위 ---
import firebase_admin
from firebase_functions import firestore_fn, https_fn, options

PROJECT_ID = "capstone-12e6910598105066"
LOCATION = "us-central1"

# 올바른 CORS 허용 출처 목록 (.web.app 오타 수정됨)
allowed_origins = [
    "http://localhost:8080",
    "https://capstone-12e6910598105066.web.app"
]

db_client = None
embedding_model = None
_vertex_ai_initialized = False


# --- 2. 헬퍼 함수 (초기화 로직) ---
def get_db():
    """Firestore 클라이언트를 필요 시 한 번만 초기화"""
    global db_client
    if db_client is None:
        print("Firestore 클라이언트를 초기화합니다...")
        from firebase_admin import firestore, initialize_app
        if not firebase_admin._apps:
            initialize_app()
        db_client = firestore.client()
        print("Firestore 클라이언트 초기화 완료.")
    return db_client


def get_embedding_model():
    """Vertex AI 임베딩 모델을 필요 시 한 번만 로드"""
    global embedding_model, _vertex_ai_initialized
    import vertexai

    if not _vertex_ai_initialized:
        try:
            print("VertexAI 초기화 중...")
            vertexai.init(project=PROJECT_ID, location=LOCATION)
            _vertex_ai_initialized = True
            print("✅ VertexAI 초기화 완료.")
        except Exception as e:
            print(f"❌ VertexAI 초기화 실패: {e}")
            return None

    if embedding_model is None:
        try:
            print("MultiModalEmbeddingModel 로드 중...")
            from vertexai.vision_models import MultiModalEmbeddingModel
            embedding_model = MultiModalEmbeddingModel.from_pretrained("multimodalembedding")
            print("✅ 모델 로드 완료.")
        except Exception as e:
            print(f"❌ 모델 로드 실패: {e}")
            return None

    return embedding_model


def cosine_similarity(v1, v2):
    import numpy as np
    v1 = np.array(v1)
    v2 = np.array(v2)
    num = np.dot(v1, v2)
    den = np.linalg.norm(v1) * np.linalg.norm(v2)
    return float(num / den) if den != 0 else 0.0


# --- 3. Firestore 트리거 함수 (이미지 업로드 시 임베딩 생성) ---
@firestore_fn.on_document_created(
    document="image_metadata/{doc_id}",
    region=LOCATION
)
def on_image_created(event: firestore_fn.Event[firestore_fn.DocumentSnapshot]):
    import requests
    from vertexai.vision_models import Image

    db = get_db()
    model = get_embedding_model()

    if not model or not db:
        print("⚠️ 서비스 초기화 실패로 인덱싱 건너뜁니다.")
        return

    data = event.data.to_dict()
    image_url = data.get("path")
    doc_id = event.data.id

    if data.get("status") != "PENDING":
        return
    if not image_url:
        event.data.reference.update({"status": "ERROR", "error_message": "Image URL is missing."})
        return

    try:
        print(f"🎯 문서 {doc_id} 임베딩 생성 시작: {image_url}")
        response = requests.get(image_url)
        response.raise_for_status()
        image_bytes = response.content
        image_part = Image(image_bytes)
        result = model.get_embeddings(image=image_part)
        embedding = result.image_embedding

        event.data.reference.update({
            "status": "INDEXED",
            "embedding": embedding
        })
        print(f"✅ Firestore 문서 {doc_id} 업데이트 완료.")
    except Exception as e:
        print(f"❌ 문서 {doc_id} 인덱싱 실패: {e}")
        event.data.reference.update({
            "status": "ERROR",
            "error_message": str(e)
        })


# --- 4. HTTPS 함수 (유사 이미지 검색) ---
# --- 4. HTTPS 함수 (유사 이미지 검색) ---
@https_fn.on_request(region=LOCATION, timeout_sec=300)
def find_similar(req: https_fn.Request) -> https_fn.Response:
    """CORS-safe 이미지 유사도 검색 엔드포인트"""

    # (이 함수 내부에서만 필요한 모듈 임포트)
    import requests
    import json
    from vertexai.vision_models import Image
    from google.cloud.firestore_v1.base_query import FieldFilter

    # --- ✅ 1. CORS 헤더 구성 ---
    origin = req.headers.get("origin")
    cors_headers = {
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }

    # 허용된 origin인지 확인 (대소문자 무시)
    if origin and any(origin.lower().startswith(o.lower()) for o in allowed_origins):
        cors_headers["Access-Control-Allow-Origin"] = origin
    else:
        # 로컬/테스트 환경을 위해 와일드카드(*)를 기본값으로 사용
        cors_headers["Access-Control-Allow-Origin"] = "*"

    # OPTIONS 사전 요청일 경우 즉시 응답
    if req.method == "OPTIONS":
        return https_fn.Response(status=204, headers=cors_headers)

    # JSON 헤더 병합
    json_headers = {**cors_headers, "Content-Type": "application/json"}

    db = get_db()
    model = get_embedding_model()

    if not model or not db:
        return https_fn.Response(
            json.dumps({"error": "백엔드 초기화 실패"}),
            status=503,
            headers=json_headers
        )

    try:
        # ⭐️⭐️⭐️ [수정됨] ⭐️⭐️⭐️
        # req.get_json() 대신 req.json 프로퍼티를 사용합니다.
        # Content-Type이 application/json이 아니거나 본문이 비어있으면
        # 이 코드는 try...except 블록에 의해 500 오류로 잡힙니다.
        body = req.json
        
        if not body:
            raise ValueError("Request body is empty or not valid JSON.")

        image_url_query = body.get("image_url_query")
        # ⭐️⭐️⭐️ [수정 완료] ⭐️⭐️⭐️

        if not image_url_query:
            return https_fn.Response(
                json.dumps({"error": "image_url_query 파라미터가 필요합니다."}),
                status=400,
                headers=json_headers
            )

        print(f"🎯 유사 이미지 검색 시작: {image_url_query}")
        response = requests.get(image_url_query)
        response.raise_for_status()

        query_image = Image(response.content)
        query_result = model.get_embeddings(image=query_image)
        query_embedding = query_result.image_embedding

        print("📂 Firestore에서 INDEXED 문서 조회 중...")
        docs_stream = db.collection("image_metadata").where(
            filter=FieldFilter("status", "==", "INDEXED")
        ).stream()

        all_images = []
        for doc in docs_stream:
            doc_data = doc.to_dict()
            emb = doc_data.get("embedding")
            if emb:
                all_images.append({
                    "id": doc.id,
                    "path": doc_data.get("path"),
                    "originalPostId": doc_data.get("originalPostId"),
                    "embedding": emb
                })

        if not all_images:
            return https_fn.Response(
                json.dumps({"similar_images": []}),
                status=200,
                headers=json_headers
            )

        print(f"📊 총 {len(all_images)}개 이미지 비교 중...")
        results = []
        for img in all_images:
            score = cosine_similarity(query_embedding, img["embedding"])
            results.append({
                "id": img["id"],
                "path": img["path"],
                "originalPostId": img["originalPostId"],
                "score": score
            })

        results.sort(key=lambda x: x["score"], reverse=True)
        top_5 = results[:5]
        print(f"✅ 상위 5개 유사 이미지: {top_5}")

        return https_fn.Response(
            json.dumps({"similar_images": top_5}),
            status=200,
            headers=json_headers
        )

    except requests.exceptions.HTTPError as he:
        print(f"❌ 이미지 다운로드 실패: {he}")
        return https_fn.Response(
            json.dumps({"error": f"이미지를 다운로드할 수 없습니다. HTTP {he.response.status_code}"}),
            status=503,
            headers=json_headers
        )

    except Exception as e:
        # req.json 파싱 실패 오류도 여기서 잡힙니다.
        print(f"❌ 유사 이미지 검색 오류: {e}")
        return https_fn.Response(
            json.dumps({"error": str(e)}),
            status=500,
            headers=json_headers
        )