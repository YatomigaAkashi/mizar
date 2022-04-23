<template>
  <transition name="slide-fade">
    <div v-if="show">
      <router-view />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useSideBarStore } from '@/store/sidebar'

const { show } = $(useSideBarStore())
</script>

<style lang="less">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0
}
</style>
