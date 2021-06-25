<template>
  <div>
    <van-tabs v-model:active="tab">
      <van-tab title="基础">
        <base-vue />
      </van-tab>
      <van-tab title="组件"></van-tab>
      <van-tab title="过渡"></van-tab>
      <van-tab title="组合"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
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

<style>

</style>