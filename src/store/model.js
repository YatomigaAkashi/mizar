import { defineStore } from "pinia"

export const useModelStore = defineStore("model", {
  state: () => {
    return {
      stationData: [
        {
          name: '河北卫星站',
          coord: [115.502461, 38.045474],
          image: '/src/assets/卫星站1.png',
          status: 'normal'
        },
        {
          name: '青海卫星站',
          coord: [101.778916, 36.623178],
          image: '/src/assets/卫星站1.png',
          status: 'error'
        },
        {
          name: '新疆卫星站',
          coord: [87.617733, 43.792818],
          image: '/src/assets/卫星站1.png',
          status: 'unconnected'
        }
      ],
      satelliteData: [
        {
          name: "001",
          value: [0, -4, 0],
          no: "001",
          focusNo: "001",
          trackType: "high",
          tleInfo: "001",
          itemStyle: {
            color: "#039BDE",
            opacity: 1,
          },
        },
        {
          name: "002",
          value: [0, 2.12, -2.12],
          no: "002",
          focusNo: "002",
          trackType: "low",
          tleInfo: "002",
          itemStyle: {
            color: "#A2D2FF",
            opacity: 1,
          },
        },
        {
          name: "003",
          value: [0, 2.47, 2.47],
          no: "003",
          focusNo: "003",
          trackType: "middle",
          tleInfo: "003",
          itemStyle: {
            color: "#3C5186",
            opacity: 1,
          },
        },
        {
          name: "004",
          value: [0, -2.47, -2.47],
          no: "004",
          focusNo: "004",
          trackType: "middle",
          tleInfo: "004",
          itemStyle: {
            color: "#3C5186",
            opacity: 1,
          },
        },
        {
          name: "005",
          value: [4, 0, 0],
          no: "005",
          focusNo: "005",
          trackType: "high",
          tleInfo: "005",
          itemStyle: {
            color: "#039BDE",
            opacity: 1,
          },
        },
        {
          name: "006",
          value: [0, -2.12, 2.12],
          no: "006",
          focusNo: "006",
          trackType: "low",
          tleInfo: "006",
          itemStyle: {
            color: "#A2D2FF",
            opacity: 1,
          },
        },
      ]
    }
  },
})
