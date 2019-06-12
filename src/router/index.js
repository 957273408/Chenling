import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: index,
    meta: {
      title: '华云生命'
    },
    children: [{
      path: '/',
      name: 'index',
      component: () => import('../components/home/index')
    }]
  }]
})
