<template>
  <div id="chian-container">
    <ChinaModel />
    <StatusBar />
  </div>
</template>

<script setup>
import { onMounted } from "vue"

import ChinaModel from './childComps/ChinaModel.vue'
import StatusBar from './childComps/StatusBar.vue'

onMounted(() => {
})

</script>

<style>
#china-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
