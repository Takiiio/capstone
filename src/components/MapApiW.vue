<script setup>
/* global kakao */
import { ref, watch, nextTick } from 'vue'
import { KakaoMap } from 'vue3-kakao-maps'

const emit = defineEmits(['update:modelValue'])

const map = ref()
const address = ref('서울특별시 성동구 살곶이길 200')
const marker = ref(null)

// 서울 여부 판정: 지오코딩 결과에서 region_1depth_name 확인
function isSeoulByResultItem(item) {
  const src = item.road_address || item.address
  const region = src?.region_1depth_name
  return region === '서울특별시' || region === '서울'
}

// 좌표 -> 주소 결과에서도 재사용
function isSeoulByCoord2AddressResult(res0) {
  const src = res0.road_address || res0.address
  const region = src?.region_1depth_name
  return region === '서울특별시' || region === '서울'
}

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef

  // 초기 마커 생성
  marker.value = new kakao.maps.Marker({
    position: map.value.getCenter(),
    map: map.value
  })

  // 지도 클릭 시 마커 이동 + 주소 역변환
  kakao.maps.event.addListener(map.value, 'click', function (mouseEvent) {
    const latlng = mouseEvent.latLng
    marker.value.setPosition(latlng)
    map.value.setCenter(latlng)
    map.value.relayout()

    const geocoder = new kakao.maps.services.Geocoder()
    geocoder.coord2Address(latlng.getLng(), latlng.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {

      // 서울만 허용
        if (!isSeoulByCoord2AddressResult(result[0])) {
          alert('서울특별시 내 주소만 선택할 수 있어요.')
          return
        }

        const roadAddress = result[0].road_address?.address_name || result[0].address.address_name
        address.value = roadAddress

         // 서울이면 지도/마커 이동 + 부모 반영
        marker.value.setPosition(latlng)
        map.value.setCenter(latlng)
        map.value.relayout()

        address.value = roadAddress
        emit('update:modelValue', roadAddress)
      }
    })
  })

  // 초기 주소로 위치 설정
  searchAddress()
}

const searchAddress = () => {
  if (!address.value.trim()) return

  const geocoder = new kakao.maps.services.Geocoder()
  geocoder.addressSearch(address.value, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
    // 서울만 허용
      if (!isSeoulByResultItem(result[0])) {
        alert('서울특별시 내 주소만 검색/선택할 수 있어요.')
        return // 부모로 emit 하지 않음
      }

      const coords = new kakao.maps.LatLng(result[0].y, result[0].x)

       // 도로명 우선, 없으면 지번
       const normalized =
        result[0].road_address?.address_name || result[0].address.address_name

      marker.value.setPosition(coords)

      map.value.setCenter(coords)
      map.value.relayout()

      address.value = normalized
      emit('update:modelValue', normalized) // 검색 시 부모로 반영
    } else {
      alert('주소를 찾을 수 없습니다.')
    }
  })
}

// 모달
const modalCheck = ref(false)

const modalOpen = () => {
  modalCheck.value = !modalCheck.value
  map.value.relayout()
}

// 모달 열린 후 지도 다시 그리기
watch(modalCheck, async (val) => {
  if (val) {
    await nextTick() // DOM 업데이트 이후 실행
    if (map.value) {
      map.value.relayout()
    }
  }
})
</script>

<template>
<button @click="modalOpen" style="padding: 3px;">주소 검색</button>

<div class="modal-wrap" v-show="modalCheck">
  <div class="modal-container">

    <div style="margin-bottom: 10px;">
      <input
        v-model="address"
        @keyup.enter="searchAddress"
        placeholder="주소를 입력하세요"
        style="width: 300px; padding: 6px;"
      />
      <button @click="searchAddress" style="padding: 6px 12px; margin-left: 8px;">
        주소 검색
      </button>
    </div>

    <KakaoMap
      :lat="33.450701"
      :lng="126.570667"
      style="width: 100%; height: 500px"
      @onLoadKakaoMap="onLoadKakaoMap"
    />

      <div style="margin: 10px; font-size: 12px; color:rgb(148, 148, 148) ;">지도 클릭 시 자동으로 주소가 설정됩니다.</div>

      <div class="modal-btn">
      <button @click="modalOpen" class="modal-btn-O">확인</button>
      <button @click="modalOpen" class="modal-btn-X">닫기</button>
    </div>
  </div>
</div>
</template>

<style>
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
/* modal or popup */
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}

.modal-btn-O {
  padding: rem 1.5rem;
  background-color: rgb(147, 123, 98);
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 2px;
  cursor: pointer;
  width: 50px;
  height: 30px;
  align-self: center;
}
.modal-btn-X {
  padding: rem 1.5rem;
  background-color: rgb(229, 229, 229);
  color: black;
  border: none;
  margin: 2px;
  border-radius: 4px;
  cursor: pointer;
  width: 50px;
  height: 30px;
  align-self: center;
}
</style>