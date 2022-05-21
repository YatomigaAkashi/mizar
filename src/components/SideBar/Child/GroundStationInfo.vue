<template>
  <div class="ground-station-info">
    <div class="state">
      <img src="@/assets/images/station.png" alt="">
      <div>连接良好</div>
    </div>
    <div class="info">
      <div class="row">
        <div class="target">xxx :</div>
        <div>{{ groundStationInfo.caliber }} ;</div>
      </div>
      <div class="row">
        <div class="target">xxx :</div>
        <div class="content" >
          <template v-for="value in groundStationInfo.frequency">{{ value }} ;<br/></template>
        </div>
      </div>
      <div class="row">
        <div class="target">xxx :</div>
        <div class="content" >
          <template v-for="value in groundStationInfo.polarization">{{ value }} ;<br/></template>
        </div>
      </div>
      <div class="row">
        <div class="target">xxx :</div>
        <div>{{ groundStationInfo['G/T'] }} ;</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useScreenData from '@/hooks/useScreenData'

const { groundStationInfo } = useScreenData()
</script>

<style lang="less" scoped>
@bck-color: rgba(132, 191, 255, 0.2);

.ground-station-info {
  margin-bottom: 60px;
  .state {
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    img {
      width: 250px;
    }
    div {
      width: 400px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 32px;
      border: 1px solid #84bfff;
      box-shadow: 15px 15px 15px rgba(28, 89, 157, 0.5) inset, -15px -15px 15px rgba(28, 89, 157, 0.5) inset;
    }
  }
  .info {
    margin-top: 40px;
    .row {
      min-height: 65px;
      line-height: 65px;
      font-size: 32px;
      margin-bottom: 2px;
      box-sizing: border-box;
      padding-left: 40px;
      background: @bck-color;
      display: flex;
      flex-flow: row nowrap;
      .target {
        width: 280px;
      }
      .content {
      }
    }
  }
}
</style>
