// 生成轨道数据
function initTrackData() {
  let lowCircleData = []
  let lowCircleData1 = []
  let lowCircleData2 = []
  let lowCircleData3 = []
  let lowCircleData4 = []
  let lowCircleData5 = []
  let lowCircleData6 = []
  let middleCircleData = []
  let middleCircleData1 = []
  let middleCircleData2 = []
  let middleCircleData3 = []
  let middleCircleData4 = []
  let middleCircleData5 = []
  let middleCircleData6 = []
  let highCircleData = []
  let highCircleData1 = []
  let highCircleData2 = []
  let highCircleData3 = []
  let highCircleData4 = []

  console.time()
  // 生出低轨轨道数据
  for (let x = 0; x < 3; x += 0.001) {
    for (let y = 0; y < 3; y += 0.001) {
      let sum = Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(x + y, 2)
      if (sum - 9 <= 0.01 && sum - 9 >= -0.01) {
        lowCircleData1.push([x, y, -x - y])
        lowCircleData2.push([x + y, -x, -y])
        lowCircleData3.push([y, -x - y, x])
        lowCircleData4.push([-x, -y, x + y])
        lowCircleData5.push([-x - y, x, y])
        lowCircleData6.push([-y, x + y, -x])
      }
    }
  }
  // 生成高轨轨道数据
  for (let x = 0; x <= 4; x += 0.001) {
    for (let y = 0; y <= 4; y += 0.001) {
      let sum = Math.pow(x, 2) + Math.pow(y, 2)
      if (sum - 16 <= 0.01 && sum - 16 >= -0.01) {
        highCircleData1.push([x, y, 0])
        highCircleData2.push([y, -x, 0])
        highCircleData3.push([-x, -y, 0])
        highCircleData4.push([-y, x, 0])
      }
    }
  }
  // 生出中轨轨道数据
  for (let x = 0; x < 3.5; x += 0.001) {
    for (let y = 0; y < 3.5; y += 0.001) {
      let sum = Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(x + y, 2)
      if (sum - Math.pow(3.5, 2) <= 0.02 && sum - Math.pow(3.5, 2) >= -0.02) {
        middleCircleData1.push([x, y, x + y])
        middleCircleData2.push([x + y, -x, y])
        middleCircleData3.push([y, -x - y, -x])
        middleCircleData4.push([-x, -y, -x - y])
        middleCircleData5.push([-x - y, x, -y])
        middleCircleData6.push([-y, x + y, x])
      }
    }
  }
  console.timeEnd()
  lowCircleData = lowCircleData.concat(
    lowCircleData1,
    lowCircleData2,
    lowCircleData3,
    lowCircleData4,
    lowCircleData5,
    lowCircleData6
  )
  lowCircleData.push(lowCircleData[0])
  middleCircleData = middleCircleData.concat(
    middleCircleData1,
    middleCircleData2,
    middleCircleData3,
    middleCircleData4,
    middleCircleData5,
    middleCircleData6
  )
  middleCircleData.push(middleCircleData[0])
  highCircleData = highCircleData.concat(
    highCircleData1,
    highCircleData2,
    highCircleData3,
    highCircleData4
  )
  highCircleData.push(highCircleData[0])

  return {lowCircleData, middleCircleData, highCircleData}
}

export default initTrackData