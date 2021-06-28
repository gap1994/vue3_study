<template>
  <van-nav-bar
    :title="title"
    fixed placeholder
    left-text="返回"
    left-arrow
    @click-left="goback"
  />
  <div class="root">
    <h1>代码片段</h1>
    <hljs :code="html"/>
    <hljs :code="js" />
    <h1>例子</h1>
    <slot name="example"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
export default defineComponent ({
  name: 'temp',
  props: {
    title: String,
    html: String,
    js: String
  },
  methods: {
    goback() {
      if (window.history.length <= 1) {
        this.$router.push({ path:'/' })
      } else {
        this.$router.go(-1)
      }
    }
  },
  setup: (props) => {
    const { title } = toRefs(props)

    console.log(title.value)
  }
})
</script>

<style scoped>
.root {
  padding: 0 4vw 4vw;
}
</style>
