/**
 * 减速韩束，用于将一个变化的量以多次减速返回出一个新的ref
 */

interface Source {
  (): number
}

const count = 20 // 执行次数
const time = 20 // 间隔时间 20ms，动画总共 count * time = 500ms

let interval: number
const myClearInterval = () => {
  clearInterval(interval)
  interval = 0
}

const useSlow = (source: Source) => {
  let cur = $ref(0)

  watch(source, val => {
    // 判断当前是否有已经存在的定时器
    interval ? myClearInterval(): null
    // 计算差值，初始化计算器
    const diff = val - cur
    let curCount = count
    // 启动定时器
    interval = setInterval(() => {
      // 判断是否已经完成变化
      if(curCount === 0) {
        myClearInterval()
        return
      }
      cur += Math.floor(diff / count)
      curCount--
    }, time)
  })

  return $$({
    value: cur
  })
}

export default useSlow
