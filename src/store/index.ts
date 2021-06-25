import { createLogger, createStore, Plugin, Store } from 'vuex'
import { InjectionKey} from "vue"
//vuex数据持久化
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    token: ''
  },
  mutations: {
    setToken (state, token: string) {
      state.token = token
    }
  },
  actions: {
    setToken (context, token: string) {
      context.commit('setToken', token)
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState({ key: 'vue3_study' })
  ]
})

