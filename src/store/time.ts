import { ref } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useTimeStore = defineStore('time', () => {
  const time = ref('0:00');
  const week = ref('星期一');
  const date = ref('2022年01月01日');

  // 更新时间
  const update = () => {
    const now = dayjs()
    time.value = now.format('H:mm');
    week.value = now.format('dddd');
    date.value = now.format('YYYY[年]MM[月]DD[日]');
  }

  return {
    time, week, date,
    update
  }
})


