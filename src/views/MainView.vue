<template>
    <section class="logo">
      <div class="logo-img">
        <h2>LOGO</h2>
      </div>
    </section>
    <section class="pet">
      <button @click="prev" class="card-btn">&lt;</button>
        <div class="pet-card">
          <img :src="pet.image" alt="발견 동물" class="pet-photo"/>
            <div class="pet-card-info">
              <h3>발견 동물</h3>
              <p>발견 장소: {{ pet.location }}</p>
              <p>발견 일시: {{ pet.datetime }}</p>
              <p>견종: {{ pet.breed }}</p>
              <p>성별: {{ pet.gender }}</p>
              <p>특징: {{ pet.features }}</p>
              <button class="detail-btn">상세보기</button>
            </div>
        </div>
      <button @click="next" class="card-btn">&gt;</button>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const pet = ref ({
  location: '용답역 2번 출구 앞',
  datetime: '2025-2-4 21:25',
  breed: '시바견',
  gender: '암컷',
  features: '머리에 흰 반점이 하나 있음, 사람을 무서워 함',
})

const prev = () => {
  // 이전 동물 불러오기
}

const next = () => {
 // 다음 동물 불러오기
}
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
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .pet-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: auto 1rem;
    height: 37vh;
    object-fit: cover;
    flex-shrink: 0; 
  }
  .pet-photo {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    background-color: white;
    margin: auto 1rem;
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