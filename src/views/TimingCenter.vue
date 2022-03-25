<template>
  <div class="container">
    <Title>地面站</Title>
    <GroundStation />
    <Title>空间目标</Title>
    <SpaceGoal />
    <Title>预警处置</Title>
    <WarningDisposal />
  </div>
</template>

<script setup lang="ts">
import SpaceGoal from '@/components/SpaceGoal.vue'
import GroundStation from '@/components/GroundStation.vue'
import WarningDisposal from '@/components/WarningDisposal.vue'
import Title from '@/components/Title.vue'
</script>

<style lang="less" scoped>
.container {
  padding: 80px;
}
</style>
