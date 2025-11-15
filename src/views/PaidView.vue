<template>
  <main class="content">
    <!-- 왼쪽: 결제 금액 안내 -->
    <section class="left">
      <h1>결제하기</h1>
      <div class="price-box">
        <span>결제금액</span>
        <strong>{{ price }} 원</strong>
      </div>
    </section>

    <!-- 오른쪽: 구매자 정보 입력 -->
    <section class="right">
      <div class="form-box">
        <h2>배송지 입력</h2>

        <div class="input-group">
          <label for="name">구매자명</label>
          <input type="text" id="name" placeholder="이름을 입력하세요" v-model="name" />
        </div>

        <div class="input-group">
          <label for="phone">연락처</label>
          <input type="text" id="phone" placeholder="전화번호를 입력하세요" v-model="phone" />
        </div>

        <!-- 주소는 프리미엄만 -->
        <div v-if="serviceType !== 'basic'">
          <div class="input-group">
            <label for="address">주소</label>
            <input type="text" id="address" placeholder="주소를 입력하세요" v-model="address" />
          </div>
        </div>

        <h2>결제수단</h2>
        <div class="payment-methods">
          <button disabled>간편결제</button>
          <button disabled>카드</button>
          <button @click="saveToFirebase">무통장입금</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fbstore } from '../firebaseConfig';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const route = useRoute();
const router = useRouter();

const auth = getAuth();

const name = ref('');
const phone = ref('');
const address = ref('');

const price = route.query.price;
const serviceType = route.query.serviceType;

// 구매 저장
const saveToFirebase = async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("로그인 후 이용해주세요");
    return;
  }

  if (!name.value || !phone.value) {
    alert("구매자명과 연락처는 필수입니다.");
    return;
  }

  const data = {
    userId: user.uid,
    name: name.value,
    phone: phone.value,
    address: serviceType !== "basic" ? address.value : "",
    amount: parseInt(price),
    serviceType,
    paymentMethod: "무통장입금",
    status: "입금대기",
    timestamp: serverTimestamp(),
  };

  try {
    // 🔥 UID = buyers 문서 ID
    await setDoc(doc(fbstore, 'buyers', user.uid), data, { merge: true });

    alert("신청이 완료되었습니다!");

    // 🔥 QR 생성 페이지로 uid 넘기기
    router.push(`/qr-generator?uid=${user.uid}`);

  } catch (err) {
    console.error(err);
    alert("오류가 발생했습니다.");
  }
};
</script>


<style scoped>
/* 스타일은 제공해주신 그대로 유지 */
header {
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #ffffff;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-weight: 900;
  font-size: 24px;
  color: #a18f7a;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

.signup-btn {
  background-color: #a18f7a;
  color: white;
  border: none;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
}

main {
  padding: 60px 16px;
}

.content {
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 60px 40px;
}

.left h1 {
  font-size: 24px;
  font-weight: bold;
}

.price-box {
  margin-top: 20px;
  background: white;
  padding: 20px 30px;
  border-radius: 16px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  width: 220px;
}

.right {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 16px;
  width: 400px;
}

.form-box h2 {
  font-size: 18px;
  margin: 20px 0 10px;
}

.form-box input {
  display: block;
  width: 100%;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.payment-methods {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.payment-methods button {
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}
</style>
