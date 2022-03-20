<template>
  <div id="app">
    <Container :options="{ width: 3840, height: 2160 }">
      <router-view />
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
</script>

<style lang="less">
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
