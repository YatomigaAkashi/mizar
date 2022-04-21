import { defineStore } from 'pinia'
import dayjs from 'dayjs'

interface Usage {
  name: string
  value: [time: string, value: number]
}

export const useCpuStore = defineStore('cpu', () => {
  const usageList: Usage[] = $ref([])

  const updateUsage = () => {
    const now = dayjs()
    const name = now.unix().toString()
    const time = now.format('YYYY-MM-DD HH:mm:ss')
    const value = Math.floor(Math.random() * 100)
    usageList.push({ name, value: [time, value] })
    if (usageList.length > 30) {
      usageList.shift()
    }
  }

  setInterval(() => {
    updateUsage()
  }, 1000)

  return $$({
    usageList,
    updateUsage
  })
})
