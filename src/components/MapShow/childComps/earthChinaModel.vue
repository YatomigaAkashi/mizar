<template>
  <div id="earth-china-model"></div>
</template>

<script setup>
import { onMounted, ref, watch, onBeforeUnmount } from "vue"
import * as echarts from "echarts"
import "echarts-gl"
import { storeToRefs } from "pinia"
import { useModelStore } from "@/store/model.js"

import initTrackData from "./js/initTrackData.js"
import getEarthChinaOption from "./js/getEarthChinaOption.js"
import setData from "./js/setData.js"
import { sleep } from "@antfu/utils"

const modelStore = useModelStore()
let { satelliteData, stationData } = storeToRefs(modelStore)
let earthChinaEchart
let circleData = initTrackData()
let stationInfos
let option

onMounted(() => {
  stationInfos = stationData.value.map((cur) => setData(cur))
  option = getEarthChinaOption(
    stationInfos,
    satelliteData.value,
    circleData.lowCircleData,
    circleData.middleCircleData,
    circleData.highCircleData
  )
  console.time("timer")
  for (let i = 0; i < 1000000; i++) {}
  console.timeEnd("timer")
  earthChinaEchart = echarts.init(document.getElementById("earth-china-model"))
  earthChinaEchart.setOption(option)
})

onBeforeUnmount(() => {
  // earthChinaEchart.dispose()
})

watch(
  () => satelliteData.value,
  (data) => {
    option = getEarthChinaOption(
      stationInfos,
      satelliteData.value,
      circleData.lowCircleData,
      circleData.middleCircleData,
      circleData.highCircleData
    )
    earthChinaEchart.setOption(option)
  }
)
watch(
  () => stationData.value,
  (data) => {
    let stationInfos = stationData.value.map((cur) => setData(cur))
    option = getEarthChinaOption(
      stationInfos,
      satelliteData.value,
      circleData.lowCircleData,
      circleData.middleCircleData,
      circleData.highCircleData
    )
    earthChinaEchart.setOption(option)
  }
)
</script>

<style>
#earth-china-model {
  width: 3840px;
  height: 2160px;
}
</style>
