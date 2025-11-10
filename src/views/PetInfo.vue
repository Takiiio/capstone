<template>
  <div class="pet-info" v-if="pet">
    <h2>{{ pet.name }}</h2>
    <img :src="pet.imageUrl" alt="pet image" width="200" />
    <p>종: {{ pet.species }}</p>
    <p>성별: {{ pet.gender }}</p>
    <p>QR ID: {{ pet.qrId }}</p>
  </div>
  <p v-else>동물을 불러오는 중...</p>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const route = useRoute();
const petId = route.params.id;
const pet = ref(null);

const fbstore = getFirestore();

onMounted(async () => {
  const docRef = doc(fbstore, "pets", petId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    pet.value = docSnap.data();
  } else {
    console.log("동물을 찾을 수 없습니다.");
  }
});
</script>

<style scoped>
.pet-info { padding: 20px; }
</style>
