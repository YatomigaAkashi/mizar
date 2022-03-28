<template>
  <Breadcrumb content="授时中心" />
  <Title>地面站</Title>
  <GroundStation />
  <Title>空间目标</Title>
  <SpaceGoal />
  <Title>预警处置</Title>
  <WarningDisposal />
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/Base/Breadcrumb.vue'
import Title from '@/components/Base/Title.vue'
import GroundStation from '@/components/GroundStation.vue'
import SpaceGoal from '@/components/SpaceGoal.vue'
import WarningDisposal from '@/components/WarningDisposal.vue'
</script>

<style lang="less" scoped>
</style>
