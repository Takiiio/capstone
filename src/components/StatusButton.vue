<template>
<div class="pet-info">
  <span class="status-inside" :class="statusClass">
    {{ statusLabel }}
  </span>
</div>
</template>


<script setup>
import { computed } from 'vue';

// props 정의
const props = defineProps({
  pet: {
    type: Object,
  }
});

const statusLabel = computed(() => {
  if (props.pet?.status === 'y') return '완료';
  if (props.pet?.status === 'n') return '미완료';
  return '상태없음';
});

// CSS 클래스
const statusClass = computed(() => {
  return props.pet?.status === 'y' ? 'complete' : 'incomplete';
});

</script>
<style scoped>
.status-inside {
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
  background-color: #D3D3D3;
}
</style>