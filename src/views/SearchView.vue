<template>
<div class="container">
    <div class="tab-buttons">
      <button
        @click="searchMode = 'filter'"
         :class="{ 'active-tab': searchMode === 'filter' }"
      >
         필터링 검색
      </button>
       <button
         @click="searchMode = 'image'"
         :class="{ 'active-tab': searchMode === 'image' }"
       >
        이미지 검색
       </button>
     </div>

     <div v-if="searchMode === 'filter'">
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

    <div v-if="searchMode === 'image'">
      <h2 class="search-title">이미지로 검색</h2>
      <p class="search-description">검색할 이미지를 업로드해 주세요.</p>

      <div 
         class="file-input-wrapper"
         @click="triggerFileInput"
         @dragover.prevent
         @drop.prevent="handleFileDrop"
      >
       <input 
          type="file" 
          ref="fileInput" 
          style="display: none;" 
          @change="handleFileSelect"
          accept="image/*"
        />
        
        <div v-if="!imagePreviewUrl">
          <svg class="file-input-icon" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요.</p>
        </div>
        <div v-if="imagePreviewUrl">
          <img :src="imagePreviewUrl" alt="업로드된 이미지 미리보기" class="image-preview">
          <p class="image-name">{{ imageName }}</p>
        </div>
      

      <!-- ⭐️ 로딩 인디케이터 (추가) ⭐️ -->
      <div v-if="isLoading" class="loading-indicator">
           <p>유사한 이미지를 찾는 중입니다...</p>
           <!-- (여기에 스피너 CSS/SVG 추가 가능) -->
      </div>
    </div>
      <button 
         v-if="imagePreviewUrl && !isLoading"
         @click="startImageSearch"
         class="search-btn"
         style="width: 100%; margin-top: 16px;"
        >
         이 이미지로 검색
        </button>
      
      <!-- ⭐️ 이미지 검색 결과 (추가) ⭐️ -->
      <div v-if="!isLoading && isSearched">
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, getDocs } from 'firebase/firestore'
import { fbstore, storage } from '../firebaseConfig'; 
// import { httpsCallable } from 'firebase/functions' 
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import PetCard from '../components/PetCard.vue'

const router = useRouter()

const cityDistrictMap = {
  서울특별시: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
}

// --- 1. 필터 검색 상태 ---
const selectedCity = ref('')
const selectedDistrict = ref('')
const selectedGender = ref(null) 
const breed = ref('')
const date = ref('')
const isSearched = ref(false)
const allPets = ref([])
const filteredPets = ref([])

// --- 2. 모드 전환 및 이미지 검색 상태 ---
const searchMode = ref('filter'); // 'filter' 또는 'image'
const fileInput = ref(null); 
const imagePreviewUrl = ref(null); 
const imageName = ref(''); 

// ⭐️ 이미지 검색을 위한 상태 (추가)
const selectedFile = ref(null); // 실제 파일 객체 저장
const isLoading = ref(false);     // 로딩 상태

// ⭐️ (수정) on_request 함수는 배포 후 URL을 직접 사용합니다.
// (배포 후) `firebase deploy --only functions` 로그에 표시되는 URL로 변경하세요.
const FIND_SIMILAR_URL = "https://us-central1-capstone-12e6910598105066.cloudfunctions.net/find_similar";

// ⭐️ (수정) httpsCallable을 사용하지 않습니다.
// const findSimilarFunction = httpsCallable(functions, 'find_similar');

// --- 공통 로직 (onMounted) ---
onMounted(async () => {
  // ⭐️ (수정) functions SDK가 필요 없으므로, config 파일 체크 로직 제거
  try {
    const querySnapshot = await getDocs(collection(fbstore, 'missingPosts'))
    allPets.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error("데이터 로드 중 오류 발생:", error);
  }
})

function onCityChange() {
  selectedDistrict.value = ''
}

// --- 필터링 검색 메서드 ---
function searchPets() {
  isSearched.value = true
  filteredPets.value = allPets.value.filter(pet => {
    return (
      (!selectedCity.value || pet.location?.includes(selectedCity.value)) &&
      (!selectedDistrict.value || pet.location?.includes(selectedDistrict.value)) &&
      (!selectedGender.value || pet.gender === selectedGender.value) &&
      (!breed.value || pet.breed?.toLowerCase().includes(breed.value.toLowerCase())) &&
      (!date.value || pet.date === date.value)
    )
  })
}

function goToDetail(id) {
  router.push({ name: 'missing-detail', params: { id } })
}

// --- 이미지 검색 메서드 ---

function triggerFileInput() {
  if (isLoading.value) return; 
  fileInput.value.click();
}

function handleFileSelect(event) {
  processFile(event.target.files[0]);
}

function handleFileDrop(event) {
  processFile(event.dataTransfer.files[0]);
}

function processFile(file) {
  if (!file || !file.type.startsWith('image/')) {
    console.warn('이미지 파일만 업로드해 주세요.');
    return;
  }
  
  if (imagePreviewUrl.value) {
    URL.revokeObjectURL(imagePreviewUrl.value);
  }

  imagePreviewUrl.value = URL.createObjectURL(file);
  imageName.value = file.name;
  selectedFile.value = file;
  isSearched.value = false;
  filteredPets.value = [];
}

// ⭐️ '이미지로 검색' 버튼 클릭 시 (수정: fetch 사용)
async function startImageSearch() {
  if (!selectedFile.value) {
    console.warn("검색할 이미지가 선택되지 않았습니다.");
    return;
  }
  
  console.log(`'${imageName.value}' 파일로 이미지 검색을 시작합니다.`);
  isLoading.value = true;
  isSearched.value = false;
  filteredPets.value = [];

  try {
    // 1. Storage에 검색용 이미지 업로드 (동일)
    const uniquePath = `searchQueries/${Date.now()}_${selectedFile.value.name}`;
    const sRef = storageRef(storage, uniquePath);
    const uploadTask = await uploadBytes(sRef, selectedFile.value);
    const downloadURL = await getDownloadURL(uploadTask.ref);
    
    console.log("검색 이미지 URL:", downloadURL);

    // ⭐️ 2. (수정) httpsCallable 대신 'fetch'를 사용하여 on_request 함수 호출
    const response = await fetch(FIND_SIMILAR_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // ⭐️ on_request는 { data: ... } 래퍼가 필요 없습니다.
      body: JSON.stringify({ 
        image_url_query: downloadURL 
      })
    });

    if (!response.ok) {
      // ⭐️ fetch는 4xx, 5xx 오류를 catch로 던지지 않으므로 수동 처리
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP ${response.status} 오류`);
    }
    
    // ⭐️ (수정) fetch의 응답(response.json())이 바로 결과입니다.
    const resultsData = await response.json();
    const results = resultsData.similar_images;

    // 3. 결과 처리 (동일)
    if (results && results.length > 0) {
      const sortedFoundPets = results.map(result => {
        return allPets.value.find(pet => pet.id === result.originalPostId);
      }).filter(Boolean); 
      
      filteredPets.value = sortedFoundPets;
    } else {
      filteredPets.value = [];
    }
    
    isSearched.value = true; 
    
  } catch (error) {
    console.error("이미지 검색 실패:", error);
    alert(`이미지 검색에 실패했습니다: ${error.message}`);
  } finally {
    isLoading.value = false;
  }
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

.tab-buttons {
  display: flex;
  border-bottom: 2px solid #eee;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
}
.tab-buttons button {
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  color: #888;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px; 
  transition: color 0.3s, border-color 0.3s;
}
.tab-buttons button:hover {
  color: #555;
}
.tab-buttons button.active-tab {
  color: #A18E7A; 
  border-bottom-color: #A18E7A;
  font-weight: 600;
}

.search-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}
.search-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.file-input-wrapper {
  border: 2px dashed #ccc;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  cursor: pointer;
  background: #f9f9f9;
  transition: background 0.3s, border-color 0.3s;
}
.file-input-wrapper:hover {
  background: #f1f1f1;
  border-color: #aaa;
}
.file-input-icon {
  margin: 0 auto;
  height: 48px;
  width: 48px;
  color: #aaa;
}
.file-input-wrapper p {
  margin-top: 10px;
  color: #777;
  font-size: 15px;
}
.image-preview {
  max-height: 240px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  object-fit: contain;
}
.image-name {
  margin-top: 12px;
  font-size: 14px;
  color: #555;
  font-weight: 500;
}
</style>