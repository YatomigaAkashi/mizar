<template>
  <div id="earth"></div>
</template>

<script setup>
import * as echarts from "echarts"
import { useModelStore } from "@/store/model.js"
import { useOrbitalStore } from '@/store/orbital'
import { earthOption } from './js/getEarthOption'
import circleData from "./js/circleData.js"

const { satelliteData } = $(useModelStore())
const { filter } = $(useOrbitalStore())

let earthEchart

// 初始化echart实例
const initEarthEchart = () => {
  earthEchart = echarts.init(document.getElementById("earth"))
  const option = earthOption
  option.series[0].data = satelliteData
  option.series[1].data = circleData.lowCircleData
  option.series[2].data = circleData.middleCircleData
  option.series[3].data = circleData.highCircleData
  earthEchart.setOption(earthOption)
}

// TODO 不知道干嘛的
const initHandleClick = () => {
  earthEchart.on("click", (params) => {
    if (params.componentSubType === "scatter3D") {
      if (params.data.no[params.data.no.length - 1] === "*") {
        params.data.no = params.data.no.slice(0, -1)
      } else {
        params.data.no += "*"
      }
    }
  })
}

onMounted(() => {
  setTimeout(() => {
    initEarthEchart()
    initHandleClick()
  }, 0)
})

// 设置卫星数据
const setSatelliteData = value => {
  earthEchart.setOption({
    series: [{
      name: "satellite",
      data: value
    }]
  })
}
// 更新卫星数据
watch(() => satelliteData, setSatelliteData)

// 基本轨道配置
const getOrbitalSeries = value => [
  {
    name: "low",
    data: value === "low" ? circleData.lowCircleData : []
  },
  {
    name: "middle",
    data: value === "middle" ? circleData.middleCircleData : []
  },
  {
    name: "high",
    data: value === "high" ? circleData.highCircleData : []
  }
]

// 设置轨道数据
const setOrbitalData = () => {
  earthEchart.setOption({
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

// 轨道线过滤
watch(() => filter, value => {
  if(!earthEchart) return;
  if(value === 'all') {
    setOrbitalData()
    setSatelliteData(satelliteData)
  } else {
    earthEchart.setOption({ series: getOrbitalSeries(value) })
    setSatelliteData(satelliteData.filter(i => i.trackType === value))
  }
})
</script>

<style>
#earth {
  position: absolute;
  width: 3840px;
  height: 2160px;
}
</style>
