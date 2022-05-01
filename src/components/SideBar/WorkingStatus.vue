<template>
  <MizarBreadcrumb content="授时中心" />
  <Title>内存使用情况</Title>
  <Memory :total="memory" :ratio="memoryUsage" />
  <Title>CPU使用情况</Title>
  <Cpu />
  <Title>磁盘使用情况</Title>
  <Disk :total="disk" :ratio="diskUsage" />
</template>

<script setup lang="ts">
import { useWorkStatusStore } from '@/store/workStatus'
import useMyFetch from '@/hooks/useMyFetch'
import { EquipmentInfo } from '@/typings'

// 获取设备信息
const { data } = $(useMyFetch<EquipmentInfo>('/equipmentInfo'))
const memory = $computed(() => data?.memory || 0)
const disk = $computed(() => data?.disk || 0)

// 获取并计算工作状态
const { workStatus } = $(useWorkStatusStore())
const memoryUsage = $computed(() => Math.floor(workStatus.host_memory_usage / 10))
const diskUsage = $computed(() => Math.floor(workStatus.disk_usage / 10))
</script>

<style lang="less">
</style>
