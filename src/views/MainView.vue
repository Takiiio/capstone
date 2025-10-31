<template>
    <section class="logo">
      <div class="logo-img">
        <h2>LOGO</h2>
      </div>
    </section>

  
    <section class="pet"  v-if="recentPost">
    <h2>최근 실종 동물</h2>
      <!-- <button @click="prev" class="card-btn">&lt;</button> -->
        <div class="pet-card">
          <img :src="recentPost.photoUrl" alt="발견 동물" class="pet-photo"/>
            <div class="pet-card-info">
              <table>
                <tr>
                  <td>실종 장소 &nbsp; </td>
                  <td>{{ recentPost.location }}</td>
                </tr>
                <tr>
                  <td>실종일</td>
                  <td>{{ recentPost.date }}</td>
                </tr>
                <tr>
                  <td>견종</td>
                  <td>{{ recentPost.breed }}</td>
                </tr>
                <tr>
                  <td>성별</td>
                  <td>{{ recentPost.gender }}</td>
                </tr>
              </table>

              <button class="detail-btn" @click="goDetail(recentPost)">상세보기</button>
            </div>
        </div>
      <!-- <button @click="next" class="card-btn">&gt;</button> -->
    </section>

    <p v-else>최근 실종 게시글이 없습니다.</p>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { fbstore } from '../firebaseConfig';

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
  .logo{
    min-height: 50vh;
    max-width: 100vw;
    margin: 0;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .logo-img{
    margin: auto;
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



</style>