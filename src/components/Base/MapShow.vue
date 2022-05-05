<template>
  <div class="map-show">
    <div v-show="path.includes('/timing-center') || path.includes('/working-status')">
      <EarthChina />
    </div>
    <div v-show="path.includes('/space-target')">
      <Earth />
    </div>
    <div v-show="path.includes('/ground-station')" style="position: relative;">
      <China />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useCurrentInstance from '@/hooks/useCurrentInstance';
import { useModelStore } from '@/store/model';

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
