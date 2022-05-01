/**
 * websocket通信
 */
import { useWebSocket, WebSocketOptions } from '@vueuse/core'
import { useWorkStatusStore } from '@/store/workStatus'

const WSOptions: WebSocketOptions = {
  autoReconnect: true
}

const { data: ws_data } = $(useWebSocket('ws://localhost:8080', WSOptions))

// 数据管理
const { update } = useWorkStatusStore()  // 工作状态

// 启动监听
const useWS = () => {
  watch(() => ws_data, value => {
    // @ts-ignore
    const data = JSON.parse(typeof value === 'string' ? value : null)
    switch (data?.type) {
      case 'WorkStatus':
        update(data.data)
        break
      default:
        console.info(value)
    }
  })
}

export default useWS

