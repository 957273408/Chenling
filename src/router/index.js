import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'index',
          component: () => import('../components/home/index'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/encyclopaedia',
          name: 'cyclopedia',
          component: () => import('../components/encyclopaedia/encyclopaedia'),
          meta: {
            title: '健康百科'
          }
        },
        {
          path: '/addvip',
          name: 'addvip',
          component: () => import('../components/addvip/addvip'),
          meta: {
            title: '加入vip'
          }
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../components/cart/cart'),
          meta: {
            title: '购物车'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../components/encyclopaedia/news'),
      meta: {
        title: '文字详情'
      }
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../components/details/details.vue'),
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/uporder',
      name: 'uporder',
      component: () => import('../components/uporder/uporder.vue'),
      meta: {
        title: '提交订单'
      }
    },
    {
      path: '/succesorder',
      name: 'succesorder',
      component: () => import('../components/uporder/succesorder.vue'),
      meta: {
        title: '提交成功'
      }
    },
    {
      path: '/pharmacy',
      name: 'pharmacy',
      component: () => import('../components/pharmacy/pharmacy.vue'),
      meta: {
        title: '亿长寿大药房'
      }
    },
    {
      path: '/pharmacytype',
      name: 'pharmacytype',
      component: () => import('../components/pharmacy/pharmacytype.vue'),
      meta: {
        title: '药品分类'
      }
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../components/community/community.vue'),
      meta: {
        title: '疑难杂症'
      }
    },
    {
      path: '/community2',
      name: 'community2',
      component: () => import('../components/community/community.vue'),
      meta: {
        title: '毛遂自荐'
      }
    },
    {
      path: '/editmessage',
      name: 'editmessage',
      component: () => import('../components/community/edit.vue'),
      meta: {
        title: '我要留言'
      }
    },
    {
      path: '/messageInfo',
      name: 'messageInfo',
      component: () => import('../components/community/messageInfo.vue'),
      meta: {
        title: '内容详情'
      }
    },
    {
      path: '/happly',
      name: 'happly',
      component: () => import('../components/happygo/happy.vue'),
      meta: {
        title: '乐拼详情'
      }
    },
    {
      path: '/nowhapply',
      name: 'nowhapply',
      component: () => import('../components/happygo/nowhapply.vue'),
      meta: {
        title: '正在乐拼'
      }
    },
    {
      path: '/nowhapply',
      name: 'nowhapply',
      component: () => import('../components/happygo/nowhapply.vue'),
      meta: {
        title: '正在乐拼'
      }
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('../components/pharmacy/classify.vue'),
      meta: {
        title: '亿长寿大药房'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../components/search/search.vue'),
      meta: {
        title: '搜索'
      }
    }
  ]
})
