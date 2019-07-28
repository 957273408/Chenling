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
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../components/usercontent/usercontent'),
          meta: {
            title: '个人中心'
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
    },
    {
      path: '/tixian',
      name: 'tixian',
      component: () => import('../components/pages/qianbao/tixian')
    },
    {
      path: '/chongzhi',
      name: 'chongzhi',
      component: () => import('../components/pages/qianbao/chongzhi')
    },
    {
      path: '/xiangmushu',
      name: 'xiangmushu',
      component: () => import('../components/pages/huodong/xiangmushu')
    },
    {
      path: '/youhuiquan',
      name: 'youhuiquan',
      component: () => import('../components/pages/youhuiquan.vue')
    },
    {
      path: '/mymsg',
      name: 'mymsg',
      component: () => import('../components/pages/mymsg.vue')
    },
    {
      path: '/shouhuodizhi',
      name: 'shouhuodizhi',
      component: () => import('../components/pages/shezhi/shouhuodizhi.vue')
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('../components/pages/shezhi/address.vue')
    },
    {
      path: '/jiangjin',
      name: 'jiangjin',
      component: () => import('../components/pages/qianbao/jiangjin.vue')
    },
    {
      path: '/mymsg',
      name: 'mymsg',
      component: () => import('../components/pages/mymsg.vue')
    },
    {
      path: '/yongjin',
      name: 'yongjin',
      component: () => import('../components/pages/qianbao/yongjin.vue')
    },
    {
      path: '/myfirends',
      name: 'myfirends',
      component: () => import('../components/pages/huodong/myfirends.vue'),
      meta: { title: '我的朋友' }
    },
    {
      path: '/shoucang',
      name: 'shoucang',
      component: () => import('../components/pages/shoucang.vue')
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: () => import('../components/pages/shouhou/myorder.vue')
    },
    {
      path: '/myset',
      name: 'myset',
      component: () => import('../components/pages/shezhi/myset.vue')
    },
    {
      path: '/user_info',
      name: 'user_info',
      component: () => import('../components/pages/shezhi/user_info.vue')
    },
    {
      path: '/bankCard',
      name: 'bankCard',
      component: () => import('../components/pages/shezhi/bankCard.vue')
    },
    {
      path: '/setCard',
      name: 'setCard',
      component: () => import('../components/pages/shezhi/setCard.vue')
    },
    {
      path: '/setPhonePwd',
      name: 'setPhonePwd',
      component: () => import('../components/pages/shezhi/setPhonePwd.vue')
    },
    {
      path: '/jiangYongJiFen',
      name: 'jiangYongJiFen',
      component: () => import('../components/pages/qianbao/jiangYongJiFen.vue')
    },
    {
      path: '/orderQuery',
      name: 'orderQuery',
      component: () => import('../components/pages/huodong/orderQuery.vue')
    },
    {
      path: '/duihuanjilu',
      name: 'duihuanjilu',
      component: () =>
        import('../components/pages/jifenshangcheng/duihuanjilu.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../components/pages/help.vue')
    },
    {
      path: '/shouhouxiangqing',
      name: 'shouhouxiangqing',
      component: () =>
        import('../components/pages/shouhou/shouhouxiangqing.vue')
    },
    {
      path: '/shenqinghuanhuo',
      name: 'shenqinghuanhuo',
      component: () => import('../components/pages/shouhou/shenqinghuanhuo.vue')
    },
    {
      path: '/shenqingshouhou',
      name: 'shenqingshouhou',
      component: () => import('../components/pages/shouhou/shenqingshouhou.vue')
    },
    {
      path: '/wodedingdan',
      name: 'wodedingdan',
      component: () => import('../components/pages/dingdan/wodedingdan.vue')
    },
    {
      path: '/dingdanxiangqing',
      name: 'dingdanxiangqing',
      component: () =>
        import('../components/pages/dingdan/dingdanxiangqing.vue')
    },
    {
      path: '/chakanwuliu',
      name: 'chakanwuliu',
      component: () => import('../components/pages/dingdan/chakanwuliu.vue')
    },
    {
      path: '/pingjia',
      name: 'pingjia',
      component: () => import('../components/pages/dingdan/pingjia.vue')
    },
    {
      path: '/wodeqiandao',
      name: 'wodeqiandao',
      component: () => import('../components/pages/huodong/wodeqiandao.vue')
    },
    {
      path: '/shujuzhongxin',
      name: 'shujuzhongxin',
      component: () => import('../components/pages/huodong/shujuzhongxin.vue')
    },
    {
      path: '/mingpian',
      name: 'mingpian',
      component: () => import('../components/pages/huodong/mingpian.vue'),
      meta: { title: '名片' }
    },
    {
      path: '/jifenshangcheng',
      name: 'jifenshangcheng',
      component: () =>
        import('../components/pages/jifenshangcheng/jifenshangcheng.vue')
    },
    {
      path: '/choujiang',
      name: 'choujiang',
      component: () => import('../components/pages/choujiang.vue'),
      meta: { title: '抽奖' }
    },
    {
      path: '/hehuoren',
      name: 'hehuoren',
      component: () => import('../components/pages/hehuoren/hehuoren.vue'),
      meta: { title: '申请合伙人' }
    },
    {
      path: '/help_detali',
      name: 'help_detali',
      component: () =>import ('../components/pages/help_detali.vue'),
      meta:{ title:"帮助中心详情" }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../components/pages/test.vue')
    }
  ]
})
