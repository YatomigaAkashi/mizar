<template>
  <div id="earth-china-model"></div>
</template>

<script setup>
import * as echarts from "echarts"
import { useModelStore } from "@/store/model.js"
import { earthChinaOption } from "./js/getEarthChinaOption.js"
import circleData from "./js/circleData.js"
import setData from "./js/setData.js"

let { satelliteData, stationData } = $(useModelStore())
let earthChinaEchart

// 初始化echart实例
const initEarthChinaEchart = () => {
  earthChinaEchart = echarts.init(document.getElementById("earth-china-model"))
  const option = earthChinaOption
  option.series[0].data = stationData.map((cur) => setData(cur))
  option.series[1].data = satelliteData
  option.series[2].data = circleData.lowCircleData
  option.series[3].data = circleData.middleCircleData
  option.series[4].data = circleData.highCircleData
  earthChinaEchart.setOption(earthChinaOption)
}

onMounted(() => {
  setTimeout(() => {
    initEarthChinaEchart()
  }, 0)
})

onUnmounted(() => {
  earthChinaEchart.dispose()
  earthChinaEchart = null
})

// 设置地面站数据
const setStationData = value => {
  earthChinaEchart && earthChinaEchart.setOption({
    series: [{
      name: "station",
      data: value.map((cur) => setData(cur))
    }]
  })
}

// 设置卫星数据
const setSatelliteData = value => {
  earthChinaEchart && earthChinaEchart.setOption({
    series: [{
      name: "satellite",
      data: value
    }]
  })
}

watch(() => stationData,setStationData)
watch(() => satelliteData, setSatelliteData)
</script>

<style>
#earth-china-model {
  width: 3840px;
  height: 2160px;
}
</style>
