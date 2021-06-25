import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { vantPlugins } from '@/plugins/vant'
import 'vant/lib/index.less'
import { createPermission } from '@/router/permission'

createPermission(router)

createApp(App)
.use(store)
.use(router)
.use(vantPlugins).mount('#app')
