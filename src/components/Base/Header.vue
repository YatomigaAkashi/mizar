<template>
  <div class="header">
    <div class="title">
      这里是标题
    </div>
    <div class="time-week-date">
      <div class="time">{{ time }}</div>
      <div class="week-date">
        <div class="week">{{ week }}</div>
        <div class="date">{{ date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTimeStore } from '@/store/time'

const { time, week, date } = $(useTimeStore())
</script>

<style lang="less" scoped>
.header {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  .title {
    font-size: 65px;
    line-height: 150px;
  }
  .time-week-date {
    height: 100%;
    position: fixed;
    top: 0;
    left: 200px;
    display: flex;
    flex-flow: row nowrap;
    .time {
      font-size: 65px;
      height: 100%;
      line-height: 150px;
    }
    .week-date {
      font-size: 30px;
      margin-top: 25px;
      margin-left: 30px;
      height: 100px;
      line-height: 50px;
      display: flex;
      flex-flow: column nowrap;
      text-align: left;
    }
  }
}
</style>
