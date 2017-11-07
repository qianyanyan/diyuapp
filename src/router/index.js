import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/Index'
import Login from '../view/login/Index'
import Register from '../view/login/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
