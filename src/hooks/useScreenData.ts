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

// 授时中心 预警处置列表
const warningDisposalList = [
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
  {
    msg: '2022-01-01 检测到与XX软件通信异常...'
  },
]

// 地面站 地面站信息
const groundStationInfo = {
  caliber: '13米/16米',
  frequency: ['3625~4200MHz', '2100~2510MHz', '1100~1700MHz'],
  polarization: ['13米C频段线极化，S频段右旋圆极化', '16米C频段，L频段均右旋圆极化'],
  'G/T': 'C频段>=32dB/K，S频段>=25dB/K'
}

// 地面站 卫星信息
const targetSatelliteList = [
  { focus: 'xxxx', type: '高轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '中轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '低轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '中轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '中轨', tle: 'xxx', spectrum: 'xxx' }
]

// 磁盘数据
const diskData = [23, 24, 18, 25]

const useScreenData = () => {
  return {
    groundStationState,
    spaceGoalData,
    warningDisposalState,
    warningDisposalList,
    groundStationInfo,
    targetSatelliteList,
    diskData
  }
}

export default useScreenData
