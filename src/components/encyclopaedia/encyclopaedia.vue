<template>
  <div>
    <van-tabs @change='tabsChange'>
      <van-tab v-for="(item, index) in tabs"
               :key="index"
               :title="item.name"></van-tab>
    </van-tabs>
    <div class="container">
      <van-swipe indicator-color='#21A2E6'
                 :autoplay="3000">
        <van-swipe-item v-for="(item, index) in banner"
                        :key="index">
          <img :src="item.ad_code"
               alt="">
        </van-swipe-item>

      </van-swipe>
      <div class="cart_list">
        <router-link :to="'/news?id='+item.article_id"
                     tag="div"
                     class="item"
                     v-for="(item, index) in health_list"
                     :key="index">
          <div class="info">
            <div class="t">{{item.goods_name}}</div>
            <div class="time">
              {{item.update_time}}
              |
              阅读：{{item.reading_sum}}
            </div>
          </div>
          <img :src="item.original_img"
               alt="">
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem } from 'vant';
import { getHealthy } from '@/axios/getData.js'
export default {
  components: {
    vanTab: Tab,
    vanTabs: Tabs,
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem
  },
  filters: {
    tiem(val) {

    }
  },
  data() {
    return {
      banner: [],
      tabs: [],
      health_list: []
    }
  },
  methods: {
    tabsChange(a, b) {
      let id = this.tabs[a].id
      this.getdata(id)
    },
    async getdata(id = '', P = 1) {
      let res = await getHealthy({ id, P })
      this.banner = res.data.advert
      this.tabs = res.data.cateArr
      this.health_list = res.data.health_list
    }
  },
  created() {
    this.getdata()
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.van-tabs {
  /deep/ .van-tab {
    font-size: 28px;
    font-weight: 400;
    color: rgba(49, 49, 49, 1);
  }
  /deep/ .van-tab--active {
    color: #21a2e6;
    font-weight: bold;
    font-size: 30px;
  }
  /deep/ .van-tabs__line {
    background-color: #21a2e6;
  }
  /deep/ .van-tabs__content {
    display: none;
  }
}
.container {
  padding: 30px;
  .van-swipe {
    border-radius: 12px;
    overflow: hidden;
  }
  /deep/ .van-swipe__indicators {
    right: 0;
    left: unset;
  }
  .cart_list {
    margin-top: 20px;
    .item {
      padding: 25px;
      @include fj();

      .t {
        width: 350px;
        font-size: 32px;
        font-weight: 400;
        color: rgba(46, 46, 46, 1);
        line-height: 50px;
        @include tt();
      }
      .time {
        font-size: 22px;
        color: #747474;
      }
      .info {
        @include fj();
        flex-direction: column;
      }
      img {
        width: 280px;
        height: 200px;
        border-radius: 6px;
      }
    }
  }
}
</style>
