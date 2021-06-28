<template>
  <van-sticky>
    <div class="top-bar">
      <div class="left"></div>
      <div class="title">vue3_study</div>
      <div class="right"></div>
    </div>
  </van-sticky>
  <van-tabs v-model:active="tab">
    <van-tab title="基础">
      <base-vue />
    </van-tab>
    <van-tab title="组件"></van-tab>
    <van-tab title="过渡"></van-tab>
    <van-tab title="组合"></van-tab>
  </van-tabs>
</template>

<script lang="ts">
import BaseVue from '@/views/modules/base/index.vue'
export default {
  data() {
    return {
      tab: 0
    }
  },
  components: {
    BaseVue
  }
}
</script>

<style lang="less" scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 4vw;
  margin-bottom: 4px;
  background: #fff;
  .left,.right {
    width: 10vw;
  }
  .title {
    width: 80vw;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
}
</style>