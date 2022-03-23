<template>
  <Container
      :options="containerOptions"
      class="container"
  >
    <main class="main">
      <Header class="header" />
      <div class="content"></div>
    </main>
    <Navigation class="navigation" />
    <Sidebar class="sidebar" />
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue'
import Navigation from '@/components/Navigation.vue'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'

// 画布基本大小
const containerOptions = {
  width: 3840,
  height: 2160
}
</script>

<style lang="less" scoped>
@headerHeight: 150px; // 标题行高度

.container {
  position: relative;
  font-size: 40px;
  background-color: #021c51;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Lato, Roboto, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif;
  .main {
    width: 100%;
    height: 100%;
    .header {
      width: 100%;
      height: @headerHeight;
    }
    .content {
      width: 100%;
      height: calc(100% - @headerHeight);
      // background-color: #606165;
      background-image: url('../assets/images/starfield.webp');
    }
  }
  .navigation {
    width: 300px;
    height: 1500px;
    position: fixed;
    left: 150px;
    top: 400px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    background-color: antiquewhite;
  }
  .sidebar {
    width: 33%;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background-color: #67c23a;
    opacity: 0.3;
  }
}
</style>
