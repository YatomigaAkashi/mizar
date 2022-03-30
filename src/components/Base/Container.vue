<template>
  <div id="container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import useCurrentInstance from '@/hooks/useCurrentInstance'
import { ComponentPublicInstance } from '@vue/runtime-core'

const props = defineProps<{
  options?: {
    width?: number,
    height?: number
  }
}>()

const refName = 'container'
let ready = $ref(false)
let ctx: ComponentPublicInstance // Vue实例
let dom: HTMLDivElement // Container实例
let observer: MutationObserver | null// Container实例监听器

const domSize = $ref({ width: 0, height: 0 })
const originSize = $ref({ width: 0, height: 0 })

// 初始化各种尺寸
const initSize = () => {
  return new Promise(resolve => {
    nextTick(() => {
      dom = ctx.$refs[refName] as HTMLDivElement
      // 获取大屏的真实尺寸
      domSize.width = props?.options?.width || dom.clientWidth
      domSize.height = props?.options?.height || dom.clientHeight
      // 获取画布尺寸
      if (!originSize.width || originSize.height) {
        originSize.width = window.screen.width
        originSize.height = window.screen.height
      }
      resolve(true)
    })
  })
}

// 更新dom尺寸
const updateSize = () => {
  if (dom) {
    dom.style.width = `${domSize.width || originSize.width}px`
    dom.style.height = `${domSize.height || originSize.height}px`
  }
}

// 更新缩放比
const updateScale = () => {
  // 获取真实视口尺寸
  const currentWidth = document.body.clientWidth
  const currentHeight = document.body.clientHeight
  // 获取大屏最终宽高
  const realWidth = domSize.width || originSize.width
  const realHeight = domSize.height || originSize.height
  // 计算缩放
  const widthScale = currentWidth / realWidth
  const heightScale = currentHeight / realHeight

  if (dom) {
    dom.style.transform = `scale(${widthScale}, ${heightScale})`
  }
}

// 锁定浏览器缩放
const onResize = async (e?: any) => {
  await initSize()
  updateScale()
}

// 初始化dom style监听
const initMutationObserver = () => {
  const MutationObserver = window.MutationObserver
  observer = new MutationObserver(onResize)
  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
  })
}

// 移除监听器
const removeMutationObserver = () => {
  if (observer) {
    observer.disconnect()
    observer.takeRecords()
    observer = null
  }
}

onMounted(async () => {
  ready = false
  ctx = useCurrentInstance().ctx as ComponentPublicInstance
  await initSize()
  updateSize()
  updateScale()
  window.addEventListener('resize', onResize)
  initMutationObserver()
  ready = true
})

onUnmounted(() =>{
  window.removeEventListener('resize', onResize)
  removeMutationObserver()
})

</script>

<style lang="less">
#container {
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: 999;
  transform-origin: left top;
}
</style>
