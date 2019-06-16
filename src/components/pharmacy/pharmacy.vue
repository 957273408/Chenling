<template>
  <div class="pharmacy">
    <header>
      <router-link to="/search">
        <van-search shape='round'
                    background='none'
                    placeholder="搜索亿长寿精选好物" />
      </router-link>
      <van-swipe :autoplay="3000"
                 indicator-color="rgba(33, 162, 230, 1)">
        <van-swipe-item v-for="(item, index) in images"
                        :key="index">
          <img :src="item.ad_code"
               alt="">
        </van-swipe-item>

      </van-swipe>
    </header>
    <menu>
      <van-swipe indicator-color="rgba(33, 162, 230, 1)">
        <van-swipe-item>
          <div class="menu-list">
            <router-link :to="'/pharmacytype?id='+item.id"
                         tag='div'
                         v-for="(item, index) in cateArr"
                         :key="index"
                         class="menu_item">
              <img :src="item.image"
                   alt="">
              <span>{{item.name}}</span>
            </router-link>
          </div>
        </van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
      </van-swipe>
    </menu>
    <div class="banner">
      <p>{{banners.name}}</p>
      <img :src="banners.banner_url"
           alt="">
    </div>
    <div class="hot_buy">
      <t-title title="热卖好货"></t-title>
      <div class="content">
        <router-link :to="'/details?goods_id='+item.goods_id"
                     v-for="(item, index) in goods_list"
                     :key="index"
                     class="item">
          <img :src="item.original_img"
               alt="">
          <div class="t">{{item.goods_name}}</div>
          <div class="info">
            <div class="pice">¥{{item.shop_price}}</div>
            <div class="del">¥{{item.market_price}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search, } from 'vant';
import TTitle from '../home/compontes/Ttitle'
import { bighoues } from '@/axios/getData'
export default {
  components: {
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanSearch: Search,
    TTitle
  },
  data() {
    return {
      banners: [],
      cateArr: [],
      goods_list: [],
      next_page: [],
    }
  },
  async created() {
    let id = this.$route.query.id
    let res = await bighoues({ id })
    console.log(res);
    Object.keys(res.data).forEach(e => {
      this.$data[e] = res.data[e]
    })
    console.log(this.banners);
  }
}
</script>

<style lang="scss" scoped>
@import "./css/pharmacy.scss";
</style>
