<template>
  <div class="main">
    <div class="text">
      <slot></slot>
    </div>
    <svg width="100%" height="30px">
      <line x1="0" y1="15" x2="97.5%" y2="15" style="stroke: #2683e8;stroke-width: 3;stroke-opacity: 0.6" />
      <line x1="97.5%" y1="15" x2="100%" y2="15" style="stroke: #84bfff;stroke-width: 3;stroke-opacity: 1.0" />
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
@titleSize: 45px;

.main {
  font-size: @titleSize;
  line-height: @titleSize;
  .text {
    height: @titleSize;
  }
}
</style>
