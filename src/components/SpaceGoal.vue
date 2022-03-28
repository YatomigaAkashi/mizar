<template>
  <div class="space-goal">
    <svg width="100%" height="100%" viewBox="0 0 1000 1000">
      <defs>
        <radialGradient id="radia" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="65%"  style="stop-color: rgb(1, 211, 239, 0.1);"/>
          <stop offset="100%"  style="stop-color: rgb(1, 211, 239, 0.5);"/>
        </radialGradient>
        <radialGradient id="radia-single" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="40%"  style="stop-color: rgb(132, 191, 255, 0.1);"/>
          <stop offset="100%"  style="stop-color: rgb(132, 191, 255, 0.4);"/>
        </radialGradient>
        <circle id="circle" cx="500" cy="500" r="280" style="fill: url(#radia)" />
        <circle id="circle-single" cx="500" cy="500" r="160" style="fill: url(#radia-single)" />
      </defs>
      <use xlink:href="#circle" x="0" y="0" />
      <use xlink:href="#circle-single" x="320" y="-240"/>
      <use xlink:href="#circle-single" x="310" y="280"/>
      <use xlink:href="#circle-single" x="-420" y="-20"/>
      <text class="text" x="500" y="460">空间目标</text>
      <text class="text number" x="500" y="560">{{ spaceGoalData.total }}</text>
      <text class="text single" x="820" y="230">高轨</text>
      <text class="text single number-single" x="820" y="305">{{ spaceGoalData.high }}</text>
      <text class="text single" x="810" y="750">低轨</text>
      <text class="text single number-single" x="820" y="825">{{ spaceGoalData.low }}</text>
      <text class="text single" x="80" y="450">中轨</text>
      <text class="text single number-single" x="80" y="525">{{ spaceGoalData.middle }}</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import useScreenData from '@/hooks/useScreenData'

const { spaceGoalData } = useScreenData()


</script>

<style lang="less">
.space-goal {
  height: 400px;
  .text {
    font-size: 70px;
    stroke: transparent;
    fill: #fff;
    text-anchor: middle;
    dominant-baseline: middle;
    &.single {
      font-size: 60px;
    }
    &.number {
      fill: #01D3EF;
      font-size: 76px;
    }
    &.number-single {
      fill: #0d82ff;
      font-size: 63px;
    }
  }
}
</style>
