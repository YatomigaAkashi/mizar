import { defineStore } from 'pinia'
import { WorkStatus } from '@/typings'
import useMyFetch from '@/hooks/useMyFetch'

function initWorkStatus(): WorkStatus {
  return {
    time_id: 0,
    cpu_utilization: 0,
    host_memory_usage: 0,
    disk_usage: 0,
    state: 0,
    warn_text: ''
  }
}

const { data } = useMyFetch('/preWorkStatus') as any

export const useWorkStatusStore = defineStore('workStatus', () => {
  let workStatusList: WorkStatus[] = $ref(data || [])
  let workStatus: WorkStatus = $ref(initWorkStatus())

  // 更新数据
  const update = (data: WorkStatus) => {
    workStatusList.shift()
    workStatusList = [...workStatusList, data]
    workStatus = data
  }

  return $$({
    workStatusList, workStatus,
    update
  })
})
