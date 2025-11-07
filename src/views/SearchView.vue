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
        >
        
        <div v-if="!imagePreviewUrl">
          <svg class="file-input-icon" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <p>이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요.</p>
        </div>
        <div v-if="imagePreviewUrl">
          <img :src="imagePreviewUrl" alt="업로드된 이미지 미리보기" class="image-preview">
          <p class="image-name">{{ imageName }}</p>
        </div>
      


        <button 
         v-if="imagePreviewUrl && !isLoading"
         @click="startImageSearch"
         class="search-btn"
         style="width: 100%; margin-top: 16px;"
        >
         이 이미지로 검색
        </button>

      <!-- ⭐️ 로딩 인디케이터 (추가) ⭐️ -->
      <div v-if="isLoading" class="loading-indicator">
           <p>유사한 이미지를 찾는 중입니다...</p>
           <!-- (여기에 스피너 CSS/SVG 추가 가능) -->
      </div>
      
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { collection, getDocs } from 'firebase/firestore'
// ⭐️ Firebase SDK 임포트 추가 (storage, functions 등)
import { fbstore, storage, functions } from '../firebaseConfig'; 
import { httpsCallable } from 'firebase/functions';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import PetCard from '../components/PetCard.vue'

const router = useRouter()

const cityDistrictMap = {
 서울특별시: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
}

// --- 1. 필터 검색 상태 ---
const selectedCity = ref('')
const selectedDistrict = ref('')
const selectedGender = ref('')
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

// ⭐️ Firebase Functions 호출 준비 (추가)
const findSimilarFunction = httpsCallable(functions, 'find_similar');


// --- 3. 공통 로직 (onMounted) ---
onMounted(async () => {
 try {
   const querySnapshot = await getDocs(collection(fbstore, 'missingPosts'))
  allPets.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
 } catch (error) {
   console.error("데이터 로드 중 오류 발생:", error);
 }
})

// --- 4. 필터 검색 메서드 ---
function onCityChange() {
 selectedDistrict.value = ''
}

function searchPets() {
 isSearched.value = true
  // 검색 버튼 클릭 시 filteredPets를 초기화하고 다시 필터링
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

// --- 5. 이미지 검색 메서드 ---

function triggerFileInput() {
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
  selectedFile.value = file; // ⭐️ 추가: 실제 파일 객체 저장
}

// ⭐️ '이미지로 검색' 버튼 클릭 시 (구현)
async function startImageSearch() {
  if (!selectedFile.value) {
    console.warn("검색할 이미지가 선택되지 않았습니다.");
    return;
  }
  
  console.log(`'${imageName.value}' 파일로 이미지 검색을 시작합니다.`);
  isLoading.value = true;
  isSearched.value = false; // 검색 시작 시 이전 결과 숨김
  filteredPets.value = []; // 결과 목록 초기화

  try {
    // 1. Storage에 검색용 이미지 업로드
    const uniquePath = `searchQueries/${Date.now()}_${selectedFile.value.name}`;
    const sRef = storageRef(storage, uniquePath);
    const uploadTask = await uploadBytes(sRef, selectedFile.value);
    const downloadURL = await getDownloadURL(uploadTask.ref);
    
    console.log("검색 이미지 URL:", downloadURL);

    // 2. Cloud Function (find_similar) 호출
    const response = await findSimilarFunction({ 
      image_url_query: downloadURL
    });

    // 3. 결과 처리
    // backend/main.py는 { similar_images: [{ id: '...', path: '...', score: ..., originalPostId: '...' }] } 반환
    const results = response.data.similar_images;
    
    if (results && results.length > 0) {
      // Vector Search 결과에서 originalPostId 목록 추출
      // ⭐️ sightPosts 변수는 사용되지 않으므로 이 줄을 삭제합니다.
      // const sightPosts = results.map(r => r.originalPostId);
      
      // ID 목록을 allPets에서 찾아 'pet' 객체로 매핑
      // Vector Search가 반환한 순서대로 정렬
      const sortedFoundPets = results.map(result => {
        return allPets.value.find(pet => pet.id === result.originalPostId);
      }).filter(Boolean); // (삭제된 게시물 등) null 값 제거
      
      filteredPets.value = sortedFoundPets;
    } else {
      filteredPets.value = [];
    }
    
    isSearched.value = true; // ⭐️ 검색 완료, 결과 표시
    
  } catch (error) {
    console.error("이미지 검색 실패:", error);
    // TODO: 사용자에게 오류 알림 UI 표시
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