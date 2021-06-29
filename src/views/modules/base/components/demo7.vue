<template>
  <temp
    title="Class 与 Style 绑定"
    :html="html1"
    :js="js1"
  >
    <template v-slot:example>
      <h2>class绑定语法</h2>
      isActive：<van-switch v-model="isActive" />
      hasError：<van-switch v-model="hasError" />
      <div
        class="static"
        :class="{ active: isActive, 'text-danger': hasError }"
      >对象语法1</div>
      <div class="static" :class="classObject">对象语法2</div>
      <div class="static" :class="[activeClass, errorClass]">数组语法</div>
      <div class="static" :class="[isActive ? activeClass : '', errorClass]">3元表达式</div>

      <h2>style绑定语法</h2>
      <hljs :code="html2"/>
      <hljs :code="js2" />
      <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">对象语法1</div>
      <div :style="styleObject">对象语法2</div>
      <div :style="[baseStyles, overridingStyles]">数组语法</div>
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
      activeClass: 'active',
      errorClass: 'text-danger',
      isActive: true,
      hasError: false,
      // classObject: {
      //   active: true,
      //   'text-danger': false
      // }
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyles: {
        display: 'flex',
        color: '#666'
      },
      overridingStyles: {
        fontSize: '16px'
      }
    }
  },
  computed: {
    classObject():Object {
      return {
        active1: this.isActive && !this.hasError,
        'text-danger1': this.hasError
      }
    }
  },
  setup() {
    const html1 = `<h2>class绑定语法</h2>
isActive：<van-switch v-model="isActive" />
hasError：<van-switch v-model="hasError" />
<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
>对象语法1</div>
<div class="static" :class="classObject">对象语法2</div>
<div class="static" :class="[activeClass, errorClass]">数组语法</div>
<div class="static" :class="[isActive ? activeClass : '', errorClass]">3元表达式</div>`
    const js1 = `data() {
  return {
    isActive: true,
    hasError: false,
    // classObject: {
    //   active: true,
    //   'text-danger': false
    // }
  }
},
computed: {
  classObject():Object {
    return {
      active1: this.isActive && !this.hasError,
      'text-danger1': this.hasError
    }
  }
}`

    const html2 = `<h2>style绑定语法</h2>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }">对象语法1</div>
<div :style="styleObject">对象语法2</div>
<div :style="[baseStyles, overridingStyles]">数组语法</div>`
    const js2 = `data() {
  activeColor: 'red',
  fontSize: 30,
  styleObject: {
    color: 'red',
    fontSize: '13px'
  },
  baseStyles: {
    display: 'flex',
    color: '#666'
  },
  overridingStyles: {
    fontSize: '16px'
  }
}`
    return {
      html1,
      js1,
      html2,
      js2
    }
  }
})
</script>
<style scoped>
.static {
  width: 100px;
  height: 50px;
  background-color: #eee;
  border: 1px solid #000;
  margin: 4px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active {
  background: green;
}
.text-danger {
  color: red;
}
.active1 {
  background: green;
}
.text-danger1 {
  color: red;
}
</style>
