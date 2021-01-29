import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from '../views/AddCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'E-wallet',
    component: Home
  },
  {
    path: '/addcard',
    name: 'Add a new bank card',
    component: AddCard,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
