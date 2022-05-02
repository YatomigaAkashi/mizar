<template>
  <div>
    <div v-if="path.includes('/timing-center')">
      timing-center
    </div>
    <div v-else-if="path.includes('/space-target')">
      space-target
    </div>
    <div v-else-if="path.includes('/ground-station')">
      ground-station
    </div>
  </div>
</template>

<script setup lang="ts">
import useCurrentInstance from '@/hooks/useCurrentInstance'

const { ctx } = useCurrentInstance()
const path = $computed(() => ctx.$router.currentRoute.value.path)
</script>

<style lang="less">
</style>
