<template>
  <div class="deposit-container">
    <h2>무통장 입금 안내</h2>

    <p>신청자: {{ name }}</p>
    <p>이메일: {{ email }}</p>
    <p>상품: {{ type === 'premium' ? '프리미엄' : '베이직' }}</p>
    <p>결제 금액: {{ amount }}원</p>

    <p><strong>입금 계좌:</strong> 농협 123-4567-8900 (홍길동)</p>
    <p>※ 입금 확인 후 서비스가 제공됩니다.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { fbstore } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const route = useRoute();

const name = route.query.name;
const email = route.query.email;
const type = route.query.type;
const address = route.query.address || '';
const postalCode = route.query.postalCode || '';
const phone = route.query.phone || '';
const amount = route.query.amount;

// Firestore에 저장
const saveToFirestore = async () => {
  const data = {
    name,
    email,
    type,
    address,
    postalCode,
    phone,
    amount: parseInt(amount),
    paymentMethod: '무통장입금',
    status: '입금대기',
    timestamp: serverTimestamp()
  };

  try {
    await addDoc(collection(fbstore, 'buyers'), data);
    console.log('✅ 신청 정보 저장됨');
  } catch (error) {
    console.error('❌ 저장 실패:', error);
  }
};

saveToFirestore();
</script>

<style scoped>
.deposit-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: #f9f9f9;
}
</style>
