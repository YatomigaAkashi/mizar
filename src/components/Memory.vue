<template>
  <div class="memory">
    <v-chart
      :option="option"
    />
    <div class="info">内存{{ total }}G，已使用{{ used }}G</div>
  </div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import { ECOption } from '@/utils/ECOption.type'

const total = $ref(30)
let used = $ref(21)

const option: ECOption = $ref({
  series: [
    {
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'auto',
        distance: 40,
        fontSize: 20
      },
      detail: {
        valueAnimation: true,
        formatter: '{value} %',
        color: 'auto',
        fontSize: 36
      },
      data: [
        {
          value: 70
        }
      ]
    }
  ]
})

setInterval(() => {
  used = +(Math.random() * total).toFixed(1)
}, 2000)

watch(() => used, () => {
  (option as any).series[0].data[0].value = Math.floor(used / total * 100)
})
</script>

<style lang="less" scoped>
.memory {
  height: 600px;
  .info {
    text-align: center;
    margin-top: -100px;
    font-size: 32px;
  }
  margin-bottom: 40px;
}
</style>
