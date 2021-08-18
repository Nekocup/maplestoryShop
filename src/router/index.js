import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/Home.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=> import('../page/login.vue')
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: ()=> import('../page/shopCart.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: ()=> import('../page/products.vue'),
  },{
    path: '/product/:id',
    name: 'product',
    component: ()=> import('../page/product.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
