<template>
  <!-- 동물 정보를 보여주는 카드 -->
  <div v-if="pet" class="pet-card" @click="handleClick">

    <!-- ✅ 이미지 유무에 따라 조건부 표시 -->
    <div v-if="pet.imageUrlsAnimal" class="pet-image-wrapper">
      <!-- 이미지가 있을 경우 표시 -->
      <img 
      :src="pet.imageUrlsAnimal[0]"
      alt="실종된 반려동물 사진"
      class="pet-image" />
    </div>

    <div v-else class="pet-placeholder">
      <!-- 이미지 없을 경우 빈칸 + 아이콘 + 텍스트 표시 -->
      <span class="placeholder-icon">📷을 등록하세요</span>
      <span class="placeholder-text">사진 없음</span>
    </div>

    <div class="pet-info">
      <!-- 완료/미완료 상태 배지 -->
      <span
        class="status-inside"
        :class="statusClass"
      >
         {{ statusLabel }}
      </span>

      <!-- 텍스트 정보 -->
      <p><strong>실종장소:</strong> {{ pet.location }}</p>
      <p><strong>날짜:</strong> {{ pet.date }}</p>
      <p><strong>시간:</strong> {{ pet.time }}</p>
      <p><strong>축종/품종:</strong> {{ pet.breed }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
      required: true
    }
  },
  computed: {
    // status 값을 한글 라벨로 변환
    statusLabel() {
      if (this.pet.status === 'y') return '찾는중'
      if (this.pet.status === 'n') return '찾음'
      return '목격'
    },
    statusClass() {
      return this.pet.status === 'y' ? 'incomplete' : 'complete'
    }
  },
  methods: {
    handleClick() {
      console.log('카드 클릭됨:', this.pet);
    }
  }
}
</script>

<style scoped>
.pet-card {
  width: 300px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s ease-in-out;
}

.pet-card:hover {
  transform: scale(1.02);
}

.pet-image-wrapper {
  width:100%;
  height:220px;
}
.pet-image {
  width:100%;
  height:220px;
}

/* ✅ 이미지 없을 때 빈칸 스타일 */
.pet-placeholder {
  width:100%;
  height:220px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 12px;
  gap: 4px;
}
.placeholder-icon {
  font-size: 20px;
}
.status {
  display: none;
}
.pet-info {
  position: relative;
  padding: 16px;
  padding-top: 10px;
  font-size: 15px;
  line-height: 1.5;
}
.status-inside {
  position: absolute;
  top: 10px;
  right: 8px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  color: white;
}
.status-inside.complete {
  background-color: #51903B;
}
.status-inside.incomplete {
  background-color: #FFB1B1;
}
</style>