<template>
  <temp
    title="条件渲染"
    :html="html"
    :js="js"
  >
    <template v-slot:example>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </template>
  </temp>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import temp from '@/views/modules/temp.vue'

export default defineComponent({
  components: {
    temp
  },
  data() {
    return {
      awesome: true
    }
  },
  setup: () => {
    const html = `<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>`
    const js = `data() {
  return {
    awesome: true
  }
}`
    return {
      html,
      js
    }
  }
})
</script>
