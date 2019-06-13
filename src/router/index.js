import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      meta: {
        title: '亿长寿'
      },
      children: [
        {
          path: '/',
          name: 'index',
          component: () => import('../components/home/index'),
          meta:{
            title:'首页'
          }
        },
      
      ]
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../components/details/details.vue'),
      meta:{
        title:'商品详情'
      }
    },
    {
      path:'/uporder',
      name:'uporder',
      component:()=>import('../components/uporder/uporder.vue'),
      meta:{
        title:'提交订单'
      }
    }
  ]
})
