<template>
  <div id="track-info">
    <div id="all-track" class="track" @click="setFilter('all')">
      <div class="track-icon"></div>
      <div>全选</div>
    </div>
    <div id="high-track" class="track" @click="setFilter('high')">
      <div class="track-icon"></div>
      <div>高轨卫星{{ highTrackNum }}个</div>
    </div>
    <div id="middle-track" class="track" @click="setFilter('middle')">
      <div class="track-icon"></div>
      <div>中轨卫星{{ middleTrackNum }}个</div>
    </div>
    <div id="low-track" class="track" @click="setFilter('low')">
      <div class="track-icon"></div>
      <div>低轨卫星{{ lowTrackNum }}个</div>
    </div>
  </div>
</template>

<script setup>
import { useModelStore } from '@/store/model'
import { useOrbitalStore } from '@/store/orbital'
import setSatelliteNum from "./js/setSatelliteNum.js"

const { setFilter } = $(useOrbitalStore())
const { satelliteData } = $(useModelStore())

let lowTrackNum = $ref(0)
let middleTrackNum = $ref(0)
let highTrackNum = $ref(0)

watchEffect(() => [lowTrackNum, middleTrackNum, highTrackNum] = setSatelliteNum(satelliteData))
</script>

<style>
#track-info {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: calc(1920px - 761px);
  bottom: calc(-2160px + 100px);
  height: 90px;
  width: 1500px;
  padding: 0 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #204db4;
  color: #fff;
}
#track-info .track {
  display: flex;
  align-items: center;
}
#track-info .track-icon {
  display: inline-block;
  height: 30px;
  width: 30px;
  background: #3573fc;
  border: 1px solid #95aee4;
  margin-right: 15px;
  cursor: pointer;
}
</style>
