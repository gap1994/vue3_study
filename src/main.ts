import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { vantPlugins } from '@/plugins/vant'
import { createPermission } from '@/router/permission'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import hljsVuePlugin from "@/plugins/hljs"

createPermission(router)

const app = createApp(App)
app.use(store)
.use(router)
.use(vantPlugins)
.use(hljsVuePlugin)
.mount('#app')
