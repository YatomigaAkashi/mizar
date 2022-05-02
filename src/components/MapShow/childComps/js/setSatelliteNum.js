// 设置卫星数量
function setSatelliteNum(satelliteData) {
  let lowTrackNum = 0
  let middleTrackNum = 0
  let highTrackNum = 0
  satelliteData.forEach((item) => {
    switch (item.trackType) {
      case "low":
        lowTrackNum++
        return
      case "middle":
        middleTrackNum++
        return
      case "high":
        highTrackNum++
        return
      default:
        console.error("setSatelliteNum函数出错了")
    }
  })
  return [lowTrackNum, middleTrackNum, highTrackNum]
}

export default setSatelliteNum