<template>
  <div class="navigation">
    <div>
      <div class="icon"></div>
      <router-link to="/home/timing-center">授时中心</router-link>
    </div>
    <div>
      <div class="icon"></div>
      <router-link to="/home/space-target">空间目标</router-link>
    </div>
    <div>
      <div class="icon"></div>
      <router-link to="/home/ground-station">地面站</router-link>
    </div>
    <div>
      <div class="icon"></div>
      <router-link to="/home/working-status">工作状态</router-link>
    </div>
    <div class="bottom">#</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.navigation {
  div {
    width: 300px;
    height: 300px;
    text-align: center;
    .icon {
      height: 200px;
    }
  }
  .bottom {
    margin-top: 250px;
  }
}
</style>
