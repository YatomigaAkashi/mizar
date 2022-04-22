<template>
  <div v-if="show">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useSideBarStore } from '@/store/sidebar'

const { show } = $(useSideBarStore())
</script>

<style lang="less">
</style>
