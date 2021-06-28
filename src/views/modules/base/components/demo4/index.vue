<template>
  <temp
    title="组件化应用构建"
    :html="html"
    :js="js"
  >
    <template v-slot:example>
      <div id="todo-list-app">
        <ol>
          <todo-item
            v-for="item in groceryList"
            v-bind:todo="item"
            v-bind:key="item.id"
          ></todo-item>
        </ol>
      </div>
    </template>
  </temp>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import temp from '@/views/modules/temp.vue'
  import TodoItem from './todo-item.vue'
  export default defineComponent({
    name: 'demo4',
    components: {
      temp,
      TodoItem
    },
    data() {
      return {
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    },
    setup: () => {
      const html = `<div id="todo-list-app">
  <ol>
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    ></todo-item>
  </ol>
</div>`
      const js = `const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}

const app = Vue.createApp(TodoList)

app.component('todo-item', {
  props: ['todo'],
  template: \`<li>{{ todo.text }}</li>\`
})

app.mount('#todo-list-app')`
      return {
        html,
        js
      }
    }
  })
</script>
