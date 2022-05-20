function getChinaOption(stationInfos) {
  return {
    geo: {
      type: "map",
      map: "china",
      layoutCenter: ["42%", "55%"],
      layoutSize: 1700,
      roam: true,
      itemStyle: {
        areaColor: "#194CB4",
        borderWidth: 1,
        borderColor: "#0ac3e9",
        opacity: 0.7,
      },
      label: {
        show: true,
        color: "#fff",
        fontSize: 25
      },
      emphasis: {
        disabled: true,
      },
      silent: true,
    },
    series: [
      {
        type: "lines",
        coordinateSystem: "geo",
        symbol: "circle",
        symbolSize: 10,
        opacity: 1,
        lineStyle: {
          width: 2
        },
        animation: false,
        data: stationInfos,
      },
    ],
  }
}

export default getChinaOption
