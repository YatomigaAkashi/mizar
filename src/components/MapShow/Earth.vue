<template>
  <div id="earth-container">
    <EarthModel :option="option" />
    <TrackLegend
      @changeOption="changeOption"
      :circleData="circleData"
    />
  </div>
</template>

<script setup>
import { ref, onBeforeMount, watch } from "vue"
import { storeToRefs } from "pinia"
import {useModelStore} from '@/store/model'

import initTrackData from "./childComps/js/initTrackData.js"
import getEarthOption from "./childComps/js/getEarthOption.js"
import getSatelliteData from "./childComps/js/getSatelliteData.js"

const modelStore = useModelStore()
let circleData = initTrackData()
let {satelliteData} = storeToRefs(modelStore)
let option = ref(
  getEarthOption(
    satelliteData,
    circleData.lowCircleData,
    circleData.middleCircleData,
    circleData.highCircleData
  )
)
let otherData = [
  {
    name: "007",
    value: [0, 4, 0],
    no: "007",
    focusNo: "007",
    trackType: "high",
    tleInfo: "007",
    itemStyle: {
      color: "#039BDE",
      opacity: 1,
    },
  },
]
// setTimeout(() => {
//   console.log(1)
//   satelliteData.value.push(otherData[0])
//   option.value = getEarthOption(
//     satelliteData,
//     circleData.lowCircleData,
//     circleData.middleCircleData,
//     circleData.highCircleData
//   )
// }, 5000)

watch(() => satelliteData.value, (data, oldData) => {
  option.value = getEarthOption(
  satelliteData.value,
  circleData.lowCircleData,
  circleData.middleCircleData,
  circleData.highCircleData
  )
})

function changeOption(subOption) {
  option.value = subOption
}
</script>

<style>
#earth-container {
  position: relative;
}
</style>
