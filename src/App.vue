<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view/>
  </van-config-provider>
</template>

<script lang="ts">
export default {
  data() {
    return {
      themeVars: {
        buttonPrimaryBorderColor: '#3eaf7c',
        buttonPrimaryBackgroundColor: '#3eaf7c',
        primaryColor: '#3eaf7c',
        tabsBottomBarColor: '#3eaf7c',
        navBarIconColor: '#3eaf7c',
        navBarTextColor: '#3eaf7c'
      }
    }
  }
}
</script>
<style lang="scss">
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
}

code.hljs {
  padding: 3px 5px;
}
</style>
