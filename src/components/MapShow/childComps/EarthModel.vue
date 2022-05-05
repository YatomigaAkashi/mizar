<template>
  <div id="earth"></div>
</template>

<script setup>
import { onMounted, watch } from "vue"
import * as echarts from "echarts"

const props = defineProps({
  satelliteData: Array,
  option: Object,
})
let earthEchart
let option = props.option

onMounted(() => {
  earthEchart = echarts.init(document.getElementById("earth"))
  earthEchart.setOption(option)
  earthEchart.on("click", (params) => {
    if (params.componentSubType === "scatter3D") {
      if (params.data.no[params.data.no.length - 1] === "*") {
        params.data.no = params.data.no.slice(0, -1)
      } else {
        params.data.no += "*"
      }
    }
  })
})

watch(
  () => props.option,
  (count, precount) => {
    // console.log(count);
    earthEchart.setOption(count)
  }
)
</script>

<style>
#earth {
  position: absolute;
  width: 3840px;
  height: 2160px;
}
</style>
