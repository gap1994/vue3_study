<template>
  <div class="root">
    <h1>声明渲染</h1>
    <hljs :code="html"/>
    <hljs :code="js"/>
    <h1>例子</h1>
    <div id="counter">
      Counter: {{ counter }}
    </div>
    <van-button
      type="primary"
      @click="stopTimer"
    >停止</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'demo1',
  data() {
    return {
      counter: 0,
      inter: {} as NodeJS.Timeout
    }
  },
  mounted() {
    this.inter = setInterval(() => {
      this.counter++
    }, 1000)
  },
  methods: {
    stopTimer() {
      if (this.inter) {
        clearInterval(this.inter)
      }
    }
  },
  setup() {
    const html = `//数据绑定
<div id="counter">
  Counter: {{ counter }}
</div>
<van-button
  type="primary"
  @click="stopTimer"
>停止</van-button>`
    const js = `const Counter = {
  data() {
    return {
      counter: 0,
      inter: {} as NodeJS.Timeout
    }
  },
  mounted() {
    this.inter = setInterval(() => {
      this.counter++
    }, 1000)
  },
  methods: {
    stopTimer() {
      if (this.inter) {
        clearInterval(this.inter)
      }
    }
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
