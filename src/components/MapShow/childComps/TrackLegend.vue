<template>
  <div id="track-info">
    <div id="all-track" class="track">
      <div class="track-icon"></div>
      <div>全选</div>
    </div>
    <div id="high-track" class="track">
      <div class="track-icon"></div>
      <div>高轨卫星{{ highTrackNum }}个</div>
    </div>
    <div id="middle-track" class="track">
      <div class="track-icon"></div>
      <div>中轨卫星{{ middleTrackNum }}个</div>
    </div>
    <div id="low-track" class="track">
      <div class="track-icon"></div>
      <div>低轨卫星{{ lowTrackNum }}个</div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeMount,
  watch,
  toRef,
  isRef,
} from "vue"
import { storeToRefs } from "pinia"
import {useModelStore} from '@/store/model'

import setSatelliteNum from "./js/setSatelliteNum.js"
import getEarthOption from "./js/getEarthOption.js"

const props = defineProps({
  circleData: Object,
})
const emit = defineEmits(["changeOption"])
const modelStore = useModelStore()

let lowTrackNum = ref(0)
let middleTrackNum = ref(0)
let highTrackNum = ref(0)
let {satelliteData} = storeToRefs(modelStore)
let circleData = props.circleData
let option

onBeforeMount(() => {
  // 设置卫星数量
  ;[lowTrackNum.value, middleTrackNum.value, highTrackNum.value] =
    setSatelliteNum(satelliteData.value)
})

onMounted(() => {
  const trackInfoContainer = document.querySelector("#track-info")
  trackInfoContainer.addEventListener("click", (event) => {
    const targetNode = event.target
    if (targetNode.className === "track-icon") {
      const parentNode = targetNode.parentNode
      switch (parentNode.id) {
        case "all-track":
          option = getEarthOption(
            satelliteData.value,
            circleData.lowCircleData,
            circleData.middleCircleData,
            circleData.highCircleData
          )
          emit("changeOption", option)
          return
        case "low-track":
          option = getEarthOption(
            satelliteData.value.filter((item) => item.trackType === "low"),
            circleData.lowCircleData
          )
          emit("changeOption", option)
          return
        case "middle-track":
          option = getEarthOption(
            satelliteData.value.filter((item) => item.trackType === "middle"),
            [],
            circleData.middleCircleData,
            []
          )
          emit("changeOption", option)
          return
        case "high-track":
          option = getEarthOption(
            satelliteData.value.filter((item) => item.trackType === "high"),
            [],
            [],
            circleData.highCircleData
          )
          emit("changeOption", option)
          return
      }
    }
  })
})

watch(
  () => satelliteData.value,
  (count, precount) => {
    // console.log('watch');
    ;[lowTrackNum.value, middleTrackNum.value, highTrackNum.value] =
      setSatelliteNum(count)
  }
)
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
