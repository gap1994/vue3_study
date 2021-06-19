import { createLogger, createStore, Plugin, Store } from 'vuex'
import { InjectionKey} from "vue"
//vuex数据持久化
import createPersistedState from 'vuex-persistedstate'
import { RootState } from './types'
import modules from "@/store/modules"

export const key: InjectionKey<Store<RootState>> = Symbol('key')

const plugins: Plugin<RootState>[] = [
  //持久化
  createPersistedState({
    key: 'vue3_study',
  }),
]

if (import.meta.env.MODE === 'development') {
  //开发环境启用操作logger
  plugins.push(createLogger())
}

const store = createStore<RootState>({
  plugins,
  modules
})

export default store
