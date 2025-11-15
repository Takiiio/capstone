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
import { ref } from "vue";
import { useRoute } from "vue-router";
import QRCode from "qrcode";
import { fbstore } from "../firebaseConfig";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

const qrImage = ref("");
const isGenerating = ref(false);
const message = ref("");

const route = useRoute();
const uid = route.query.uid;   // 구매자로부터 넘어온 UID

const generateQRCode = async () => {
  try {
    isGenerating.value = true;

    if (!uid) {
      alert("UID가 전달되지 않았습니다.");
      return;
    }

    // QR 고유 ID 생성
    const qrId = `QR-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;

    // QR URL 생성
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/$/, "");
    const qrUrl = `${baseUrl}#/user-info/${qrId}`;

    // qrcodes 컬렉션에 저장
    await setDoc(doc(fbstore, "qrcodes", qrId), {
      qrId,
      ownerUid: uid,
      qrUrl,
      createdAt: serverTimestamp()
    },  { merge: true });

    // buyers에도 최근 QR 기록
    await setDoc(doc(fbstore, "buyers", uid), {
      lastQrId: qrId,
      lastQrUpdatedAt: serverTimestamp()
    }, { merge: true });

    // QR 이미지 생성
    qrImage.value = await QRCode.toDataURL(qrUrl);

    message.value = `✅ QR 생성 완료! 스캔 시 ${qrUrl} 로 이동합니다.`

  } catch (e) {
    console.error(e);
    message.value = "QR 생성 중 오류 발생";
  } finally {
    isGenerating.value = false;
  }
};

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
