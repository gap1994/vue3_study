<template>

  <hljs :code="html"/>
  <hljs :code="js"/>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'demo1',
  setup() {
    const html = `//数据绑定
<div id="counter">
  Counter: {{ counter }}
</div>`
    const js = `const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}`
    return {
      html,
      js
    }
  }
})
</script>
