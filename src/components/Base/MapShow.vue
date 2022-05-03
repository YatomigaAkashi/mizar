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
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useModelStore } from '@/store/model';

import getStationData from '../MapShow/childComps/js/getStationData.js';
import getSatelliteData from '../MapShow/childComps/js/getSatelliteData.js';

const {ctx} = useCurrentInstance()
const path = $computed(() => ctx.$router.currentRoute.value.path)

const modelStore = useModelStore()
let {stationData, satelliteData} = storeToRefs(modelStore)

onMounted(() => {
  stationData.value = getStationData()
  satelliteData.value = getSatelliteData()
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