<template>
  <div class="pet-list-page">
    <header class="top-bar">
      <button class="report-btn" @click.prevent="handleWriteClick">신고서작성</button>
    </header>

    <div class="filters">
      <!-- 지역 필터 버튼 + 드롭다운 -->
      <div class="dropdown-wrapper">
        <button class="dropdown-toggle" @click="toggleDistrictDropdown">
          지역 {{ selectedDistrict !== '전체' ? `(${selectedDistrict})` : '' }} ▼
        </button>
        <!-- 드롭다운 -->
        <ul v-if="isDistrictDropdownOpen" class="dropdown-list">
          <li
            v-for="gu in ['전체', ...seoulDistricts]"
            :key="gu"
            :class="{ active: selectedDistrict === gu }"
            @click="selectDistrict(gu)"
          >
            {{ gu }}
          </li>
        </ul>
      </div>

      <!-- 미완료 토글 스위치 -->
      <label class="switch" :class="{ active: incompleteOnly }">
        <input type="checkbox" v-model="incompleteOnly" />
        <span class="slider"></span>
        <span class="label-text">{{ incompleteOnly ? '미완료' : '전체' }}</span>
      </label>

      <!-- 정렬 토글 버튼 -->
      <button class="sort-button" @click="toggleSortOrder">
        <span>최근순</span>
        <span
          class="arrow"
          :class="{ up: sortOrder === 'asc', down: sortOrder === 'desc' }"
        >▼</span>
      </button>
    </div>

    <!-- 카드 리스트 -->
    <div class="pet-list">
      <PetCard
  v-for="pet in filteredPets"
  :key="pet.id"
  :pet="pet"
  @click="goToDetail(pet)"
/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { fbstore } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import PetCard from '../components/PetCard.vue'

const router = useRouter()
const userStore = useUserStore()
const user = computed(() => userStore.user)

// 서울 구 리스트
const seoulDistricts = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구',
  '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구',
  '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구',
  '은평구', '종로구', '중구', '중랑구']

const selectedDistrict = ref('전체')
const isDistrictDropdownOpen = ref(false)
const incompleteOnly = ref(false)
const sortOrder = ref('desc')

const toggleDistrictDropdown = () => {
  isDistrictDropdownOpen.value = !isDistrictDropdownOpen.value
}

const selectDistrict = (gu) => {
  selectedDistrict.value = gu
  isDistrictDropdownOpen.value = false
}

const pets = ref([])

const handleWriteClick = () => {
  if (user.value) {
    router.push({ name: 'missing-write' })
  } else {
    alert('회원만 작성할 수 있습니다.')
  }
}

const convertTime = (timeStr) => {
  if (!timeStr || typeof timeStr !== 'string') return '00:00'

  const [ampm, hm] = timeStr.split(' ')
  if (!ampm || !hm) return '00:00'

  let [h, m] = hm.split(':').map(Number)
  if (ampm === '오후' && h < 12) h += 12
  if (ampm === '오전' && h === 12) h = 0

  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
}

const filteredPets = computed(() => {
  return [...pets.value]
    .filter(pet => {
      // 지역 필터
      return selectedDistrict.value === '전체' || pet.location.includes(selectedDistrict.value)
    })
    .filter(pet => {
      // 토글
      return !incompleteOnly.value || pet.status === 'y'
    })
    .sort((a, b) => {
      const dA = new Date(`${(a.date || '').replace(/\./g, '-')}` + ' ' + convertTime(a.time));
      const dB = new Date(`${(b.date || '').replace(/\./g, '-')}` + ' ' + convertTime(b.time));
      return sortOrder.value === 'desc' ? dB - dA : dA - dB;
})


})

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc'
}

onMounted(async () => {
  try {
    const snapshot = await getDocs(collection(fbstore, 'missingPosts'))
    const loadedPets = snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      date: data.date || '0000-00-00',
      time: data.time || '00:00'
    };
  });

    pets.value = loadedPets
  } catch (err) {
    console.error('missingPosts 불러오기 실패:', err)
  }
})


//목격 상세 정보
const goToDetail = (pet) => {
  if (!pet || !pet.id) {
    console.error('잘못된 pet 객체:', pet)
    return
  }
  router.push({ name: 'missing-detail', params: { id: pet.id } })
}
</script>

<style scoped>
.pet-list-page {
  padding: 24px;
}
.top-bar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}
.report-btn {
  padding: 8px 16px;
  background-color: #A18E7A;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.filters {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
/* 지역 필터 */
.dropdown-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
}
.dropdown-toggle {
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border: none;
  border-radius: 10px;
  background-color: #D6CCC2;
  font-size: 14px;
  line-height: 1;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  top: 8px;
}
.dropdown-list {
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 10;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  max-height: 250px;
  overflow-y: auto;
  width: 140px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.dropdown-list li {
  padding: 8px 10px;
  cursor: pointer;
}
.dropdown-list li:hover {
  background-color: #f2f2f2;
}
.dropdown-list li.active {
  background-color: #A18E7A;
  color: white;
}
/* 토글 스위치 */
.switch {
  height: 30px;
  display: inline-flex;
  align-items: center;
  background: #D6CCC2;
  padding: 6px 12px;
  border-radius: 20px;
  gap: 6px;
}
.switch input {
  display: none;
}
.slider {
  width: 32px;
  height: 16px;
  background: #eee;
  border-radius: 10px;
  position: relative;
}
.slider::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  background: #D3D3D3; /* OFF */
  border-radius: 50%;
  transition: 0.3s;
}
input:checked + .slider::before {
  transform: translateX(16px);
  background: #51903B; /* ON */
}
.label-text {
  font-size: 14px;
}

/* 날짜 정렬 */
.sort-button {
  height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  background-color: #D6CCC2;
  border: none;
  cursor: pointer;
}
.arrow {
  font-size: 10px;
  color: #FFB1B1;
  transition: transform 0.3s;
}
.arrow.up {
  transform: rotate(180deg);
}
.pet-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: start;
}
</style>
