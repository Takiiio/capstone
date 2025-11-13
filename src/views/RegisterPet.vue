<template>
  <div class="register-container">
    <h2>반려동물 정보 등록</h2>

    <!-- QR 코드에서 불러온 ID 표시 -->
    <p v-if="qrId">QR ID: {{ qrId }}</p>

    <!-- 입력 폼 -->
    <form @submit.prevent="registerPet">
      <div class="form-group">
        <label>이름</label>
        <input v-model="petName" placeholder="예: 초코" required />
      </div>

      <div class="form-group">
        <label>나이</label>
        <input v-model="petAge" placeholder="예: 3살" required />
      </div>

      <div class="form-group">
        <label>특징</label>
        <textarea v-model="petDesc" placeholder="예: 사람을 잘 따르고 꼬리가 짧아요" />
      </div>

      <button type="submit" :disabled="isLoading">
        {{ isLoading ? "등록 중..." : "등록하기" }}
      </button>
    </form>
  </div>
</template>

<script setup>
/* -------------------- 🔹 import 영역 -------------------- */
import { ref } from "vue";
import { useRoute } from "vue-router";
import { fbstore } from "../firebaseConfig"; // ✅ Firebase 설정 파일에서 Firestore 불러오기
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

// route.params.id에 QR ID가 담겨 있음
const route = useRoute();
const qrId = route.params.id || null;

const petName = ref("");
const petAge = ref("");
const petDesc = ref("");
const isLoading = ref(false);

// ✅ 반려동물 등록 함수
const registerPet = async () => {
  if (!qrId) {
    alert("유효하지 않은 QR 코드입니다.");
    return;
  }

  isLoading.value = true;
  try {
    // 1️⃣ Firestore 문서 참조 (컬렉션: 'qrCodes', 문서: qrId)
    const docRef = doc(fbstore, "qrCodes", qrId);

    // 2️⃣ 기존 QR 문서 존재 확인
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      alert("QR 코드 정보가 존재하지 않습니다. QR을 다시 생성해주세요.");
      isLoading.value = false;
      return;
    }

    // 3️⃣ 새로운 반려동물 정보 저장 (QR ID 기반으로)
    await setDoc(docRef, {
      qrId: qrId,
      name: petName.value,
      age: petAge.value,
      description: petDesc.value,
      registeredAt: serverTimestamp(),
    });

    alert("반려동물 정보가 성공적으로 등록되었습니다!");
  } catch (error) {
    console.error("등록 중 오류 발생:", error);
    alert("등록 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.register-container {
  max-width: 500px;
  margin: 60px auto;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

h2 {
  text-align: center;
  color: #5a4634;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  font-weight: bold;
  margin-bottom: 6px;
  color: #333;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #a18f7a;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

button:hover {
  background-color: #8d7b68;
}
</style>
