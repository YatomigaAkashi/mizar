import * as echarts from 'echarts'

// TODO: 生成纹理需144ms
let canvas = document.createElement("canvas")
let baseTexture = echarts.init(canvas, null, {
  width: 4096,
  height: 2048,
})
baseTexture.setOption({
  backgroundColor: "#031c48",
  geo: {
    type: "map",
    map: "world",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    roam: false,
    boundingCoords: [
      [-180, 90],
      [180, -90],
    ],
    itemStyle: {
      areaColor: "#2455ad",
      borderColor: "#000c2d",
    },
    emphasis: {
      disabled: true,
    },
  },
})

export default baseTexture
