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
  status: {
    type: Object,
  }
});

const statusLabel = computed(() => {
  if (props.status === 'y') return '찾는중';
  if (props.status === 'n') return '찾음';
  return '상태없음';
});

// CSS 클래스
const statusClass = computed(() => {
  return props.status === 'y' ? 'incomplete' : 'complete'
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
.status-inside.incomplete {
  background-color: #51903B;
}
.status-inside.complete {
  background-color: #D3D3D3;
}
</style>