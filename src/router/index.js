import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import tixian from '@/components/pages/tixian'

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
                component: () =>
                    import ('../components/home/index')
            }]
        },
        {
            path: '/details',
            name: 'details',
            component: () =>
                import ('../components/details/details.vue')
        },
        {
            path: '/tixian',
            name: 'tixian',
            component: tixian
        },
        {
            path: '/xiangmushu',
            name: 'xiangmushu',
            component: () =>
                import ('../components/pages/huodong/xiangmushu')
        },
        {
            path: '/youhuiquan',
            name: 'youhuiquan',
            component: () =>
                import ('../components/pages/youhuiquan.vue')
        },
        {
            path: '/mymsg',
            name: 'mymsg',
            component: () =>
                import ('../components/pages/mymsg.vue')
        },
        {
            path: '/shouhuodizhi',
            name: 'shouhuodizhi',
            component: () =>
                import ('../components/pages/shouhuodizhi.vue')
        },
        {
            path: '/jiangjin',
            name: 'jiangjin',
            component: () =>
                import ('../components/pages/jiangjin.vue')
        },
        {
            path: '/mymsg',
            name: 'mymsg',
            component: () =>
                import ('../components/pages/mymsg.vue')
        },
        {
            path: '/yongjin',
            name: 'yongjin',
            component: () =>
                import ('../components/pages/yongjin.vue')
        },
        {
            path: '/myfirends',
            name: 'myfirends',
            component: () =>
                import ('../components/pages/huodong/myfirends.vue')
        },
        {
            path: '/shoucang',
            name: 'shoucang',
            component: () =>
                import ('../components/pages/shoucang.vue')
        },
        {
            path: '/myorder',
            name: 'myorder',
            component: () =>
                import ('../components/pages/shouhou/myorder.vue')
        },
        {
            path: '/myset',
            name: 'myset',
            component: () =>
                import ('../components/pages/myset.vue')
        },
        {
            path: '/bankCard',
            name: 'bankCard',
            component: () =>
                import ('../components/pages/bankCard.vue')
        },
        {
            path: '/setPhonePwd',
            name: 'setPhonePwd',
            component: () =>
                import ('../components/pages/setPhonePwd.vue')
        },
        {
            path: '/jiangYongJiFen',
            name: 'jiangYongJiFen',
            component: () =>
                import ('../components/pages/jiangYongJiFen.vue')
        },
        {
            path: '/orderQuery',
            name: 'orderQuery',
            component: () =>
                import ('../components/pages/huodong/orderQuery.vue')
        },
        {
            path: '/duihuanjilu',
            name: 'duihuanjilu',
            component: () =>
                import ('../components/pages/jifenshangcheng/duihuanjilu.vue')
        },
        {
            path: '/help',
            name: 'help',
            component: () =>
                import ('../components/pages/help.vue')
        },
        {
            path: '/shouhouxiangqing',
            name: 'shouhouxiangqing',
            component: () =>
                import ('../components/pages/shouhou/shouhouxiangqing.vue')
        },
        {
            path: '/shenqinghuanhuo',
            name: 'shenqinghuanhuo',
            component: () =>
                import ('../components/pages/shouhou/shenqinghuanhuo.vue')
        },
        {
            path: '/afterSale_detail_path',
            name: 'afterSale_detail_path',
            component: () =>
                import ('../components/pages/afterSale_detail_path.vue')
        },
        {
            path: '/afterSale_detail',
            name: 'afterSale_detail',
            component: () =>
                import ('../components/pages/afterSale_detail.vue')
        },
        {
            path: '/shenqingshouhou',
            name: 'shenqingshouhou',
            component: () =>
                import ('../components/pages/shouhou/shenqingshouhou.vue')
        },
        {
            path: '/wodedingdan',
            name: 'wodedingdan',
            component: () =>
                import ('../components/pages/dingdan/wodedingdan.vue')
        },        
        {
            path: '/dingdanxiangqing',
            name: 'dingdanxiangqing',
            component: () =>
                import ('../components/pages/dingdan/dingdanxiangqing.vue')
        },
        {
            path: '/chakanwuliu',
            name: 'chakanwuliu',
            component: () =>
                import ('../components/pages/dingdan/chakanwuliu.vue')
        },
        {
            path: '/pingjia',
            name: 'pingjia',
            component: () =>
                import ('../components/pages/dingdan/pingjia.vue')
        },
        {
            path: '/wodeqiandao',
            name: 'wodeqiandao',
            component: () =>
                import ('../components/pages/huodong/wodeqiandao.vue')
        },
        {
            path: '/shujuzhongxin',
            name: 'shujuzhongxin',
            component: () =>
                import ('../components/pages/huodong/shujuzhongxin.vue')
        },
        {
            path: '/mingpian',
            name: 'mingpian',
            component: () =>
                import ('../components/pages/huodong/mingpian.vue')
        },
        {
            path: '/jifenshangcheng',
            name: 'jifenshangcheng',
            component: () =>
                import ('../components/pages/jifenshangcheng/jifenshangcheng.vue')
        },
        {
            path: '/hehuoren',
            name: 'hehuoren',
            component: () =>
                import ('../components/pages/hehuoren/hehuoren.vue')
        },
    ]
})
