<script setup>
/* global kakao */
import { ref, watch } from 'vue';
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
      width: 200px;
    ">
      <div style="margin-bottom: 8px;">
        <img src="${marker.photoUrl}" width="100%" height="100" style="object-fit: cover; border-radius: 4px;" />
      </div>
      <div style="font-weight: bold; margin-bottom: 5px;">${marker.title}</div>
      <div style="color: #555; margin-bottom: 5px;">작성자: ${marker.author}</div>
      <div style="font-size: 0.9rem; color: #888;">${marker.date}</div>
      <div style="font-size: 0.9rem;">📍 ${marker.location}</div>
    </div>
  `;
};


const onLoadKakaoMap = (map) => {
  bounds = new kakao.maps.LatLngBounds();
  const geocoder = new kakao.maps.services.Geocoder();

  // 실종 장소 마커
watch(
    () => store.location,
    (newLocation) => {
      if (!newLocation) return;
      console.log("지도에 찍을 주소:", newLocation);

      geocoder.addressSearch(newLocation, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const lat = parseFloat(result[0].y);
          const lng = parseFloat(result[0].x);
          const position = new kakao.maps.LatLng(lat, lng);

          const marker = new kakao.maps.Marker({
            map: map,
            position: position
          });

          // ✅ 실종 위치 텍스트 인포윈도우
        const info = new kakao.maps.InfoWindow({
          content: `
            <div style="
              padding:6px 10px;
              font-size:13px;
              font-weight:600;
              background:white;
              border:1px solid #999;
              border-radius:6px;
              box-shadow:0 1px 4px rgba(0,0,0,0.2);
              ">
              실종 위치
            </div>
          `,
          removable: false, // 닫기버튼 X
        });

        // 🔹 항상 표시되도록 open()
        info.open(map, marker);

          bounds.extend(position);
          map.setBounds(bounds);
        }
      });
    },
    { immediate: true } // 처음 값 있으면 바로 실행
  )

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
              author: sighting.authorNickname || '작성자',
              date: sighting.date,
              location: sighting.location,
              photoUrl: sighting.photoUrl || ''
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
