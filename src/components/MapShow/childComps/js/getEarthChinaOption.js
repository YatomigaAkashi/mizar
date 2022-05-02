import * as echarts from "echarts"
import { worldMap } from "@/assets/map/world"
import { chinaMap } from "@/assets/map/china"

let baseTexture

echarts.registerMap("world", worldMap)
echarts.registerMap("china", chinaMap)

// 生成球面纹理
function getBaseTexture() {
  let canvas = document.createElement("canvas")
  baseTexture = echarts.init(canvas, null, {
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
}

// 格式化卫星信息
function formmaterInfo(params) {
  return `
      卫星编号: ${params.data.no}\n
      重点关注: ${params.data.focusNo}\n
      轨道类型: ${
        params.data.trackType === "low"
          ? "低轨"
          : params.data.trackType === "middle"
          ? "中轨"
          : "高轨"
      }\n
      TLE信息: ${params.data.tleInfo}
      `
}

function getEarthChinaOption(
  stationInfos,
  satelliteData = [],
  lowCircleData = [],
  middleCircleData = [],
  highCircleData = []
) {
  // 生成球面纹理
  getBaseTexture()

  return {
    geo: {
      type: "map",
      map: "china",
      layoutCenter: ["50%", "55%"],
      layoutSize: 1000,
      itemStyle: {
        areaColor: "#194CB4",
        borderWidth: 1,
        borderColor: "#0ac3e9",
        opacity: 0.7,
      },
      label: {
        show: true,
        color: "#fff",
        fontSize: 20
      },
      emphasis: {
        disabled: true,
      },
      silent: true,
    },
    globe: {
      show: true,
      globeRadius: 40, // 地球半径
      baseTexture: baseTexture,
      shading: "color",
      viewControl: {
        rotateSensitivity: 0,
        autoRotate: false,
      },
    },
    grid3D: {
      boxWidth: 120,
      boxHeight: 120,
      boxDepth: 120,
      axisLine: {
        lineStyle: {
          color: "#fff",
          opacity: 0,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisPointer: {
        show: false,
        lineStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        show: false,
      },
      spiteArea: {
        show: false,
      },
      viewControl: {
        rotateSensitivity: 1,
      },
    },
    xAxis3D: {
      name: "",
      show: false,
      min: -3,
      max: 3,
    },
    yAxis3D: {
      name: "",
      show: false,
      min: -3,
      max: 3,
    },
    zAxis3D: {
      name: "",
      show: false,
      min: -3,
      max: 3,
    },
    series: [
      // 卫星
      {
        type: "scatter3D",
        coordinateSystem: "cartesian3D",
        symbol:
          "path://M934.603175 157.663492l-139.784127-139.784127c-19.504762-19.504762-50.387302-19.504762-68.266667 0l-203.174603 203.174603c-19.504762 19.504762-19.504762 50.387302 0 68.266667l55.263492 55.263492-27.631746 27.631746-17.879365-17.879365c-26.006349-26.006349-60.139683-37.384127-92.647619-37.384127-43.885714-35.75873-100.774603-40.634921-133.28254-8.126984-32.507937 32.507937-27.631746 89.396825 8.126984 133.28254 0 34.133333 11.377778 66.64127 37.384127 92.647619l17.879365 17.879365-27.631746 27.631746-55.263492-55.263492c-19.504762-19.504762-50.387302-19.504762-68.266667 0l-203.174603 203.174603c-19.504762 19.504762-19.504762 50.387302 0 68.266666l139.784127 139.784127c19.504762 19.504762 50.387302 19.504762 68.266667 0l203.174603-203.174603c19.504762-19.504762 19.504762-50.387302 0-68.266666l-47.136508-47.136508 27.631746-27.631746 61.76508 61.765079c16.253968-37.384127 42.260317-74.768254 74.768254-107.27619 32.507937-32.507937 69.892063-58.514286 107.27619-74.768254l-61.765079-61.76508 27.631746-27.631746 47.136508 47.136508c19.504762 19.504762 50.387302 19.504762 68.266666 0l203.174603-203.174603c17.879365-17.879365 17.879365-48.761905-1.625396-66.64127z M887.466667 508.749206c-3.250794-3.250794-8.126984-6.501587-11.377778-8.126984 0 0-1.625397 0-1.625397-1.625397-3.250794-1.625397-4.87619-3.250794-8.126984-4.87619h-1.625397c-79.644444-43.885714-203.174603-13.003175-294.196825 78.019048-92.647619 92.647619-121.904762 214.552381-78.019048 294.196825 1.625397 3.250794 3.250794 4.87619 4.876191 8.126984 0 0 0 1.625397 1.625396 1.625397 3.250794 4.87619 6.501587 8.126984 8.126985 11.377778 34.133333 22.755556 110.526984-6.501587 191.796825-71.517461l-40.634921-32.507936c-48.761905 39.009524-87.771429 60.139683-99.149206 50.387301-14.628571-14.628571 34.133333-87.771429 108.901587-162.539682s147.911111-123.530159 162.539683-108.901587c9.752381 9.752381-8.126984 43.885714-42.260318 87.771428l32.507937 40.634921c61.765079-78.019048 89.396825-149.536508 66.64127-182.044445z M692.419048 726.552381c-13.003175-9.752381-13.003175-27.631746-1.625397-39.009524l4.87619-4.87619c11.377778-11.377778 29.257143-9.752381 39.009524 1.625396l43.885714 53.638096c9.752381 13.003175 9.752381 32.507937-1.625396 43.885714l14.628571-14.628571c-11.377778 11.377778-30.88254 13.003175-43.885714 1.625396l-55.263492-42.260317z M797.61473 748.46273c-20.691302 0-37.920508 17.229206-39.07454 36.78273 0 20.691302 16.091429 36.78273 39.07454 36.78273 20.691302 0 39.07454-16.091429 39.07454-36.78273-1.137778-21.845333-18.383238-36.78273-39.07454-36.78273 M894.163302 748.46273c0 34.490921-13.799619 66.657524-40.228572 90.794667-25.291175 25.291175-58.61181 37.936762-95.410793 37.936762v52.874158c105.748317 0 189.651302-81.594921 190.805333-181.605587h-55.165968 M991.849651 747.324952c0 121.823492-104.594286 221.817905-233.309461 221.817905v52.857905c158.606222 0 288.475429-122.977524 288.475429-274.692064h-55.165968",
        symbolSize: 120,
        animation: false,
        emphasis: {
          label: {
            show: true,
            distance: 20,
            formatter: formmaterInfo,
            color: "#fff",
            fontSize: 40,
            fontFamily: "微软雅黑",
          },
        },
        data: satelliteData,
      },
      // 低轨轨道
      {
        type: "line3D",
        coordinateSystem: "cartesian3D",
        lineStyle: {
          color: "#6FA3C1",
        },
        silent: true,
        data: lowCircleData,
      },
      // 中轨轨道
      {
        type: "line3D",
        coordinateSystem: "cartesian3D",
        lineStyle: {
          color: "#6FA3C1",
        },
        silent: true,
        data: middleCircleData,
      },
      // 高轨轨道
      {
        type: "line3D",
        coordinateSystem: "cartesian3D",
        lineStyle: {
          color: "#6FA3C1",
        },
        silent: true,
        data: highCircleData,
      },
      // 地面站
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
  }
}

export default getEarthChinaOption
