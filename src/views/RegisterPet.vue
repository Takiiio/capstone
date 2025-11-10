<template>
  <div class="register-pet">
    <h2>반려동물 등록</h2>
    <input v-model="name" placeholder="이름" />
    <input v-model="species" placeholder="종" />
    <select v-model="gender">
      <option value="male">수컷</option>
      <option value="female">암컷</option>
    </select>
    <input type="file" @change="handleImageUpload" />
    <button @click="registerPet">등록</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

const route = useRoute();
const router = useRouter();
const qrId = route.params.qrId || null;

const name = ref("");
const species = ref("");
const gender = ref("male");
const image = ref(null);

const fbstore = getFirestore();
const storage = getStorage();

const handleImageUpload = (e) => {
  image.value = e.target.files[0];
};

const registerPet = async () => {
  if (!image.value) return alert("이미지를 선택하세요!");

  const storageReference = storageRef(storage, `pets/${image.value.name}`);
  await uploadBytes(storageReference, image.value);
  const downloadURL = await getDownloadURL(storageReference);

  await addDoc(collection(fbstore, "pets"), {
    name: name.value,
    species: species.value,
    gender: gender.value,
    imageUrl: downloadURL,
    qrId: qrId,
    createdAt: new Date()
  });

  alert("등록 완료!");
  router.push("/missing-list");
};
</script>

<style scoped>
.register-pet { padding: 20px; display: flex; flex-direction: column; gap: 10px; }
</style>
