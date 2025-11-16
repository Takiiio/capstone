// src/stores/locationStore.js
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', {
  state: () => ({
    // 실종 글 주소
    missingLocation: '',

    // "검색한 목격 위치" 주소 (목격 위치 한 군데)
    sightingLocation: '',

    // 이 실종 글과 연결된 목격 게시글 리스트
    sightings: []
  }),
  actions: {
    // 실종 글 주소 세팅
    setMissingLocation(addr) {
      this.missingLocation = addr;
    },

    // 목격 위치 주소 세팅 (검색용)
    setSightingLocation(addr) {
      this.sightingLocation = addr;
    },

    // 목격 게시글 리스트 세팅
    setSightings(data) {
      this.sightings = data;
    },

    // 필요하면 한 번에 초기화할 때 사용
    clearAll() {
      this.missingLocation = '';
      this.sightingLocation = '';
      this.sightings = [];
    },

    // 🔹 기존에 쓰던 이름들과도 호환되게 하고 싶다면(선택)
    setMissingAddress(addr) {
      this.setMissingLocation(addr);
    },
    setSightingAddress(addr) {
      this.setSightingLocation(addr);
    }
  }
});
