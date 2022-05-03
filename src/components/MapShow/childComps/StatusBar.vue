<template>
  <div id="status">
    <div class="status-item">
      <div class="status-icon normal"></div>
      连接良好
    </div>
    <div class="status-item">
      <div class="status-icon error"></div>
      故障
    </div>
    <div class="status-item">
      <div class="status-icon unconnected"></div>
      未连接
    </div>
  </div>
</template>

<script setup></script>

<style>
#status {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  left: 30%;
  bottom: 100px;
  height: 90px;
  width: 700px;
  padding: 0 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #204db4;
  color: #fff;
}
#status .status-item {
  display: flex;
  align-items: center;
}
#status .status-icon {
  display: inline-block;
  height: 30px;
  width: 30px;
  border: 3px solid;
  border-radius: 50%;
  margin-right: 15px;
}
#status .normal {
  border-color: #01cceb;
  box-shadow: 0px 0px 7px #01cceb inset;
}
#status .error {
  border-color: #e40437;
  box-shadow: 0px 0px 7px #e40437 inset;
}
#status .unconnected {
  border-color: #aaa;
  box-shadow: 0px 0px 7px #aaa inset;
}
</style>
