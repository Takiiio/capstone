<template>
  <div id="app">
    <header class="navbar">
      <div class="logo">
          <router-link to="/" class="nav-link">
            <img :src="smallLogo" alt="PawPaw 로고" class="header-logo-img" />
          </router-link>
      </div>
      <nav class="navbar-nav" >
        <ul class="navbar-nav-menu">
          <li>
            <router-link to="/missing-list" class="nav-link">실종 동물 찾기</router-link>
          </li>
          <li>
          <router-link to="/missing-write" class="nav-link">실종 신고하기</router-link>
          </li>
          <li>
            <router-link to="/search" class="nav-link">검색하기</router-link>
          </li>
          <li>
            <router-link to="/pricing" class="nav-link">유료서비스</router-link>
          </li>
        </ul>
      </nav>
      <div class="user-actions">
        <button type="button" class="signup" @click="user ? goToProfile() : goToSignup()">
        {{ user?.nickname || user?.displayName || '회원가입' }}
        </button>
        <button v-if="user" class="signup" type="button" @click="logout">
          로그아웃
        </button>
      </div>
    </header>

    <section>
      <router-view />
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebaseConfig'
import { watch, computed } from 'vue'
import smallLogo from '@/assets/images/로고2.png'

const router = useRouter()
const userStore = useUserStore()
console.log('메인 페이지 userStore ID:', userStore)

const user = computed(() => userStore.user)

const goToSignup = () => {
  router.push({ name: 'signup'});
};
const goToProfile = () => {
  router.push({ name: 'mypage' });
};

// const handleWriteClick = () => {
//   if (user.value) {
//     router.push({ name: 'missing-write' })
//   } else {
//     alert('회원만 작성할 수 있습니다.')
//   }
// }

watch(
  () => userStore.user,
  (val) => {
    console.log('user 상태가 바뀜:', val)
  },
  { immediate: true }
)

const logout = async () => {
  try {
    await signOut(auth)
    userStore.clearUser()
    alert('로그아웃 되었습니다!')
    router.push({ name: 'signin' })
  } catch (err) {
    console.error('로그아웃 실패:', err)
    alert('로그아웃 중 오류가 발생했습니다.')
  }
}
</script>

<style scoped>
.navbar {
  min-height: 10vh;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}
.logo {
  flex: 1;
  margin: 1rem 2rem;
}

.logo .nav-link {
  font-weight: bold;
  color: #A18F7A;
  font-size: 30px;
  text-decoration-line: none;
}
.header-logo-img {
    width: 120px; 
    height: auto;
    display: block; 
}

.navbar-nav {
  flex: 2;
  display: flex;
  justify-content: center;
}

.navbar-nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 1rem 2rem;
}

.navbar-nav-menu .nav-link {
  font-weight: bold;
  color: #000000;
  text-decoration-line: none;
  cursor: pointer;
}

.user-actions{
  flex: 1;
  display: flex;
  justify-content: flex-end;
}


.user-actions .signup{
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #A18F7A;
  color: white;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
}

</style>
