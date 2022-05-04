<template>
  <div class="disk">
    <v-chart
      :option="option"
    />
  </div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import { ECOption } from '@/typings/ECOption.type'

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
          value: 0,
          itemStyle: {
            color: '#8e8e8e'
          },
          label: {
            formatter: ({ data }) => `${(data as any).value}G`,
            offset: [20, 0]
          }
        },
        {
          value: 0,
          itemStyle: {
            color: '#b6ce45'
          },
          label: {
            formatter: ({ data }) => `${(data as any).value}G`,
            offset: [20, 0]
          }
        },
        {
          value: 0,
          itemStyle: {
            color: '#f5b834'
          },
          label: {
            formatter: ({ data }) => `${(data as any).value}G`,
            offset: [20, 0]
          }
        },
        {
          value: 0,
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

interface Props{
  total: number
  ratio: number
}

const { total, ratio } = defineProps<Props>()

// 计算
watch(() => total, value => (option as any).series[0].data[2].value = value)
watch(() => ({ total, ratio }), value => {
  const { total, ratio } = value;
  const used = Math.floor(total * ratio / 100);
  const unused = total - used;
  (option as any).series[0].data[0].value = used;
  (option as any).series[0].data[1].value = unused;
  (option as any).series[0].data[3].value = used;
})
</script>

<style lang="less" scoped>
.disk {
  height: 460px;
}
</style>
