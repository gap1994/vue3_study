<template>
  <temp
    title="声明式渲染"
    :html="html"
    :js="js"
  >
    <template v-slot:example>
      <div id="counter">
        Counter: {{ counter }}
      </div>
      <van-button
        type="primary"
        @click="stopTimer"
      >停止</van-button>
      <p
        ref="demo1"
        :title="message"
        @click="attrClick">
        点击查看此处动态绑定的提示信息！
      </p>
    </template>
  </temp>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import temp from '@/views/modules/temp.vue'
import { Toast } from 'vant'
export default defineComponent({
  name: 'demo1',
  components: {
    temp
  },
  data() {
    return {
      counter: 0,
      message: '动态绑定的提示信息',
      inter: {} as NodeJS.Timeout
    }
  },
  mounted() {
    this.inter = setInterval(() => {
      this.counter++
    }, 1000)
  },
  unmounted() {
    this.stopTimer()
  },
  methods: {
    stopTimer() {
      if (this.inter) {
        clearInterval(this.inter)
      }
    },
    attrClick() {
      const el: any = this.$refs.demo1
      Toast(el.getAttribute('title'))
    }
  },
  setup() {
    const html = `//数据绑定
<div id="counter">
  Counter: {{ counter }}
</div>

//停止按钮
<van-button
  type="primary"
  @click="stopTimer"
>停止</van-button>

//绑定元素的 attribute
<p ref="demo1"
  :title="message"
  @click="attrClick">
  点击查看此处动态绑定的提示信息！
</p>`
    const js = `const Counter = {
  data() {
    return {
      counter: 0,
      message: '动态绑定的提示信息',
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
    },
    attrClick() {
      alert(this.$refs.demo1.getAttribute('title'))
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
