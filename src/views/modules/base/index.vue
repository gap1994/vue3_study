<template>
  <van-cell-group inset>
    <van-cell v-for="item in list" :title="item.title" is-link :to="{ name: item.name }" />
  </van-cell-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'baseVue',
  data() {
    return {
      list: [
        {
          title: '声明式渲染',
          name: 'demo1'
        }
      ]
    }
  },
  setup: () => {
    return {}
  }
})
</script>

<style>

</style>