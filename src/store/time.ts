import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as moment from 'moment'

export const useTimeStore = defineStore('time', () => {
  const time = ref('0:00')
  const week = ref('星期一')
  const date = ref('2022年01月01日')

  // 更新时间
  const update = () => {
    const currentMoment = moment()
    time.value = currentMoment.format('H:mm')
    week.value = currentMoment.format('dddd')
    date.value = currentMoment.format('YYYY MMMM Do')
  }

  return {
    time,
    week,
    date,
    update
  }
})
