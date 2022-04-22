/**
 * @author sunguoshu
 * 封装系统提供的getCurrentInstance API
 * 返回VUE实例
 */


import { ComponentInternalInstance } from 'vue'
import { ComponentPublicInstance } from '@vue/runtime-core'

export default function useCurrentInstance() {
  const { proxy, appContext } = getCurrentInstance() as ComponentInternalInstance
  const globalProperties = appContext.config.globalProperties
  return {
    ctx: proxy as ComponentPublicInstance,
    globalProperties
  }
}
