<template>
  <div>
    <hljs
      autodetect
      :code="content"
    />
    <hljs autodetect :code="s"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'baseVue',
  setup: () => {
    let content = `<div id="counter" class="box">Counter: {{ counter }}</div>`
    let s = `const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(Counter).mount('#counter')`
    return {
      content,
      s
    }
  }
})
</script>

<style>

</style>