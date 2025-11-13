<script setup>
/* global kakao */
import { ref, watch, onMounted } from 'vue';
import { KakaoMap, KakaoMapMarker, KakaoMapCustomOverlay } from 'vue3-kakao-maps';
import { useLocationStore } from '@/stores/locationStore';

const store = useLocationStore();
const singleMarker = ref(null);
const extraMarkers = ref([]);

const activeOverlayKey = ref(null);

const onClickMarker = (key) => {
  activeOverlayKey.value = activeOverlayKey.value === key ? null : key;
};

let bounds;

const generateOverlayContent = (marker) => {
  return `
    <div style="
      padding: 10px;
      background-color: white;
      border: 1px solid #ccc;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 300px;
      width: auto; 
      word-break: break-word;
    ">
      <div style="margin-bottom: 8px;">
        <img src="${marker.photoUrl}" width="100%" height="100" style="object-fit: cover; border-radius: 4px;" />
      </div>
      <div style="font-weight: bold; margin-bottom: 5px;">${marker.title}</div>
      <div style="color: #555; margin-bottom: 5px;">작성자: ${marker.nickname}</div>
      <div style="font-size: 0.9rem; color: #888;">${marker.date}</div>
      <div style="font-size: 0.9rem;">📍 ${marker.location}</div>
    </div>
  `;
};

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    // 이미 로드됨
    window.kakao.maps.load(() => {
      console.log('Kakao SDK 로드 완료');
    });
  } else {
    console.warn('Kakao SDK가 아직 로드되지 않았습니다.');
  }
});

const onLoadKakaoMap = (map) => {
  bounds = new kakao.maps.LatLngBounds();
  const geocoder = new kakao.maps.services.Geocoder();

  // 실종 게시글의 마커
watch(
    () => store.missingLocation,
    (newLocation) => {
      if (!newLocation) return;
      console.log("지도에 찍을 주소:", newLocation);

      geocoder.addressSearch(newLocation, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const lat = parseFloat(result[0].y);
          const lng = parseFloat(result[0].x);
          const position = new kakao.maps.LatLng(lat, lng);

          new kakao.maps.Marker({
            map: map,
            position: position
          });

        const label = document.createElement("div");
        label.innerHTML = "실종 위치";
        label.style.cssText = `
          background: #FFB1B1;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          border-radius: 4px;
          padding: 5px 10px;
          white-space: nowrap;
          transform: translateY(-40px); /* 마커 위쪽으로 띄움 */
        `;

        new kakao.maps.CustomOverlay({
          map,
          position,
          content: label,
          yAnchor: 1,
        });

          bounds.extend(position);
          map.setBounds(bounds);
        }
      });
    },
    { immediate: true } // 처음 값 있으면 바로 실행
  )

  watch(
    () => store.sightingLocation,
    (loc) => {
      if (!loc) return;
      geocoder.addressSearch(loc, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const lat = parseFloat(result[0].y);
          const lng = parseFloat(result[0].x);
          const position = new kakao.maps.LatLng(lat, lng);

          // 목격 마커
          new kakao.maps.Marker({ map, position });

          // 목격 라벨
          const label = document.createElement("div");
          label.innerText = "목격 위치";
          label.style.cssText = `
            background: #2d7f50;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            border-radius: 4px;
            padding: 5px 10px;
            transform: translateY(-40px);
          `;

          new kakao.maps.CustomOverlay({
            map,
            position,
            content: label,
            yAnchor: 1,
          });

          bounds.extend(position);
          map.setBounds(bounds);
        }
      });
    },
    { immediate: true }
  );

  // sightings 마커들
  store.sightings.forEach((sighting, index) => {
    geocoder.addressSearch(sighting.location, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const lat = parseFloat(result[0].y);
        const lng = parseFloat(result[0].x);

        extraMarkers.value.push({
              key: index,
              lat: parseFloat(result[0].y),
              lng: parseFloat(result[0].x),
              title: sighting.title,
              nickname: sighting.nickname || '작성자',
              date: sighting.date,
              location: sighting.location,
              photoUrl: sighting.imageUrls?.[0] || ''
            });
        bounds.extend(new kakao.maps.LatLng(lat, lng));
        map.setBounds(bounds);
      }
    });
  });
};
</script>

<template>
  <KakaoMap
    :lat="33.450701"
    :lng="126.570667"
    @onLoadKakaoMap="onLoadKakaoMap"
    style="margin-top: 1rem; width: 50rem;"
  >
    <KakaoMapMarker
      v-if="singleMarker"
      :lat="singleMarker.lat"
      :lng="singleMarker.lng"
    />
      <template v-for="marker in extraMarkers" :key="marker.key">
        <KakaoMapMarker :lat="marker.lat" :lng="marker.lng"
         @onClickKakaoMapMarker="onClickMarker(marker.key)" :clickable="true"
        />

        <KakaoMapCustomOverlay
          v-if="activeOverlayKey === marker.key"
          :lat="marker.lat"
          :lng="marker.lng"
          :yAnchor="1.2"
          :content="generateOverlayContent(marker)"
        />
    </template>
  </KakaoMap>
</template>
