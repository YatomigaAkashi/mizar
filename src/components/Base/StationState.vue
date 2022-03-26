<template>
  <div class="svg-box">
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <defs>
        <radialGradient id="radia-good" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="40%"  style="stop-color: rgb(1, 211, 239, 0);"/>
          <stop offset="100%"  style="stop-color: rgb(1, 211, 239, 1);"/>
        </radialGradient>
        <radialGradient id="radia-fault" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="40%"  style="stop-color: rgb(255, 0, 48, 0);"/>
          <stop offset="100%"  style="stop-color: rgb(255, 0, 48, 1);"/>
        </radialGradient>
        <radialGradient id="radia-unknown" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="40%"  style="stop-color: rgb(162, 162, 163, 0);"/>
          <stop offset="100%"  style="stop-color: rgb(162, 162, 163, 1);"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="35" r="23" :class="data.circleClass"/>
      <text x="50" y="43" :class="data.numberClass">{{ props.number }}</text>
      <text x="50" y="81" class="text">{{ data.text }}</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'

enum StateEnum {
  'good' = 'good',
  'fault' = 'fault',
  'unknown' = 'unknown'
}

const props = withDefaults(
  defineProps<{
    number?: number,
    state?: StateEnum
  }>(),
  {
    number: 0,
    state: 'unknown' as StateEnum,
  },
)

const data = computed(() => {
  if (props.state === StateEnum.good) {
    return {
      text: '连接良好',
      circleClass: 'circle circle-good',
      numberClass: 'number number-good'
    }
  }
  if (props.state === StateEnum.fault) {
    return {
      text: '故障',
      circleClass: 'circle circle-fault',
      numberClass: 'number number-fault'
    }
  }
  if (props.state === StateEnum.unknown) {
    return {
      text: '未连通',
      circleClass: 'circle circle-unknown',
      numberClass: 'number number-unknown'
    }
  }
})
</script>

<style lang="less" scoped>
@goodColor: rgb(1, 211, 239);
@faultColor: rgba(255, 0, 48);
@unknownColor: rgb(162, 162, 163);

.svg-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  .circle {
    &.circle-good {
      fill: url(#radia-good);
    }
    &.circle-fault {
      fill: url(#radia-fault);
    }
    &.circle-unknown {
      fill: url(#radia-unknown);
    }
  }
  .number {
    font-size: 23px;
    text-anchor: middle;
    font-family: serif;
    stroke-width: 2.3px;
    &.number-good {
      stroke: @goodColor;
    }
    &.number-fault {
      stroke: @faultColor;
    }
    &.number-unknown {
      stroke: @unknownColor;
    }
  }
  .text {
    font-size: 17px;
    text-anchor: middle;
    dominant-baseline: middle;
    stroke: #fff;
    stroke-width: 0.6;
  }
}
</style>
