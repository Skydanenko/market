import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import store from '@/store'

Vue.use(VueRouter)

store.commit('initializeStore')

const routes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: () => import('@/views/ProductsPage.vue'),
  },
  {
    path: '/products/:name',
    name: 'ProductContentPage',
    component: () => import('@/views/ProductContentPage.vue'),
  },
  {
    path: '/registration',
    name: 'RegistrationPage',
    component: () => import('@/views/RegistrationPage.vue'),
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: () => import('@/views/CartPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
