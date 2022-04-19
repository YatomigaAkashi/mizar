<template>
  <div class="data-transport">
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="47%" style="stop-color:rgb(11, 206, 218);stop-opacity:0"/>
          <stop offset="73%" style="stop-color:rgb(11, 206, 218);stop-opacity:0.3"/>
          <stop offset="97%" style="stop-color:rgb(11, 206, 218);stop-opacity:0"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="30" stroke="#0bc9d6" fill="none" />
      <circle cx="50" cy="50" r="27.5" stroke="#0bc9d6" fill="none" stroke-dasharray="4" />
      <circle cx="50" cy="50" r="41" stroke="none" fill="url(#grad1)" />
<!--      <circle cx="50" cy="50" r="37" stroke="#00f0ff" stroke-width="4" fill="none" stroke-dasharray="3 2.55" transform="rotate(-90, 50, 50)" />-->
      <path :d="path" fill="none" stroke="#00f0ff" stroke-width="4" stroke-dasharray="3 2.55" />
      <text x="50" y="50" fill="#00f0ff" text-anchor="middle" dominant-baseline="middle" font-size="13">{{ ratio }}%</text>
    </svg>
    <div class="info">总{{ total }}KB，已传输{{ done }}KB</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  total: number
  done: number
}

const {
  done,
  total
} = defineProps<Props>()

const ratio = $computed(() => Math.floor(done / total * 100))
const deg = $computed(() => ratio / 100 * 2 * Math.PI)
const path = $computed(() => {
  let arc = ratio > 50 ? 1 : 0
  let dx = 50 + Math.sin(deg) * 37
  let dy = 50 - Math.cos(deg) * 37
  ratio >= 100 ? dx = dx - 0.00001: null
  return `M 50 13 A 37 37 0 ${arc} 1 ${dx} ${dy}`
})
</script>

<style lang="less" scoped>
.data-transport {
  margin-bottom: 30px;
  svg {
    height: 360px;
  }
  .info {
    width: 100%;
    margin-top: -20px;
    text-align: center;
    font-size: 30px;
  }
}
</style>
