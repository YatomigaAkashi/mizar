<template>
  <div class="table">
    <div class="header">
      <div>卫星编号</div>
      <div>重点关注</div>
      <div>轨道类型</div>
      <div>TLE</div>
      <div>频谱图</div>
    </div>
    <el-scrollbar class="list">
      <div class="line" :line="`line-${index % 2}`" v-for="(item, index) in targetSatelliteList">
        <div>{{ index + 1 }}</div>
        <div>{{ item.focus }}</div>
        <div>{{ item.type }}</div>
        <div>{{ item.tle }}</div>
        <div>{{ item.spectrum }}</div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import useScreenData from '@/hooks/useScreenData'

const { targetSatelliteList } = useScreenData()
</script>

<style lang="less" scoped>
@bck-color: rgba(132, 191, 255, 0.1);

.table {
  width: 100%;
  font-size: 30px;
  .header {
    margin-top: 10px;
    color: #03cadb;
  }
  .header, .line {
    height: 60px;
    line-height: 60px;
    display: flex;
    flex-flow: row nowrap;
    font-size: 30px;
    box-sizing: border-box;
    padding-left: 2px;
    margin-bottom: 1px;
    >div {
      width: 20%;
      text-align: center;
    }
  }
  .header, div[line='line-1'] {
    background: @bck-color;
  }
  .list {
    height: 305px;
  }
}
</style>
