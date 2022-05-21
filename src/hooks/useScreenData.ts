/**
 * 模拟数据
 */

// 地面站 地面站信息
const groundStationInfo = {
  caliber: 'xxx',
  frequency: ['xxx~xxx', 'xxx~xxx', 'xxx~xxx'],
  polarization: ['xxx，xxx', 'xxx，xxx'],
  'G/T': 'xxx'
}

// 地面站 卫星信息
const targetSatelliteList = [
  { focus: 'xxxx', type: '高轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '中轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '低轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '中轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '中轨', tle: 'xxx', spectrum: 'xxx' },
  { focus: 'xxxx', type: '中轨', tle: 'xxx', spectrum: 'xxx' }
]

const useScreenData = () => {
  return {
    groundStationInfo,
    targetSatelliteList,
  }
}

export default useScreenData
