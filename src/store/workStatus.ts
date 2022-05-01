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

export const useWorkStatusStore = defineStore('workStatus', () => {
  let workStatusList: WorkStatus[] = $ref([])
  let workStatus: WorkStatus = $ref(initWorkStatus())

  // 初始化数据
  const init = (data: WorkStatus[]) => {
    if(data && data?.length !== 0) {
      workStatusList = data
      workStatus = data[data.length - 1]
    }
  }

  // 更新数据
  const update = (data: WorkStatus) => {
    workStatusList.push(data)
    workStatusList.shift()
    workStatus = data
  }

  const { data } = useMyFetch('/preWorkStatus')
  watch(data, value => init(value as any))

  return $$({
    workStatusList, workStatus,
    init, update
  })
})
