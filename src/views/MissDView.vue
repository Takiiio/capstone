<template>
  <div class="detail-page" v-if="isLoaded">
    <div class="photo-container">
      <img
        v-if="missing.photoUrl"
        :src="missing.photoUrl"
        alt="실종된 반려동물 사진"
        class="animal-photo"
      />
      <div v-else class="photo-placeholder">사진 준비 중</div>

      <div class="post-header">
        <div style="display: flex;">
          <!-- 상태(완료/미완료)를 색상 뱃지로 출력 -->
          <div v-if="missing">
          <!-- 상태 뱃지 -->
            <div>
              <div>
                <!-- missing.status를 props로 넘김 -->
                <StatusButton class="status-wrapper" :status="missing.status" />
              </div>
            </div>
          </div>
          <h1 class="post-title">{{ missing.title }}</h1>

          <!-- 점 3개 버튼 -->
          <div v-if="missing.uid === currentUid">
            <div class="menu-wrapper">
              <button class="menu-btn" @click="toggleMenu">⋮</button>
              <div v-if="showMenu" class="menu-dropdown">
                <button @click="editPost">수정</button>
                <button @click="deletePost">삭제</button>
              </div>
            </div>
          </div>
        </div>

        <p class="post-author">{{ missing.nickname || '작성자 미입력' }}</p>
        <h1 class="post-gratuity" style="position: absolute; bottom: 0; margin-bottom: 1rem;">사례금 {{ missing.reward || '없음' }}</h1>
      </div>
    </div>

    <div class="info-wrapper">
      <div class="info-card sighting-info">
        <h2>동물 정보</h2>
        <table class="info-table">
          <tr>
            <th>동물이름</th><td>{{ missing.animalName }}</td>
            <th>성별</th><td>{{ missing.gender }}</td>
          </tr>
          <tr><th>품종</th><td colspan="3">{{ missing.breed }}</td></tr>
          <tr><th>특징</th><td colspan="3">{{ missing.age }}</td></tr>
        </table>
      </div>

      <div class="info-card sighting-info">
        <h2>실종 정보</h2>
        <table class="info-table">
          <tr><th>실종일시</th><td>{{ missing.date }} {{ missing.time }}</td></tr>
          <tr><th>실종장소</th><td>{{ missing.location }}</td></tr>
          <tr><th>예상반경</th><td>{{ missing.radius }}</td></tr>
        </table>
      </div>

      <div class="info-card contact-info">
        <h2>연락처</h2>
          <p v-if="missing.contact || missing.contactPublic !== 'private'">{{ missing.contact }}</p>
          <p v-else class="no-contact">비공개</p>
        <h2>SNS 공유</h2>
        <div class="sns-share-box">
          <!-- 트위터 공유 버튼 -->
          <button @click="shareToTwitter" class="sns-icon-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" width="20" height="20" alt="Twitter (X)" />
            <span>X(트위터)</span>
          </button>

          <!-- 인스타그램 공유 버튼 -->
          <button @click="shareToInstagram" class="sns-icon-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="20" height="20" alt="Instagram" />
            <span>인스타그램</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="detail-info" v-if="isLoaded">
    <div>
      <h2>동물 사진</h2>
      <div><img :src="missing.photoUrl || ''"></div>
    </div>
    <div>
      <h2>장소 사진</h2>
      <div><img src=""></div>
    </div>


    <div style="display: flex; margin: 1rem;">
      <div>
        <h2>실종 위치</h2>
        <MapApiD />
      </div>
      <div class="sighting-list">
        <div class="list-top">
          <h2 class="list-title">목격 정보</h2>
          <button type="button" @click="goToSightW(missing.id)">+</button>
        </div>
        <div v-for="sightingD in sightings" :key=sightingD.id class="sighting-card"  @click="goToSightD(sightingD)">
          <h3 class="sighting-title">{{ sightingD.title }}</h3>
          <p class="sighting-time">{{ sightingD.date }}</p>
          <p class="sighting-location"> {{ sightingD.location }} </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useLocationStore } from '@/stores/locationStore';
import { doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { fbstore } from '../firebaseConfig';
import { getAuth } from "firebase/auth"
import MapApiD from '@/components/MapApiD.vue'
import StatusButton from '@/components/StatusButton.vue';

const store = useLocationStore();
const isLoaded = ref(false);
const showMenu = ref(false) // 점3개 메뉴 상태

const router = useRouter()
const route = useRoute()

const sightings = ref([])

const currentUid = ref(null)

const missing = ref({
  photoUrl: '',
  title: '',
  nickname: '',
  date: '',
  location: '',
  radius: '',
  status: '',
  breed: ''
})

onMounted(async () => {
  const { id } = route.params
  
  const docRef = doc(fbstore, 'missingPosts', id)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    const postData = docSnap.data()
    missing.value = postData
    
    store.setMissingAddress(postData.location || '');

    // uid(authorId) 가져오기
    if (postData.uid) {
      const userRef = doc(fbstore, 'users', postData.uid)
      const userSnap = await getDoc(userRef)
      if (userSnap.exists()) {
        missing.value.nickname = userSnap.data().nickname
        missing.value.contact = userSnap.data().phone
      } else {
        missing.value.nickname = '알 수 없음'
      }
    }

    isLoaded.value = true

  } else {
    alert('게시글을 찾을 수 없습니다.')
    router.back()
  }
})

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

onMounted(() => {
  const auth = getAuth()
  currentUid.value = auth.currentUser?.uid || null
})

const editPost = () => {
  alert('수정 페이지로 이동합니다. (임시 동작)')
  showMenu.value = false
}

const deletePost = () => {
  const confirmed = confirm('정말 삭제하시겠습니까?')
  if (confirmed) {
    alert('삭제되었습니다. (임시 동작)')
    router.push({ name: 'missing-list' })
  }
  showMenu.value = false
}

// 목격 게시글 목록
onMounted(async () => {
  try {
    const missingId = route.params.id   // 현재 보고 있는 실종 글 id
    const q = query(
      collection(fbstore, 'sightPosts'),
      where('missingId', '==', missingId)
    )
    const snapshot = await getDocs(q)

    sightings.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    // 목격 주소 스토어 전달
    store.setSightings(sightings.value)
    
  } catch (err) {
    console.error('sightPosts 불러오기 실패:', err)
  }
})

const goToSightW = (missingId) => {
  router.push({ name: 'sighting-write', params: { id: missingId } })
}

const goToSightD = (sighting) => {
  if (!sighting || !sighting.id) {
    console.error("sighting 객체 오류", sighting)
    return
  }

  router.push({ name: 'sighting-detail', params: { id: sighting.id } })
}

//트위터공유코드
const shareToTwitter = () => {
  const id = route.params.id
  const title = missing.value?.title || '분실 동물 신고'
  const location = missing.value?.location || ''
  const reward = missing.value?.reward ? `사례금: ${missing.value.reward}원` : ''
  const text = encodeURIComponent(`${title}\n ${location}\n${reward}`)
  const url = encodeURIComponent(`http://localhost:8080/miss/${id}`)  // 배포 시 도메인 변경
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`

  window.open(twitterUrl, '_blank')
}

//인스타공유코드
const shareToInstagram = () => {
  if (!missing.value) {
    alert('게시글 정보를 불러오지 못했습니다.')
    return
}

  const shareText = `
🐶 반려동물 실종 신고

이름: ${missing.value.animalName}
품종: ${missing.value.breed || '정보 없음'}
날짜: ${missing.value.date}
시간: ${missing.value.time}
장소: ${missing.value.location}

💬 ${missing.value.note || '특이사항 없음'}
💰 사례금: ${missing.value.reward || '없음'}

📞 연락처: ${missing.value.contact}
  `.trim()

  navigator.clipboard.writeText(shareText).then(() => {
    alert('📋 공유 문구가 복사되었습니다! 인스타그램에 붙여넣기 하세요.')
    window.open('https://www.instagram.com/', '_blank')
  }).catch(() => {
    alert('❌ 클립보드 복사 실패! 수동으로 복사해주세요.')
  })
}
</script>

<style scoped>
.detail-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "photo info"
    "header info";
  gap: 1.5rem;
}

.detail-info {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  position: relative;
}

.detail-info img{
  width: 400px;
  height: 300px;
  background-color: white;
  margin: 1rem 1rem;
  border: none;
  flex-shrink: 0;
  }

.photo-container {
  grid-area: photo;
}
.animal-photo {
  width: 100%;
  border-radius: 8px;
}
.photo-placeholder {
  width: 100%;
  height: 300px;
  background: #f5f5f5;
  border: 1px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  border-radius: 8px;
}

.post-header {
  grid-area: header;
  background: #fff;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  height: 200px;
  --post-title-font: 1.1rem;
  --post-author-font: 0.8rem;
}
.post-title {
  font-size: var(--post-title-font);
  color: #333;
  margin-left: 1rem;
}

.post-gratuity {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
}
.post-author {
  margin: 0.5rem 1rem 0;
  font-size: var(--post-author-font);
  color: #777;
}

.info-wrapper {
  grid-area: info;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.sighting-info {
  --sighting-header-font: 1.1rem;
  --sighting-text-font: 0.8rem;
}
.sighting-info h2 {
  font-size: var(--sighting-header-font);
  margin-bottom: 0.75rem;
}
.sighting-info .info-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--sighting-text-font);
}
.sighting-info .info-table th,
.sighting-info .info-table td {
  padding: 0.7rem;
  border-bottom: 1px solid #eee;
}
.sighting-info .info-table th {
  background-color: #f5f5f5;
  font-weight: bold;
  width: 20%;
}
.sighting-info .info-table td {
}

.contact-info {
  --contact-header-font: 1.1rem;
  --contact-text-font: 0.8rem;
}
.contact-info h2{
  font-size: var(--contact-header-font);
  margin-bottom: 0.75rem;
}

.contact-info p {
  font-size: var(--contact-text-font);
  margin-bottom: 0.75rem;
}

.no-contact {
  color: #999;
  font-style: italic;
}

.sighting-list {
  width: 300px;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  border: 1px solid rgb(214, 214, 214);
  margin-left: 1rem;
}

.list-top {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.list-top button{
  padding: 5px 10px;
  background-color:white;
  border-color:rgb(226, 226, 226);
  border-radius: 0.4rem;
  cursor: pointer;
}

.list-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.sighting-card {
  margin-bottom: 1rem;
  padding: 0.8rem;
  background:rgb(255, 255, 255);
  border-radius: 8px;
  border: 1px solid rgb(214, 214, 214);
}

.sighting-title {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.sighting-time {
  flex: 1;
  font-size: 0.9rem;
  color: #666;
}

.sighting-location {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #333;
}

.menu-wrapper {
  position: absolute;
  right: 0;
  margin-right: 1rem;
}
.menu-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 8px;
}
.menu-dropdown {
  position: absolute;
  top: 30px;
  right: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  z-index: 10;
}
.menu-dropdown button {
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}
.menu-dropdown button:hover {
  background: #f5f5f5;
}

.sns-share-box {
  margin-top: 15px;
  display: flex;
  gap: 20px;
}

.sns-icon-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: none;
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  transition: background-color 0.2s;
}
.sns-icon-btn:hover {
  transform: scale(1.1);
}

.share-wrapper {
  margin-top: 20px;
  text-align: center;
}
</style>
