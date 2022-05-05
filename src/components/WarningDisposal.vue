<template>
  <div class="warning-disposal">
    <div class="statistics">
      <img src="@/assets/images/radar.gif" alt="">
      <div class="state-list">
        <div>
          <span>待复核 <span style="color: #00f0ff;font-size: 38px;">{{ waiting }}</span> 项</span>
          <el-button class="button" type="primary" color="#0593bc" round>处置</el-button>
        </div>
        <div>
          <span>已复核 <span style="color: #06f10c;font-size: 38px;">{{ review }}</span> 项</span>
          <el-button class="button button-view" type="primary" color="#0a3d6a" round>查看</el-button>
        </div>
        <div>
          <span>上报 <span style="color: #ef0535;font-size: 38px;">{{ report }}</span> 项</span>
          <el-button class="button button-view" type="primary" color="#0a3d6a" round>查看</el-button>
        </div>
        <div>
          <span>解除 <span style="color: #ef0535;font-size: 38px;">{{ remove }}</span> 项</span>
          <el-button class="button button-view" type="primary" color="#0a3d6a" round>查看</el-button>
        </div>
      </div>
    </div>
    <div class="list">
      <table>
        <thead>
        <tr class="header">
          <th width="200">序号</th>
          <th>预警信息</th>
        </tr>
        </thead>
      </table>
      <el-scrollbar height="360px">
        <div class="content" v-for="(item, index) in data">
          <div class="serial">{{ index + 1 }}</div>
          <div style="width: 2px;background: transparent;"></div>
          <div class="info">
            <div class="warn-data">{{ item.warn_data }}</div>
            <span>详情>></span>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WarnType, WarningInfo } from '@/typings'
import useMyFetch from '@/hooks/useMyFetch'

let waiting = $ref(0)
let review = $ref(0)
let report = $ref(0)
let remove = $ref(0)

const update = (data: WarningInfo[]) => {
  if(data) {
    for (const item of data) {
      switch (item.warn_data_type) {
        case WarnType.waiting:
          waiting++
          break
        case WarnType.review:
          review++
          break
        case WarnType.report:
          report++
          break
        case WarnType.remove:
          remove++
          break
        default:
      }
    }
  }
}

const { data } = useMyFetch('/waringInfo')
watch(data as any, update)
</script>

<style lang="less" scoped>
@bck-color: rgba(132, 191, 255, 0.2);
@bck-color-shallower: rgba(132, 191, 255, 0.05);

.warning-disposal {
  margin-top: 30px;
  font-size: 32px;
  .statistics {
    display: flex;
    flex-flow: row nowrap;
    .state-list {
      width: 100%;
      margin-left: 40px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      div {
        width: 100%;
        height: 65px;
        box-sizing: border-box;
        padding: 0 30px;
        line-height: 65px;
        background-color: @bck-color;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        .button {
          width: 150px;
          height: 50px;
          font-size: 30px;
          &.button-view {
            border: 3px solid #00e5f6;
          }
        }
      }
    }
  }
  .list {
    margin-top: 40px;
    text-align: center;
    table {
      width: 100%;
      .header {
        height: 72px;
        background-color: @bck-color;
      }
    }
    .content {
      height: 70px;
      line-height: 70px;
      display: flex;
      flex-flow: row nowrap;
      font-size: 28px;
      box-sizing: border-box;
      padding-left: 2px;
      margin-bottom: 1px;
      .serial {
        width: 202px;
        background: @bck-color-shallower;
      }
      .info {
        width: calc(100% - 206px);
        background: @bck-color-shallower;
        .warn-data {
          width: calc(100% - 200px);
          float: left;
          margin-left: 40px;
          text-align: left;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
        span {
          width: 100px;
          float: right;
          margin-right: 40px;
          color: #02d4e6;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
