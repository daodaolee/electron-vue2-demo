import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/view/Home')
    },
    {
      path: '/lockScreen',
      name: 'lockScreen',
      component: () => import('@/view/LockScreen')
      
    }
  ]
})
