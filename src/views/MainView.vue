<template>
    <section class="logo">
      <div class="logo-img">
        <img :src="logoImage" alt="PawPaw 로고" class="main-logo" />
      </div>
    </section>

  
    <section class="pet">
  <h2>최근 실종 동물</h2>

  <!-- 게시글이 있을 때 -->
  <div
    v-if="recentPost && Object.keys(recentPost).length > 0"
    class="pet-card"
  >
    <img
      v-if="recentPost.imageUrlsAnimal && recentPost.imageUrlsAnimal.length"
      :src="recentPost.imageUrlsAnimal[0]"
      alt="목격된 반려동물 사진"
      class="pet-photo"
    />
    <div class="pet-card-info">
      <table>
        <tr>
          <td>실종 장소&nbsp;</td>
          <td>{{ recentPost.location || '정보 없음' }}</td>
        </tr>
        <tr>
          <td>실종일</td>
          <td>{{ recentPost.date || '미입력' }}</td>
        </tr>
        <tr>
          <td>견종</td>
          <td>{{ recentPost.breed || '미입력' }}</td>
        </tr>
        <tr>
          <td>성별</td>
          <td>{{ recentPost.gender || '미입력' }}</td>
        </tr>
      </table>

      <button class="detail-btn" @click="goDetail(recentPost)">상세보기</button>
    </div>
  </div>

  <!-- 게시글이 없을 때 -->
  <div v-else class="no-post-box">
    <p class="no-post-message">최근 실종 게시글이 없습니다.</p>
  </div>
</section>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { fbstore } from '../firebaseConfig';
import logoImage from '@/assets/images/로고.png' 

const recentPost = ref(null);
const router = useRouter()

onMounted(async () => {
  try {
    const q = query(collection(fbstore, "missingPosts"), orderBy("createdAt", "desc"), limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      recentPost.value = { id: doc.id, ...doc.data() };

    }
  } catch (error) {
    console.error("최근 게시글 불러오기 오류:", error);
  }
});

const goDetail = (pet) => {
  if (!pet || !pet.id) {
    console.error('잘못된 pet 객체:', pet)
    return
  }
  router.push({ name: 'missing-detail', params: { id: pet.id } })
}

// const prev = () => {}
  // 이전 동물 불러오기


// const next = () => {}
 // 다음 동물 불러오기

</script>
<style scoped>
  .logo {
    min-height: 50vh;
    max-width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  .logo-img {
    text-align: center;
    color: #f5e6d0;
  }

.main-logo {
  width: 440px;
  height: auto;
}

  .pet-card-info h3{
    color: #A18F7A;
  }
  .pet{
    min-height: 50vh;
    max-width: 100vw;
    background-color: #EFE7DA;
    margin: 0;
    justify-content: center;
    align-content: center;
    display: grid;
    place-items: center;
  }
  .pet-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    object-fit: cover;
    flex-shrink: 0; 
  }
  .pet-photo {
    width: 165px;
    height: 165px;
    object-fit: cover;
    border-radius: 5%;
    background-color: white;
    margin-right: 1rem;
    border: none;
    flex-shrink: 0; 
}
  .card-btn{
    width: 40px;
    height: 40px;
    padding: 0.5rem 1rem;
    background-color: white;
    color: #A18F7A;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin: auto 1rem;
  }
  .detail-btn {
    padding: 0.5rem 0.5rem;
    background-color: #A18F7A;
    color: white;
    display: flex;
    border: none;
    cursor: pointer;
    margin: 1rem 1rem;
  }
  .no-post-box {
    text-align: center;
    padding: 2rem 0;
  }

  .no-post-message {
    color: #888;
    font-size: 1rem;
  }


</style>