import type { Router, RouteRecordName } from 'vue-router'
import store from '@/store'

const whiteList:Array<RouteRecordName>  = ['login', '404']

export function createPermission(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log(store.state)
    if (whiteList.indexOf(to.name || '') >= 0) {
      next()
    } else {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    }
  })
}

