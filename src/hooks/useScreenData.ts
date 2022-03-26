/**
 * 模拟数据
 */

// 地面站统计
const groundStationState = {
  total: 10,
  good: 6,
  fault: 1,
  unknown: 3
}

// 磁盘数据
const diskData = [23, 24, 18, 25]

const useScreenData = () => {
  return {
    groundStationState,
    diskData
  }
}

export default useScreenData
