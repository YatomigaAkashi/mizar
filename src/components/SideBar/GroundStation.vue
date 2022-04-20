<template>
  <MizarBreadcrumb :content="['授时中心', '地面站']" />
  <Title>洛南卫星便携地面站信息</Title>
  <GroundStationInfo />
  <Title>数据管理软件</Title>
  <DataTransport />
  <Title>目标卫星</Title>
  <SatelliteList />
</template>

<script setup lang="ts">
// let total = $ref(1024)
// let done = $ref(0)
// let progress: number
// onMounted(() => {
//   if(!progress) {
//     progress = setInterval(() => {
//       if(done >= 1024) {
//         window.clearInterval(progress)
//       }
//       done++
//     }, 5)
//     // progress = setTimeout(() => {
//     //   if(done >= 1024) {
//     //     window.clearTimeout(progress)
//     //   }
//     //   done = 300
//     // }, 1000)
//   }
// })
</script>

<style lang="less">
</style>
