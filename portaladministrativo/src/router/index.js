import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Register from '../views/Register/Register.vue'
import Closure from '../views/Closure/Closure.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },

  {
    path: '/',
    name: 'Main',
    component: Main
    
  },

  {
    path: '/Closure',
    name: 'Closure',
    component: Closure
  },
  
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
