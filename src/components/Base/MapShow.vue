<template>
  <div class="map-show">
    <div v-if="path.includes('/timing-center')">
      <EarthChina />
    </div>
    <div v-else-if="path.includes('/space-target')">
      <Earth />
    </div>
    <div v-else-if="path.includes('/ground-station')">
      <China />
    </div>
    <div v-else-if="path.includes('/working-status')">
      <EarthChina />
    </div>
  </div>
</template>

<script setup>
import useCurrentInstance from '@/hooks/useCurrentInstance';
import { useWebSocket } from '@vueuse/core'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useModelStore } from '@/store/model';

// import getStationData from '../MapShow/childComps/js/getStationData.js';
// import getSatelliteData from '../MapShow/childComps/js/getSatelliteData.js';

const {ctx} = useCurrentInstance()
const path = $computed(() => ctx.$router.currentRoute.value.path)

const modelStore = useModelStore()
let {stationData, satelliteData} = storeToRefs(modelStore)

onMounted(() => {
  let stationDataSocket = new WebSocket('ws://47.99.47.235/getStationData')
  stationDataSocket.addEventListener('message', (event) => {
    stationData.value = JSON.parse(event.data)
  })
  let satelliteDataSocket = new WebSocket('ws://47.99.47.235/getSatelliteData')
  satelliteDataSocket.addEventListener('message', (event) => {
    satelliteData.value = JSON.parse(event.data)
  })
})
</script>

<style>
.map-show {
  position: fixed;
  width: 3840px;
  height: 2160px;
  top: 0;
  bottom: 0;
}
</style>
