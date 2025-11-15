<template>
  <div class="qr-container">
    <h2>🐾 스마트태그 QR 생성</h2>

    <!-- QR 생성 버튼 -->
    <button @click="generateQRCode" :disabled="isGenerating">
      {{ isGenerating ? "생성 중..." : "QR 코드 생성" }}
    </button>

    <!-- QR 코드가 생성된 경우 -->
    <div v-if="qrImage" class="qr-preview">
      <img :src="qrImage" alt="QR Code" />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import QRCode from "qrcode" // ✅ npm install qrcode 필요
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"

// Firestore 초기화
const db = getFirestore()

// 상태 변수
const qrImage = ref("")      // 생성된 QR 이미지
const isGenerating = ref(false) // 로딩 상태
const message = ref("")      // 메시지 표시

// ✅ QR 코드 생성 함수
const generateQRCode = async () => {
  try {
    isGenerating.value = true
    message.value = ""

    // 1️⃣ 고유 QR ID 생성
    const qrId = `QR-${Date.now()}`

    // 2) 실행 환경 자동 감지
    const baseUrl =  window.location.origin + window.location.pathname.replace(/\/$/, "");

    // 2️⃣ QR 안에 들어갈 URL (스캔 시 이동할 경로)
    const qrUrl = `${baseUrl}#/register/${qrId}`

    // 3️⃣ Firestore에 QR 정보 저장 (컬렉션이 없으면 자동 생성됨)
    await addDoc(collection(db, "qrcodes"), {
      qrId,
      createdAt: serverTimestamp(),
    })

    // 4️⃣ QR 이미지 생성
    qrImage.value = await QRCode.toDataURL(qrUrl)

    message.value = `✅ QR 생성 완료! 스캔 시 ${qrUrl} 로 이동합니다.`
    console.log("QR 생성 성공:", qrUrl)

  } catch (error) {
    console.error("❌ QR 생성 오류:", error)
    message.value = "QR 생성 중 오류가 발생했습니다. 콘솔을 확인하세요."
  } finally {
    isGenerating.value = false
  }
}
</script>

<style scoped>
.qr-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  text-align: center;
}

.qr-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #5a4634;
}

button {
  background-color: #a18f7a;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #8d7b66;
}

.qr-preview {
  margin-top: 30px;
}

.qr-preview img {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
}

.qr-preview p {
  color: #333;
  font-size: 14px;
}
</style>
