<template>
  <div class="qr-generator">
    <h2>QR 코드 생성</h2>

    <div v-if="qrCodeUrl" class="qr-display">
      <h3>생성된 QR코드</h3>
      <img :src="qrCodeUrl" alt="QR Code" />
      <p>QR ID: {{ qrId }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { fbstore } from "@/firebaseConfig"; // 실제 경로 확인

const qrCodeUrl = ref("");
const qrId = ref("");

async function createQR() {
  try {
    const qrCollection = collection(fbstore, "qrCodes");

    const newQrId = "QR-" + Date.now();
    qrId.value = newQrId;

    // Firestore에 문서 추가 (컬렉션이 없으면 자동 생성됨)
    const docRef = await addDoc(qrCollection, {
      qrId: newQrId,
      createdAt: serverTimestamp()
    });

    console.log("문서 추가됨, ID:", docRef.id);

    // QR코드 이미지 생성
    qrCodeUrl.value = `https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${newQrId}&choe=UTF-8`;
  } catch (error) {
    console.error("QR 생성 실패:", error);
  }
}

// 페이지 로드 시 자동 실행
onMounted(() => {
  createQR();
});
</script>

<style scoped>
.qr-generator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.qr-display {
  margin-top: 20px;
  text-align: center;
}

.qr-display img {
  width: 200px;
  height: 200px;
}
</style>
