<template>
  <div class="disk">
    <v-chart
      :option="option"
    />
  </div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import { ECOption } from '@/utils/ECOption.type'

const option: ECOption = $ref({
  grid: {
    left: '3%',
    right: '15%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    show: false
  },
  yAxis: {
    type: 'category',
    data: ['磁盘已使用空间', '磁盘可用空间', '磁盘总容量', '磁盘使用情况'],
    axisLabel: {
      inside: false,
      color: '#fff',
      fontSize: 26,
      margin: 15,
      align: 'right',
    }
  },
  series: [
    {
      type: 'bar',
      data: [
        {
          value: 300,
          itemStyle: {
            color: '#8e8e8e'
          },
          label: {
            formatter: ({ data }) => `${(data as any).value}G`,
            offset: [20, 0]
          }
        },
        {
          value: 200,
          itemStyle: {
            color: '#b6ce45'
          },
          label: {
            formatter: ({ data }) => `${(data as any).value}G`,
            offset: [20, 0]
          }
        },
        {
          value: 500,
          itemStyle: {
            color: '#f5b834'
          },
          label: {
            formatter: ({ data }) => `${(data as any).value}G`,
            offset: [20, 0]
          }
        },
        {
          value: 300,
          itemStyle: {
            color: '#2badfa'
          },
          label: {
            formatter: () => '正常',
            offset: [20, 0]
          }
        }
      ],
      label: {
        show: true,
        position: 'right',
        fontSize: 30,
        color: '#fff',
        rotate: 0
      },
    }
  ],
})
</script>

<style lang="less" scoped>
.disk {
  height: 460px;
}
</style>
