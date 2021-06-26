<template>
  <demo1/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import demo1 from './components/demo1.vue'

export default defineComponent({
  name: 'baseVue',
  components: {
    demo1
  },
  setup: () => {
    return {}
  }
})
</script>

<style>

</style>