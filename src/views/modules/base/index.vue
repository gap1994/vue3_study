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
        },
        {
          title: '处理用户输入',
          name: 'demo2'
        },
        {
          title: '条件与循环',
          name: 'demo3'
        },
        {
          title: '组件化应用构建',
          name: 'demo4'
        },
        {
          title: '生命周期钩子',
          name: 'demo5'
        },
        {
          title: '计算属性和侦听器',
          name: 'demo6'
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