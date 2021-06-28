<template>
  <temp
    title="计算属性和侦听器"
    :html="html"
    :js="js"
  >
    <template v-slot:example>
      <div>{{a}} + {{b}} = {{c}}</div>
    </template>
  </temp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import temp from '@/views/modules/temp.vue'
import { get } from 'http'
export default defineComponent({
  name: 'demo6',
  components: {
    temp
  },
  data() {
    return {
      a: 0,
      b: 2,
      inter: {} as NodeJS.Timeout
    }
  },
  computed: {
    c: {
      get():number {
        return this.a + this.b
      },
      set(newValue) {
        this.a = newValue - this.b
      }
    }
  },
  watch: {
    // 侦听a的变化，回调有新旧两个值
    a(newValue, oldValue) {
      //这里可以做一些相对应的工作
      console.log(newValue, oldValue)
    }
  },
  mounted() {
    this.inter = setInterval(() => {
      this.a++
      this.b = Math.ceil(Math.random() * 10)
    }, 1000)
  },
  unmounted() {
    if (this.inter) {
      clearInterval(this.inter)
    }
  },
  setup() {
    const html = `//计算属性
<div>{{a}} + {{b}} = {{c}}</div>`
    const js = `const Counter = {
  data() {
    return {
      a: 0,
      b: 2,
      inter: {} as NodeJS.Timeout
    }
  },
  computed: {
    // c作为计算结果
    c():number {
      return this.a + this.b
    }
  },
  watch: {
    // 侦听a的变化，回调有新旧两个值
    a(newValue, oldValue) {
      //这里可以做一些相对应的工作
      console.log(newValue, oldValue)
    }
  },
  mounted() {
    this.inter = setInterval(() => {
      this.a++
      this.b = Math.ceil(Math.random() * 10)
    }, 1000)
  },
  unmounted() {
    if (this.inter) {
      clearInterval(this.inter)
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
