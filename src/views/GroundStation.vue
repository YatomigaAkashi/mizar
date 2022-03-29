<template>
  <Breadcrumb :content="['授时中心', '地面站']" />
  <Title>洛南卫星便携地面站信息</Title>
  <GroundStationInfo />
  <Title>数据管理软件</Title>
  <DataTransport />
  <Title>目标卫星</Title>
  <SatelliteList />
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/Base/Breadcrumb.vue'
import Title from '@/components/Base/Title.vue'
import GroundStationInfo from '@/components/GroundStationInfo.vue'
import DataTransport from '@/components/DataTransport.vue'
import SatelliteList from '@/components/SatelliteList.vue'
</script>

<style lang="less">
</style>
