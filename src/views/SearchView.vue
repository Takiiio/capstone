<template>
  <div class="container">
    <div class="search-area">
      <div class="search-fields">
        <select v-model="selectedCity" @change="onCityChange" class="search-input">
          <option disabled value="">시 선택</option>
          <option v-for="city in Object.keys(cityDistrictMap)" :key="city">{{ city }}</option>
        </select>

        <select v-model="selectedDistrict" class="search-input">
          <option disabled value="">구 선택</option>
          <option v-for="gu in cityDistrictMap[selectedCity]" :key="gu">{{ gu }}</option>
        </select>

        <select v-model="selectedGender" class="search-input">
          <option disabled value="">성별</option>
          <option value="암컷">암컷</option>
          <option value="수컷">수컷</option>
          <option value="모름">모름</option>
        </select>

        <input v-model="breed" type="text" placeholder="품종 입력" class="search-input" />

        <input v-model="date" type="date" class="search-input" />

        <button class="search-btn" @click="searchPets">검색</button>
      </div>
    </div>

    <div v-if="isSearched">
      <div v-if="filteredPets.length > 0" class="pet-list">
        <PetCard
          v-for="pet in filteredPets"
          :key="pet.id"
          :pet="pet"
          @click="goToDetail(pet.id)"
        />
      </div>
      <p v-else class="no-result">일치하는 게시물이 없습니다.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, getDocs } from 'firebase/firestore'
import { fbstore } from '../firebaseConfig';
import PetCard from '../components/PetCard.vue'

const router = useRouter()

const cityDistrictMap = {
  서울특별시: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
  
}

const selectedCity = ref('')
const selectedDistrict = ref('')
const selectedGender = ref('')
const breed = ref('')
const date = ref('')
const isSearched = ref(false)
const allPets = ref([])
const filteredPets = ref([])

onMounted(async () => {
  const querySnapshot = await getDocs(collection(fbstore, 'missingPosts'))
  allPets.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})

function onCityChange() {
  selectedDistrict.value = ''
}

function searchPets() {
  isSearched.value = true
  filteredPets.value = allPets.value.filter(pet => {
    return (
      (!selectedCity.value || pet.location?.includes(selectedCity.value)) &&
      (!selectedDistrict.value || pet.location?.includes(selectedDistrict.value)) &&
      (!selectedGender.value || pet.gender === selectedGender.value) &&
      (!breed.value || pet.breed?.includes(breed.value)) &&
      (!date.value || pet.date === date.value)
    )
  })
}

function goToDetail(id) {
  router.push({ name: 'missing-detail', params: { id } })
}
</script>

<style scoped>
.container {
  padding: 40px;
  max-width: 1200px;
  margin: auto;
}
.search-area {
  background: #f5f1eb;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 30px;
}
.search-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.search-input {
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 150px;
  background: white;
}
.search-btn {
  background: #A18E7A;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s;
}
.search-btn:hover {
  background: #86705e;
}
.pet-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
}
.no-result {
  text-align: center;
  font-size: 17px;
  color: #888;
  margin-top: 40px;
}
</style>
