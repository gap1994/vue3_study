<template>
  <div class="home">
    <div class="top">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>vue3+ts+vant+vite</h1>
    </div>
    <van-form class="form" @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from 'vue'
import { getUserInfo, loginApi } from '@/api/user'
export default {
  setup() {
    const state = reactive({
      username: '',
      password: '',
      type: 'login',
      verify: ''
    })

    const onSubmit = async (values:any) => {
      console.log(values)
      loginApi({
        username: state.username,
        password: state.password
      }).then(( data ) => {
        console.log(data)
      })
    }
    return {
      state,
      onSubmit
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn {
    display: block;
  }
}
</style>
