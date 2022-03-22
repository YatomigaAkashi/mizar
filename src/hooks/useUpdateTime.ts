import { useTimeStore } from '@/store/time'
import { onUnmounted } from 'vue'

let timeInterval: number = 0
let time = useTimeStore()

time.update()

if (!timeInterval) {
  timeInterval = setInterval(() => {
    time.update()
  }, 10000)
}

onUnmounted(() => {
  clearInterval(timeInterval)
})
