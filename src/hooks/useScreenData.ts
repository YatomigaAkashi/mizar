/**
 * 模拟数据
 */

// 授时中心 地面站统计
const groundStationState = {
  total: 10,
  good: 6,
  fault: 1,
  unknown: 3
}

// 授时中心 空间目标数据统计
const spaceGoalData = {
  total: 20,
  low: 6,
  middle: 10,
  high: 4
}

// 授时中心 预警处置情况一览
const warningDisposalState = {
  waiting: 6,
  reviewed: 10,
  reported: 6,
  lifted: 4
}

// 磁盘数据
const diskData = [23, 24, 18, 25]

const useScreenData = () => {
  return {
    groundStationState,
    spaceGoalData,
    warningDisposalState,
    diskData
  }
}

export default useScreenData
