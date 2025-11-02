<template>
<main>
    <div class="card-container">
      
      <!-- 베이직 서비스 카드 -->
      <div class="card">
        <h2>베이직 서비스 구매</h2>
        <p class="price">6,000 ₩</p>

        <!-- 구매 버튼 -->
        <button type="button" class="paid" @click="goToPaid(6000)">구매하기</button>

        <!-- 베이직 제목 추가 -->
        <div class="feature-title">베이직 서비스 기능</div>

        <!-- 들여쓰기한 기능 설명 목록 -->
        <ul>
          <p class="feature-text">QR코드 발급만 가능합니다.</p>
          <p class="feature-text">QR스캔 시 웹에서 정보확인이 가능합니다.</p>
          <p class="feature-text">반려동물 정보, 연락처 조회가 가능합니다.</p>
        </ul>

        <!-- 이미지 -->
         <div class="card-image">
          <img src="@/assets/images/큐알.png" alt="QR코드 이미지" />
         </div>
      </div>

      <!-- 프리미엄 서비스 카드 -->
      <div class="card">
        <h2>프리미엄 서비스 구매</h2>
        <p class="price">8,000 ₩</p>

        <!-- 구매 버튼 -->
        <button type="button" class="paid" @click="goToPaid(8000)">구매하기</button>

        <!-- 프리미엄 제목 추가 -->
         <div class="feature-title">프리미엄 서비스 기능</div>

        <!-- 기능 설명 목록 -->
        <ul>
          <p class="feature-text">QR코드 실물 발급 (키링형)</p>
          <p class="feature-text">QR스캔 시 웹에서 정보확인이 가능합니다.</p>
          <p class="feature-text">반려동물 정보, 연락처 조회가 가능합니다.</p>
        </ul>
        <!-- 이미지 -->
         <div class="card-image2">
          <img src="@/assets/images/큐알키링.png" alt="QR코드 이미지" />
         </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPaid = (price) => {
  const serviceType = price ===6000 ? 'basic' : 'premium'
  router.push({ 
    name: 'paid',
    query: { price, serviceType }
  })
}
</script>

<style scoped>
    /* 상단 메뉴바 스타일 */
    header {
      display : flex;
      justify-content: space-between; /* 좌우 정렬 */
      padding : 20px 40px;
      background-color: #ffffff;
      align-items : center; /* 아이템 수직 정렬 */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 상단바 그림자 */
    }

    /* 상단바 내부 레이아웃 (로고 + 메뉴) */
    .navbar {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap : 60px;
    }

    /* 좌측 로고 스타일 */
    .logo {
      font-weight : 900; /* 로고 제일 두껍게 */
      font-size : 24px;
      color : #A18F7A
    }

    /* 메뉴 링크 스타일 */
    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: #333;
    }

    .signup-btn {
      background-color: #A18F7A;
      color: white;
      border: none;
      padding: 5px 12px;
      border-radius: 6px;
      cursor: pointer;
    }

    /* 본문 전체 영역 */
    main {
      padding: 60px 16px;
    }

    /* 서비스 카드들을 감싸는 영역 (가운데 정렬 + 간격) */
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 24px;
      max-width: 960px;
      margin: 0 auto;
    }

    /* 개별 카드 박스 스타일 */
    .card {
      background-color: #ffffff;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* 카드 그림자 */
      width: 320px;
      text-align: center;
    }

    /* 카드 제목 (ex. 베이직 서비스 구매) */
    .card h2 {
      font-size: 18px;
      margin-bottom: 8px;
    }

    /* 가격 표시 부분 */
    .card .price {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 16px;
    }

    /* 구매하기 버튼 */
    .card button {
      width: 100%;
      padding: 10px;
      border: 1px solid #a18f7a;
      background-color: transparent;
      color: #a18f7a;
      font-size: 14px;
      border-radius: 4px;
      cursor: pointer; /* 마우스 활성화 커서 */
      margin-bottom: 16px;
    }

    /* 기능 설명 리스트 (텍스트 왼쪽 정렬) */
    .card ul {
      text-align: left;
      font-size: 14px;
      padding-left: 0;
      list-style: none;
    }

    .card .feature-title {
        font-weight : 500;
        margin-bottom : 5px;
        text-align : left;
        font-size : 14px;
    }

    /* 들여쓰기 문장*/
    .card .feature-text { 
        text-indent : 24px;
        font-size : 14px;
        color : #555;
        text-align: left;
        margin : 4px 0;
    }

    /* 이미지 */
    .card-image {
      margin-top : 40px;
      text-align : center;
    }
    .card-image2 {
      margin-top : 20px;
      text-align : center;
    }

    .card-image img {
      width : 80px;
      height : 80px;
      object-fit: contain; /* 이미지 비율 유지 */
    }
    .card-image2 img {
      width : 100px;
      height : 100px;
      object-fit: contain; /* 이미지 비율 유지 */
    }

    /* 반응형 대응 (작은 화면에서 수직 정렬) */
    @media (max-width: 700px) {
      .card-container {
        flex-direction: column;
        align-items: center;
      }
    }
</style>