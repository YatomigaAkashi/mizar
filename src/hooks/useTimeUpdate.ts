import { onMounted, onUnmounted } from 'vue'
import { useTimeStore } from '@/store/time'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

let timeInterval: number = 0
let time = useTimeStore()

const useTimeUpdate = () => {
  onMounted(() => {
    time.update()
    if (!timeInterval) {
      timeInterval = setInterval(() => {
        time.update()
      }, 1000)
    }
  })

  onUnmounted(() => {
    clearInterval(timeInterval)
  })
}

export default useTimeUpdate

