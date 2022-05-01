import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import { WorkStatus } from '@/typings'
import { useWorkStatusStore } from '@/store/workStatus'

interface Usage {
  name: string
  value: [time: string, value: number]
}

const { workStatus, workStatusList } = $(useWorkStatusStore())

export const useCpuStore = defineStore('cpu', () => {
  let usageList: Usage[] = $ref([])

  const handle = (data: WorkStatus): Usage => {
    const unix = data.time_id * 1000
    const now = dayjs(unix)
    const name = now.unix().toString()
    const time = now.format('YYYY-MM-DD HH:mm:ss')
    const value = Math.floor(Math.random() * 100)
    return { name, value: [time, value] }
  }

  const initUsage = (data: WorkStatus[]) => {
    for (const item of data) {
      usageList.push(handle(item))
    }
  }

  const updateUsage = (data: WorkStatus) => {
    usageList.push(handle(data))
    usageList.shift()
  }

  watch(() => workStatusList, value => initUsage(value))
  watch(() => workStatus, value => updateUsage(value))

  return $$({
    usageList
  })
})
