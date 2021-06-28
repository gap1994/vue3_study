<template>
  <temp
    title="生命周期钩子"
    :html="html"
    :js="js"
  >
    <template v-slot:example>
      <p>看看控制面板输出结果</p>
      <img @click="showImage" src="https://v3.cn.vuejs.org/images/lifecycle.svg" />
    </template>
  </temp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import temp from '@/views/modules/temp.vue'
import { ImagePreview } from 'vant'

export default defineComponent({
  name: 'demo5',
  components: {
    temp
  },
  methods: {
    showImage() {
      ImagePreview(['https://v3.cn.vuejs.org/images/lifecycle.svg'])
    }
  },
  beforeCreate() {
    //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
    console.log('beforeCreate')
  },
  created() {
    //在实例创建完成后被立即调用
    console.log('created')
  },
  beforeMount() {
    //在挂载开始之前被调用
    console.log('beforeMount')
  },
  mounted() {
    //实例被挂载后调用
    console.log('mounted')
  },
  activated() {
    //被 keep-alive 缓存的组件激活时调用
    console.log('activated')
  },
  deactivated() {
    //被 keep-alive 缓存的组件停用时调用
    console.log('activated')
  },
  beforeUpdate() {
    //数据更新时调用，发生在虚拟 DOM 打补丁之前
    console.log('beforeUpdate')
  },
  updated() {
    //由于数据更改导致的虚拟 DOM 重新渲染和打补丁
    console.log('updated')
  },
  beforeUnmount() {
    //在卸载组件实例之前调用
    console.log('beforeUnmount')
  },
  unmounted() {
    //卸载组件实例后调用
    console.log('unmounted')
  },
  setup() {
    const html = `<p>看看控制面板输出结果</p>`
    const js = `const Counter = {
      beforeCreate() {
    //在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
    console.log('beforeCreate')
  },
  created() {
    //在实例创建完成后被立即调用
    console.log('created')
  },
  beforeMount() {
    //在挂载开始之前被调用
    console.log('beforeMount')
  },
  mounted() {
    //实例被挂载后调用
    console.log('mounted')
  },
  activated() {
    //被 keep-alive 缓存的组件激活时调用
    console.log('activated')
  },
  deactivated() {
    //被 keep-alive 缓存的组件停用时调用
    console.log('activated')
  },
  beforeUpdate() {
    //数据更新时调用，发生在虚拟 DOM 打补丁之前
    console.log('beforeUpdate')
  },
  updated() {
    //由于数据更改导致的虚拟 DOM 重新渲染和打补丁
    console.log('updated')
  },
  beforeUnmount() {
    //在卸载组件实例之前调用
    console.log('beforeUnmount')
  },
  unmounted() {
    //卸载组件实例后调用
    console.log('unmounted')
  }
}
Vue.createApp(Counter).mount('#counter')`

    return {
      html,
      js
    }
  }
})
</script>
<style scoped>
.root {
  padding: 4vw;
}
</style>
