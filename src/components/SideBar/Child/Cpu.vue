<template>
  <div class="cpu">
    <v-chart
      :option="option"
    />
  </div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import dayjs from 'dayjs'
import { useWorkStatusStore } from '@/store/workStatus'
import { ECOption } from '@/typings/ECOption.type'
import { WorkStatus } from '@/typings'

const option: ECOption = $ref({
  xAxis: {
    type: 'time',
    show: false
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 100,
    interval: 20,
    axisLabel: {
      show: false
    }
  },
  series: [
    {
      type: 'line',
      lineStyle: {
        color: '#d7a435',
        width: 4
      },
      data: []
    }
  ],
})

// 处理原始数据成echarts可以处理的数据格式
const handle = (data: WorkStatus) => {
  const unix = data.time_id * 1000
  const now = dayjs(unix)
  const name = now.unix().toString()
  const time = now.format('YYYY-MM-DD HH:mm:ss')
  const value = Math.floor(data.cpu_utilization / 10)
  return { name, value: [time, value] }
}

const { workStatusList } = $(useWorkStatusStore())
watch(() => workStatusList, source => (option as any).series[0].data = source.map(handle))
</script>

<style lang="less">
.cpu {
  height: 400px;
  margin: 30px 0;
}
</style>
