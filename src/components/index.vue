<template>
  <div>
    <router-view style='paddingBottom:50px'></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/">
        <span>首页</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? home.active : home.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/encyclopaedia">
        <span>健康百科</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? cyclopedia.active : cyclopedia.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/addvip">
        <span>加入会员</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? addvip.active : addvip.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/cart">
        <span>购物车</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? cart.active : cart.normal">
      </van-tabbar-item>
      <van-tabbar-item to="/user">
        <span>个人中心</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? user.active : user.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, CellGroup } from 'vant';
import home from '@/assets/images/homepage.png'
import home1 from '@/assets/images/homepage_fill.png'
import cyclopedia from '@/assets/images/activity.png'
import cyclopedia1 from '@/assets/images/activity_fill.png'
import addvip from '@/assets/images/integral.png'
import addvip1 from '@/assets/images/integral_fill.png'
import cart from '@/assets/images/shop.png'
import cart1 from '@/assets/images/shop_fill.png'
import user from '@/assets/images/mine.png'
import user1 from '@/assets/images/mine_fill.png'

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
      user: {
        normal: user,
        active: user1
      },
      router_:null
    }
  },
  created() {
          console.log(5555);
    switch(this.$route.name){

      case 'home': this.active=0;      console.log(5555);break;
      case "cyclopedia": this.active=1;break;
      case "addvip": this.active=2;break;
      case "cart": this.active=3;break;
      case "user": this.active=4;break;
      default:break;
    }
    this.change(this.$route.name)
  },
  methods: {
    change(name) {
      let obj = {
        home: 0,
        cyclopedia: 1,
        addvip: 2,
        cart: 3,
        user: 4
      }
      this.active = obj[name] 
    }
  },
  watch: {
    $route(to, from) {
      console.log(to,from)
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
