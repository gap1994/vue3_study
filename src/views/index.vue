<template>
  <van-config-provider :theme-vars="themeVars">
    <div class="top-bar">
      <div class="left"></div>
      <div class="title">vue3_study</div>
      <div class="right"><van-button size="small" icon="wap-nav" type="primary" /></div>
    </div>
    <van-tabs v-model:active="tab">
      <van-tab title="基础">
        <base-vue />
      </van-tab>
      <van-tab title="组件"></van-tab>
      <van-tab title="过渡"></van-tab>
      <van-tab title="组合"></van-tab>
    </van-tabs>
  </van-config-provider>
</template>

<script lang="ts">
import BaseVue from '@/views/modules/base/index.vue'
export default {
  data() {
    return {
      tab: 0,
      themeVars: {
        buttonPrimaryBorderColor: '#3eaf7c',
        buttonPrimaryBackgroundColor: '#3eaf7c',
        primaryColor: '#3eaf7c'
      }
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
  box-shadow: 0 1px 12px 3px #eee;
  margin-bottom: 4px;
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