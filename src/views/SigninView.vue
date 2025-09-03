<template>
  <div id="home">
    <main class="auth-main">
      <div class="auth-box">
        <h1 class="auth-logo">LOGO</h1>

        <!-- 로그인 폼 + 토글 링크 -->
        <template v-if="!isSignup">
          <form @submit.prevent="logIn">
            <div class="field">
              <label>이메일을 입력하세요.</label>
              <input v-model="login.email" type="text" placeholder="이메일" required />
            </div>
            <div class="field">
              <label>비밀번호를 입력하세요.</label>
              <input v-model="login.password" type="password" placeholder="비밀번호" required />
            </div>
            <button type="submit" class="btn-submit">로그인</button>
          </form>
          <p class="toggle-link">
            아직 회원이 아니신가요?
            <span @click="goToSignup">회원가입</span>
          </p>
        </template>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref,nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebaseConfig'
import {signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useUserStore } from '@/stores/user';
import { fbstore } from '../firebaseConfig';

const router = useRouter()

const goToSignup = () => {
  router.push({ name: 'signup'});
}

// 로그인
const login = ref({
  email: '',
  pw: ''
})

const logIn = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth, login.value.email, login.value.password
    )
    const user = userCredential.user

    const docRef = doc(fbstore,"users", user.uid)
    const docSnap = await getDoc(docRef)

    let userData = null
    if (docSnap.exists()){
      userData = docSnap.data()
    } else {
    console.warn("사용자를 찾을 수 없습니다")
    }

    // Pinia 저장소에 사용자 정보 저장 (nickname → displayName으로)
    const userStore = useUserStore()
    userStore.setUser({
      uid: user.uid,
      email: user.email,
      displayName: userData?.nickname
    })

    alert("로그인 성공!")
    await nextTick()
    router.push({ path: '/' })
  } catch (error) {
    alert("로그인 실패: " + error.message)
  }
}
</script>

<style scoped>
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
}
.btn-submit {
  display: inline-block; margin-top: 1rem;
  padding: 0.5rem 1.5rem; font-size: 14px;
  background: rgb(147,123,98); color: #fff;
  border: none; border-radius: 4px; cursor: pointer;
}

/* 토글 링크 스타일 */
.toggle-link {
  margin-top: 1rem;
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
