<template>
  <div id="home">
    <main class="auth-main">
      <div class="auth-box">
        <h1 class="auth-logo">LOGO</h1>

        <form @submit.prevent="nextStep">
          <div class="step-indicator">{{ currentStep }}/3</div>
          <div class="progress">
            <div
              class="progress-bar"
              :style="{ width: (currentStep/3*100) + '%' }">
            </div>
          </div>

          <div v-if="currentStep===1">
            <div class="field">
              <label>이메일을 입력하세요.</label>
              <input v-model="sign.email" type="email" placeholder="example@example.com" required />
            </div>
            <div class="field">
              <label>비밀번호를 입력하세요.</label>
              <input v-model="sign.pw" type="password" placeholder="비밀번호" required />
            </div>
          </div>

          <div v-else-if="currentStep===2">
            <div class="field">
              <label>전화번호를 입력하세요.</label>
              <input v-model="sign.phone" type="tel" placeholder="010-1234-5678" required />
            </div>
            <div class="field">
              <label>계좌번호를 입력하세요.</label>
              <input v-model="sign.account" type="text" placeholder="123-456-789012" />
            </div>
            <div class="field">
              <label>은행을 입력하세요.</label>
              <input v-model="sign.bank" type="text" placeholder="은행명" />
            </div>
          </div>

          <div v-else>
            <div class="field">
              <label>이름을 입력하세요.</label>
              <input v-model="sign.name" type="text" placeholder="이름" required />
            </div>
            <div class="field">
              <label>닉네임을 입력하세요.</label>
              <div class="input-group">
                <input v-model="sign.nickname" type="text" placeholder="닉네임" required />
                <button @click="checkNickname" type="button" class="btn-check">중복 확인</button>
              </div>
              <p v-if="nicknameCheckMessage" :class="isNicknameAvailable ? 'available' : 'unavailable'" class="nickname-message">
                {{ nicknameCheckMessage }}
              </p>
            </div>
          </div>

          <div class="button-group">
            <button v-if="currentStep > 1" @click="prevStep" type="button" class="btn-prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button type="submit" class="btn-submit">
              {{ currentStep < 3 ? '저장하기' : '완료' }}
            </button>
          </div>
        </form>

        <p class="toggle-link">
          이미 계정이 있으신가요?
          <span @click="goToLogin">로그인</span>
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebaseConfig'
import { collection, getDocs, where, doc, setDoc, query} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { fbstore } from '../firebaseConfig';

const router = useRouter()

const goToLogin = () => {
  router.push({ name: 'signin'});
}

// 회원가입
const currentStep = ref(1)
const sign = ref({
  pw: '', email: '', phone: '',
  account: '', bank: '', name: '', nickname: ''
})

const nicknameCheckMessage = ref('')
const isNicknameAvailable = ref(false)

watch(() => sign.value.nickname, (newNickname) => {
  if (newNickname) {
    isNicknameAvailable.value = false;
    nicknameCheckMessage.value = '';
  }
});

const checkNickname = async () => {
  const nickname = sign.value.nickname.trim();
  if (!nickname) {
    alert('닉네임을 입력해주세요.');
    return;
  }

  try {
    const usersRef = collection(fbstore, 'users');
    const nicknameQuery = query(usersRef, where('nickname', '==', nickname));
    const snapshot = await getDocs(nicknameQuery);

    if (!snapshot.empty) {
      nicknameCheckMessage.value = '이미 사용 중인 닉네임입니다.';
      isNicknameAvailable.value = false;
    } else {
      nicknameCheckMessage.value = '사용 가능한 닉네임입니다.';
      isNicknameAvailable.value = true;
    }
  } catch (error) {
    console.error("닉네임 확인 중 오류:", error);
    nicknameCheckMessage.value = '오류가 발생했습니다. 다시 시도해주세요.';
    isNicknameAvailable.value = false;
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
}

const nextStep = async () => {
  if (currentStep.value === 1) {
    if (!sign.value.email || !sign.value.pw) {
      alert('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }
  } else if (currentStep.value === 2) {
    if (!sign.value.phone) {
      alert('전화번호를 입력해주세요.');
      return;
    }
  }

  if (currentStep.value < 3) {
    currentStep.value++
  } else {
    if (!sign.value.name || !sign.value.nickname) {
        alert('이름과 닉네임을 모두 입력해주세요.');
        return;
    }
    

    if (!isNicknameAvailable.value) {
      alert('닉네임 중복 확인을 완료해주세요.');
      return;
    }
      
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, sign.value.email, sign.value.pw)
      const user = userCredential.user

      await setDoc(doc(fbstore,"users", user.uid), {
        email: user.email,
        phone: sign.value.phone,
        account: sign.value.account,
        bank: sign.value.bank,
        name: sign.value.name,
        nickname: sign.value.nickname,
        createdAt: new Date().toISOString()
      })

      alert('회원가입 성공!')
      router.push({ name: 'signin' })
    } catch (error) {
      console.error('회원가입 실패:', error)
      alert(error.message)
    }
  }
}
</script>

<style scoped>
/* 기존 스타일은 그대로 유지 */
.auth-main {
  display: flex; justify-content: center; align-items: center;
  height: calc(100vh - 80px);
}
.auth-box {
  position: relative;
  width: 380px; padding: 2rem;
  border: 1px solid rgb(147,123,98);
  border-radius: 8px; background: #fff;
  text-align: center;
}
.auth-logo {
  position: absolute;
  top: -5rem; left: 50%;
  transform: translateX(-50%);
  padding: 0 0.5rem; background: #fff; font-size: 2rem;
  color: rgb(147,123,98); z-index: 1;
}
.step-indicator {
  text-align: left; font-size: 0.9rem; color: rgb(147,123,98);
  margin-bottom: 0.25rem;
}
.progress {
  width: 100%; height: 6px;
  background: #e0e0e0; border-radius: 3px;
  overflow: hidden; margin-bottom: 1.5rem;
}
.progress-bar {
  height: 100%; background: rgb(147,123,98);
  transition: width 0.3s;
}
.field {
  margin-bottom: 1rem; text-align: left;
}
.field label {
  display: block; margin-bottom: 0.5rem;
  color: rgb(147,123,98); font-size: 0.9rem;
}
.field input {
  width: 100%; padding: 0.5rem;
  border: 1px solid rgb(147,123,98);
  border-radius: 4px;
  box-sizing: border-box; /* ✅ 추가 */
}

/* ✅ 닉네임 입력 그룹 스타일 */
.input-group {
  display: flex;
  gap: 0.5rem;
}
.input-group input {
  flex-grow: 1; /* 남은 공간을 모두 차지 */
}

/* ✅ 중복 확인 버튼 스타일 */
.btn-check {
  padding: 0 0.75rem;
  border: 1px solid rgb(147,123,98);
  background-color: #fff;
  color: rgb(147,123,98);
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap; /* 글자 줄바꿈 방지 */
}
.btn-check:hover {
  background-color: #f7f7f7;
}

/* ✅ 닉네임 확인 메시지 스타일 */
.nickname-message {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: left;
}
.nickname-message.available {
  color: green;
}
.nickname-message.unavailable {
  color: red;
}

.button-group {
  position: relative; 
  display: flex;
  justify-content: center; 
  align-items: center;
  margin-top: 1rem;
}
.btn-submit {
  display: inline-block;
  padding: 0.5rem 1.5rem; font-size: 14px;
  background: rgb(147,123,98); color: #fff;
  border: none; border-radius: 4px; cursor: pointer;
}
.btn-prev {
  position: absolute; 
  left: 0; 
  top: 50%; 
  transform: translateY(-50%); 
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: rgb(147,123,98);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.btn-prev:hover {
  background-color: #f0f0f0;
}
.toggle-link {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
}
.toggle-link span {
  color: rgb(147,123,98);
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.3rem;
}
.toggle-link span:hover {
  text-decoration: underline;
}
</style>