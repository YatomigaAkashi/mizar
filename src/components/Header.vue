<template>
  <div class="header">
    <div class="title">
      中国科学院国家授时中心
    </div>
    <div class="time-week-date">
      <div class="time">{{ timeInfo.time }}</div>
      <div class="week-date">
        <div class="week">{{ timeInfo.week }}</div>
        <div class="date">{{ timeInfo.date }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue'
import * as moment from 'moment'


const timeInfo = reactive({
  time: '0:00',
  week: '星期一',
  date: '2022年01月01日'
})
let timeInterval: number

// 更新时间
const updateTime = () => {
  const currentMoment = moment()
  timeInfo.time = currentMoment.format('h:mm')
  timeInfo.week = currentMoment.format('dddd')
  timeInfo.date = currentMoment.format('YYYY MMMM Do')
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(() => {
    updateTime()
  }, 10000)
})

onUnmounted(() => {
  clearInterval(timeInterval)
})
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
