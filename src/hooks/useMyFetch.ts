/**
 * 自定义fetch，提供全局处理
 */

import { createFetch } from '@vueuse/core'

const useMyFetch = createFetch({
  baseUrl: 'http://49.232.220.125',
  options: {
    afterFetch(ctx) {
      const data = JSON.parse(ctx.data)
      if (data.code === 0) {
        ctx.data = data.data
        return ctx
      }
      throw data.msg
    }
  },
  fetchOptions: {
    mode: 'cors',
  },
})

export default useMyFetch
