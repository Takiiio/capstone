// src/stores/locationStore.js
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', {
  state: () => ({
    address: '',      // 실종 장소
    sightings: []     // 목격 정보 리스트
  }),
  actions: {
    setAddress(newAddress) {
      this.address = newAddress;
    },
    setSightings(data) {
      this.sightings = data;
    }
  }
});
