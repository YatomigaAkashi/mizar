/**
 * @author sunguoshu
 * 封装系统提供的getCurrentInstance API
 * 返回VUE实例
 */


import { ComponentInternalInstance, getCurrentInstance } from 'vue'

export default function useCurrentInstance() {
  const { proxy, appContext } = getCurrentInstance() as ComponentInternalInstance
  const globalProperties = appContext.config.globalProperties
  return {
    ctx: proxy,
    globalProperties
  }
}
