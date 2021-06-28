<template>
  <li>{{todo.text}}</li>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: 'todo-item',
  props: {
    todo: {
      type: Object,
      default: ''
    }
  }
})
</script>
