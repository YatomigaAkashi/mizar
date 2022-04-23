import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export const useTimeStore = defineStore('time', () => {
  let time = $ref('0:00')
  let week = $ref('星期一')
  let date = $ref('2022年01月01日')

  // 更新时间
  const update = () => {
    const now = dayjs()
    time = now.format('H:mm')
    week = now.format('dddd')
    date = now.format('YYYY[年] MM[月] DD[日]')
  }

  return $$({
    time, week, date,
    update
  })
})
