import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import memberRouter from './member/member'
import productRouter from './product/product'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/member'
  },
  ...memberRouter,
  ...productRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
