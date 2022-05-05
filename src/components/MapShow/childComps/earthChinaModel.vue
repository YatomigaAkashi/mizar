<template>
  <div id="earth-china-model"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"
import * as echarts from "echarts"
import { useModelStore } from "@/store/model.js"

import { earthChinaOption } from "./js/getEarthChinaOption.js"
import circleData from "./js/circleData.js"
import setData from "./js/setData.js"

let { satelliteData, stationData } = $(useModelStore())
let earthChinaEchart

onMounted(() => {
  earthChinaEchart = echarts.init(document.getElementById("earth-china-model"))
  earthChinaEchart.setOption(earthChinaOption)
  earthChinaEchart.setOption({
    series: [
      {
        name: "low",
        data: circleData.lowCircleData
      },
      {
        name: "middle",
        data: circleData.middleCircleData
      },
      {
        name: "high",
        data: circleData.highCircleData
      }
    ]
  })
})

onUnmounted(() => {
  earthChinaEchart.dispose()
  earthChinaEchart = null
})

watch(() => stationData,value => {
  console.log("station")
  earthChinaEchart.setOption({
    series: [{
      name: "station",
      data: value.map((cur) => setData(cur))
    }]
  })
})

watch(() => satelliteData, value => {
  console.log("satellite")
  earthChinaEchart.setOption({
    series: [{
      name: "satellite",
      data: value
    }]
  })
})
</script>

<style>
#earth-china-model {
  width: 3840px;
  height: 2160px;
}
</style>
