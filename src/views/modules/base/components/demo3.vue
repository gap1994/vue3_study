<template>
  <temp
    title="条件与循环"
    :html="html"
    :js="js"
  >
    <template v-slot:example>
      <van-button type="primary" @click="show=!show">{{show ? '隐藏' : '显示'}}</van-button>
      <div id="list-rendering" v-if="show">
        <ol>
          <li v-for="todo in todos">
            {{ todo.text }}
          </li>
        </ol>
      </div>
    </template>
  </temp>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import temp from '@/views/modules/temp.vue'
  export default defineComponent({
    name: 'demo1',
    components: {
      temp
    },
    data() {
      return {
        show: true,
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    },
    setup: () => {
      const html = `<div id="list-rendering v-if="show"">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>`
      const js = `const ListRendering = {
  data() {
    return {
      show: true,
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')`
      return {
        html,
        js
      }
    }
  })
</script>
