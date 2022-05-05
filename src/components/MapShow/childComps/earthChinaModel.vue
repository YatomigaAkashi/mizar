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
  earthChinaEchart.setOption(earthChinaOption)
}

// 设置轨道数据
const setOrbitalData = () => {
  earthChinaEchart && earthChinaEchart.setOption({
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
}

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

onMounted(() => {
  initEarthChinaEchart()
  setOrbitalData()
  setStationData(stationData)
  setSatelliteData(satelliteData)
})

onUnmounted(() => {
  earthChinaEchart.dispose()
  earthChinaEchart = null
})

watch(() => stationData,setStationData)
watch(() => satelliteData, setSatelliteData)
</script>

<style>
#earth-china-model {
  width: 3840px;
  height: 2160px;
}
</style>
