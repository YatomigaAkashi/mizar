<template>
  <div class="disk-usage">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import { ECOption } from '@/utils/ECOption.type'

const option: ECOption = {
  xAxis: {},
  yAxis: {
    data: ['磁盘已使用空间', '磁盘可用空间', '磁盘总容量', '磁盘使用情况'],
    axisLabel: {
      inside: false,
      color: '#fff',
      fontSize: 30,
      width: 1000
    }
  },
  series: [
    {
      type: 'bar',
      data: [300, 200, 500, 300],
      label: {
        show: true,
        position: 'right',
        fontSize: 30,
        color: '#fff',
        rotate: 0
      },
    }
  ],
}
</script>

<style lang="less" scoped>
.disk-usage {
  padding: 50px 100px;
  .chart {
    height: 500px;
  }
}

</style>
