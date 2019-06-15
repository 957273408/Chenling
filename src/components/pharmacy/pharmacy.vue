<template>
  <div class="pharmacy">
    <header>
      <van-search shape='round'
                  background='none'
                  placeholder="搜索亿长寿精选好物"
                  v-model="value" />
      <van-swipe :autoplay="3000"
                 indicator-color="rgba(33, 162, 230, 1)">
        <van-swipe-item>
          <img src="@/assets/images/banner.png"
               alt="">
        </van-swipe-item>
        <van-swipe-item> <img src="@/assets/images/banner.png"
               alt=""></van-swipe-item>
        <van-swipe-item> <img src="@/assets/images/banner.png"
               alt=""></van-swipe-item>
      </van-swipe>
    </header>
    <menu>
      <van-swipe indicator-color="rgba(33, 162, 230, 1)">
        <van-swipe-item>
          <div class="menu-list">
            <router-link  to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>感冒咳嗽</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>皮肤</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>关爱长辈</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>营养保健</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>成人计生</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>女性就健康</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>男性健康</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>母婴孕产</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>五官用药</span>
            </router-link>
            <router-link to='/pharmacytype' tag='div' class="menu_item">
              <img src="@/assets/icon/图层599拷贝@2x.png" alt="">
              <span>健康设备</span>
            </router-link>
          </div>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
      </van-swipe>
    </menu>
    <div class="banner">
      <p>亿长寿大药房</p>
      <img src="@/assets/icon/ae096ef66de2c382@2x.png" alt="">
    </div>
     <div class="hot_buy">
        <t-title title="热卖好货"></t-title>
        <div class="content">
          <router-link to="/details" class="item">
            <img src="@/assets/icon/图层93拷贝@2x.png" alt="">
            <div class="t">汤臣倍健 褪黑素片 400mg/片*60</div>
            <div class="info">
              <div class="pice">¥68</div>
              <div class="del">¥199</div>
            </div>
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search, } from 'vant';
import TTitle from '../home/compontes/Ttitle'
export default {
  components: {
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanSearch: Search,
    TTitle
  }
}
</script>

<style lang="scss" scoped>
@import "./css/pharmacy.scss";
</style>
