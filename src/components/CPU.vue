<template>
  <div class="cpu">
    <v-chart
      :option="option"
    />
  </div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import { useCpuStore } from '@/store/cpu'
import { ECOption } from '@/utils/ECOption.type'

const { usageList } = $(useCpuStore())

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
      data: usageList
    }
  ],
})
</script>

<style lang="less">
.cpu {
  height: 400px
}
</style>
