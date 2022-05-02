function getStationData() {
  return [
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
  ]
}

export default getStationData