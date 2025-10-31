<template>
  <div class="detail-page">
    <div class="photo-container">
      <img
        v-if="sighting.photoUrl"
        :src="sighting.photoUrl"
        alt="목격된 반려동물 사진"
        class="animal-photo"
      />
      <div v-else class="photo-placeholder">사진 준비 중</div>
    </div>

    <div class="post-header">
      <h1 class="post-title">{{ sighting.title }}</h1>
      <!-- 작성자 닉네임 데이터 없으면 주석 처리하거나 삭제 -->
      <!-- <p class="post-author">{{ sighting.authorNickname }}</p> -->
    </div>

    <div class="info-wrapper">
      <div class="info-card sighting-info">
        <h2>목격 정보</h2>
        <table class="info-table">
          <tr><th>목격일시</th><td>{{ sighting.date }} {{ sighting.time }}</td></tr>
          <tr><th>목격장소</th><td>{{ sighting.location }}</td></tr>
          <tr><th>내용</th><td>{{ sighting.content }}</td></tr>
        </table>
      </div>

      <div class="info-card contact-info">
        <h2>연락처</h2>
        <p v-if="sighting.contactPublic === 'public' && sighting.phoneno">{{ sighting.phoneno }}</p>
        <p v-else class="no-contact">비공개</p>
      </div>
    </div>
  </div>

  <div class="detail-info">
    <div>
      <h2>동물 사진</h2>
      <div><img :src="sighting.photoUrl || ''" alt="동물 사진" /></div>
    </div>
    <div>
      <h2>장소 사진</h2>
      <div><img src="" alt="장소 사진" /></div>
    </div>
    <div style="display: flex; margin: 1rem;">
      <div>
        <h2>목격 위치</h2>
        <MapApiD />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { doc, getDoc } from 'firebase/firestore'
import { useLocationStore } from '@/stores/locationStore';
import { fbstore } from '../firebaseConfig';
import MapApiD from '@/components/MapApiD.vue'

const store = useLocationStore();

const route = useRoute()
const sighting = ref({
  title: '',
  date: '',
  time: '',
  address: '',
  imageUrl: '',
  phoneno: '',
  contactPublic: 'private',
  missingId: ''
})

onMounted(async () => {
  const id = route.params.id
  const docRef = doc(fbstore, 'sightPosts', id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const postData = docSnap.data()
    sighting.value = postData
    
    store.setSightingAddress(postData.location || '');
    
    // ✅ 연결된 실종 위치 불러오기
    if (postData.missingId) {
      const missingRef = doc(fbstore, 'missingPosts', postData.missingId);
      const missingSnap = await getDoc(missingRef);
      if (missingSnap.exists()) {
        const missingData = missingSnap.data();
        store.setMissingAddress(missingData.location || '');
      }
    }
  } else {
    console.warn('문서를 찾을 수 없습니다.')
  }
})
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  --post-title-font: 1.1rem;
  --post-author-font: 0.8rem;
}
.post-title {
  margin: 0;
  font-size: var(--post-title-font);
  color: #333;
}
.post-author {
  margin: 0.5rem 0 0;
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
  width: 80%;
}

.contact-info {
  --contact-header-font: 1.1rem;
  --contact-text-font: 0.8rem;
}
.contact-info h2 {
  font-size: var(--contact-header-font);
  margin-bottom: 0.75rem;
}
.contact-info p {
  font-size: var(--contact-text-font);
}

.no-contact {
  color: #999;
  font-style: italic;
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

.detail-info img {
  width: 400px;
  height: 300px;
  background-color: white;
  margin: 1rem 1rem;
  border: none;
  flex-shrink: 0;
}
</style>
