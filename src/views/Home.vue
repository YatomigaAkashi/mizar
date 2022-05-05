<template>
  <Container
      :options="containerOptions"
      class="content"
  >
    <main class="main">
      <Header class="header" />
      <div class="content"></div>
    </main>
    <Navigation class="navigation" />
    <MapShow class="mapshow" />
    <SideBar class="sidebar" />
  </Container>
</template>

<script setup lang="ts">
import useTimeUpdate from '@/hooks/useTimeUpdate'
import useWS from '@/hooks/useWS'
import useCurrentInstance from '@/hooks/useCurrentInstance'
import { useSideBarStore } from '@/store/sidebar'


// 画布基本大小
const containerOptions = {
  width: 3840,
  height: 2160
}

// 开启websocket
useWS()
// 开启时间自动更新
useTimeUpdate()

// 监听路由变花
const watchRoute = (path: string) => {
  if (path.includes('/space-target')) {
    toggleShow(false)
    return
  }
  toggleShow(true)
}
const { toggleShow } = $(useSideBarStore())
const { ctx } = useCurrentInstance()
watchEffect(() => watchRoute(ctx.$router.currentRoute.value.path))
</script>

<style lang="less" scoped>
@headerHeight: 150px; // 标题行高度

.content {
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 40px;
  background-image: url("../assets/images/starfield.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Lato, Roboto, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif;
  .main {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    .header {
      width: 100%;
      height: @headerHeight;
      background-color: rgba(255, 255, 255, 0.1);
    }
    .content {
      width: 100%;
      height: calc(100% - @headerHeight);
      background-color: rgba(255, 255, 255, 0);
    }
  }
  .navigation {
    width: 260px;
    height: 1500px;
    position: fixed;
    left: 150px;
    top: 400px;
    color: #fff;
    border: 2px solid #3a8ee6;
    box-shadow: 20px 20px 20px rgba(28, 89, 157, 0.5) inset, -20px -20px 20px rgba(28, 89, 157, 0.5) inset;
  }
  .sidebar {
    width: 30%;
    height: 100%;
    box-sizing: border-box;
    padding: 100px;
    position: fixed;
    right: 0;
    top: 0;
    background-color: rgba(16, 29, 66, 0.3);
    border-left: 3px solid #3a8ee6;
  }
}
</style>
