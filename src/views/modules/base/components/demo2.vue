<template>
  <temp
    title="处理用户输入"
    :html="html"
    :js="js"
  >
    <template v-slot:example>
      <div id="two-way-binding">
        <p>{{ message }}</p>
        <input v-model="message" placeholder="请输入文字" />
        <van-field
          v-model="message"
          label="文本"
          placeholder="请输入文字"
        />
      </div>
    </template>
  </temp>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import temp from '@/views/modules/temp.vue'

export default defineComponent ({
  name: 'demo2',
  components: {
    temp
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    goback() {
      this.$router.go(-1)
    }
  },
  setup: () => {
    const html = `<div id="two-way-binding">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>`
    const js = `const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')`
    return {
      html,
      js
    }
  }
})
</script>
