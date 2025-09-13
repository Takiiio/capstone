// src/stores/locationStore.js
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', {
  state: () => ({
    location: '',      // 실종 장소
    sightings: []     // 목격 정보 리스트
  }),
  actions: {
    setAddress(newAddress) {
      this.location = newAddress;
    },
    setSightings(data) {
      this.sightings = data;
    }
  }
});
