<template>
  <div>
    <router-view style='paddingBottom:50px'></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="">
        <span>首页</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? home.active : home.normal">
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>健康百科</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? cyclopedia.active : cyclopedia.normal">
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>加入会员</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? addvip.active : addvip.normal">
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>购物车</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? cart.active : cart.normal">
      </van-tabbar-item>
      <van-tabbar-item to="">
        <span>个人中心</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? myzore.active : myzore.normal">
      </van-tabbar-item>

    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
import home from '@/assets/images/homepage.png'
import home1 from '@/assets/images/homepage_fill.png'
import cyclopedia from '@/assets/images/activity.png'
import cyclopedia1 from '@/assets/images/activity_fill.png'
import addvip from '@/assets/images/integral.png'
import addvip1 from '@/assets/images/integral_fill.png'
import cart from '@/assets/images/shop.png'
import cart1 from '@/assets/images/shop_fill.png'
import myzore from '@/assets/images/mine.png'
import myzore1 from '@/assets/images/mine_fill.png'

export default {
  components: {
    'vanTabbar': Tabbar,
    'vanTabbarItem': TabbarItem

  },
  data() {
    return {
      active: 0,
      home: {
        normal: home,
        active: home1
      },
      cyclopedia: {
        normal: cyclopedia,
        active: cyclopedia1
      },
      addvip: {
        normal: addvip,
        active: addvip1
      },
      cart: {
        normal: cart,
        active: cart1
      },
      myzore: {
        normal: myzore,
        active: myzore1
      },
    }
  },
  created() {
    this.change(this.$route.name)
  },
  methods: {
    change(name) {
      let obj = {
        home: 0,
        cyclopedia: 1,
        addvip: 2,
        cart: 3,
        myzore: 4
      }
      this.active = obj[name]
    }
  },
  watch: {
    $route(to, from) {
      this.change(to.name)
    }
  },
}
</script>

<style lang="scss" scoped>
.van-tabbar {
  height: 104px;
}
</style>
