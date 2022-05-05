<template>
  <div id="china"></div>
</template>

<script setup>
import { onMounted, watch, ref } from "vue"
import * as echarts from "echarts"
import "echarts-gl"
import { chinaMap } from "@/assets/map/china.js"
import { storeToRefs } from "pinia"
import { useModelStore } from "@/store/model.js"

import getChinaOption from './js/getChinaOption.js'
import setData from './js/setData.js'

const modelStore = useModelStore()
let chinaChart
let option
const {stationData} = storeToRefs(modelStore)
const stationInfos = stationData.value.map((cur) => setData(cur))

onMounted(() => {
  setTimeout(() => {
    chinaChart = echarts.init(document.getElementById("china"))
    option = getChinaOption(stationInfos)
    chinaChart.setOption(option)
    chinaChart.on("click", (params) => {
      console.log(params)
    })
  }, 0)
})

watch(() => stationData.value, (data, oldData) => {
  update(data, chinaChart)
})

function update(data, chinaChart) {
  const stationInfos = data.map((cur) => setData(cur))
  chinaChart.setOption({
    series: [
      {
        type: "lines",
        coordinateSystem: "geo",
        symbol: "circle",
        symbolSize: 5,
        opacity: 1,
        animation: false,
        data: stationInfos,
      },
    ],
  })
}
</script>

<style>
#china {
  position: absolute;
  height: 2160px;
  width: 3840px;
}
</style>
