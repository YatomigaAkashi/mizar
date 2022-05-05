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

import getStationData from './js/getStationData.js'
import getChinaOption from './js/getChinaOption.js'
import setData from './js/setData.js'

echarts.registerMap("china", chinaMap)

const modelStore = useModelStore()
let chinaChart
let option
const {stationData} = storeToRefs(modelStore)
const stationInfos = stationData.value.map((cur) => setData(cur))

onMounted(() => {
  chinaChart = echarts.init(document.getElementById("china"))
  option = getChinaOption(stationInfos)

  // setInterval(() => {
  //   stationData.value[0].status = stationData.value[0].status === "normal" ? "error" : "normal"
  // }, 5000)
  chinaChart.setOption(option)
  chinaChart.on("click", (params) => {
    console.log(params)
  })
})

onBeforeUnmount(() => {
  // chinaChart.dispose()
}),

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
  width: 100%;
  height: 100%;
}
</style>
