<template>
  <div class="qr-detail">
    <h2>발급된 QR 코드</h2>

    <img v-if="qrImage" :src="qrImage" alt="QR Code" />

    <p v-else>QR 코드를 불러오는 중...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import QRCode from 'qrcode';

const route = useRoute();
const qrId = route.params.qrId;

const qrImage = ref(null);

onMounted(async () => {
  const baseUrl =
    window.location.origin + window.location.pathname.replace(/\/$/, "");
  const qrUrl = `${baseUrl}#/register/${qrId}`;

  qrImage.value = await QRCode.toDataURL(qrUrl);
});
</script>
