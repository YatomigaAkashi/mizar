<template>
  <svg width="100%" height="450px" viewBox="100% 450px">
    <circle cx="50%" cy="240" r="140px" style="stroke: #0089ff;stroke-opacity: 0.8;fill: #3a8ee6;fill-opacity: 0.3"></circle>
    <circle cx="calc(50% - 200px)" cy="230" r="80" :style="circleFillOptions"></circle>
    <circle cx="calc(50% + 150px)" cy="360" r="80" :style="circleFillOptions"></circle>
    <circle cx="calc(50% + 160px)" cy="145" r="80" :style="circleFillOptions"></circle>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  total: number,
  low: number,
  middle: number,
  high: number
}>()

const circleFillOptions = {
  'fill': '#3a8ee6',
  'fill-opacity': 0.3
}

</script>

<style lang="less">
</style>
