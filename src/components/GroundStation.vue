<template>
  <div class="ground-station">
    <div class="total">
      <svg t="1648270464229" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="7858" width="70" height="70">
        <path
            d="M691.84 504.832l-36.224-36.224 54.4-54.4c9.984-9.984 26.24-9.984 36.224 0 9.984 9.984 9.984 26.24 0 36.224l-54.4 54.4z"
            p-id="7859" fill="#ffffff"></path>
        <path
            d="M670.464 804.608c-80.64 0-161.28-30.72-222.592-92.032-122.752-122.752-122.752-322.432 0-445.184 9.984-9.984 26.24-9.984 36.224 0l408.96 408.96c9.984 9.984 9.984 26.24 0 36.224a314.112 314.112 0 0 1-222.592 92.032zM466.816 322.56c-85.248 103.424-79.488 257.152 17.28 353.792 96.64 96.64 250.368 102.4 353.792 17.28L466.816 322.56z"
            p-id="7860" fill="#ffffff"></path>
        <path
            d="M409.856 850.816c-26.752 0-51.968-10.368-70.912-29.312-18.944-18.944-29.312-44.032-29.312-70.912s10.368-51.968 29.312-70.912c39.04-39.04 102.656-39.04 141.696 0 39.04 39.04 39.04 102.656 0 141.696a99.2256 99.2256 0 0 1-70.784 29.44z m0-149.248a48.896 48.896 0 0 0-49.024 49.024c0 13.056 5.12 25.344 14.336 34.688 18.56 18.56 50.816 18.56 69.376 0a49.216 49.216 0 0 0 0-69.376 48.832 48.832 0 0 0-34.688-14.336z"
            p-id="7861" fill="#ffffff"></path>
      </svg>
      <span class="total-text">总计地面站：<span class="total-number">{{ groundStationState.total }}</span>个</span>
    </div>
    <div class="state">
      <StationState class="station-state" state="good" :number="groundStationState.good"  />
      <StationState class="station-state" state="fault" :number="groundStationState.fault" />
      <StationState class="station-state" state="unknown" :number="groundStationState.unknown" />
    </div>
  </div>
</template>

<script setup lang="ts">
import StationState from '@/components/Base/StationState.vue'
import useScreenData from '@/hooks/useScreenData'

const { groundStationState } = useScreenData()
</script>

<style lang="less" scoped>
@bck-color: rgba(132, 191, 255, 0.2);

.ground-station {
  height: 350px;
  box-sizing: border-box;
  padding: 25px 10px 0 10px;
  margin-bottom: 30px;
  .total {
    height: 75px;
    background-color: @bck-color;
    line-height: 40px;
    font-size: 30px;
    .total-text {
      margin-left: 10px;
      vertical-align: 18px;
      .total-number {
        font-size: 35px;
        color: #00ebfb;
      }
    }
  }
  .state {
    width: 100%;
    height: 150px;
    margin-top: 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .station-state {
      width: 32%;
      background-color: @bck-color;
    }
  }
}
</style>
