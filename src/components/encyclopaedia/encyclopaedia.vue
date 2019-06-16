<template>
  <div>
    <van-tabs>
      <van-tab title="热门"></van-tab>
      <van-tab title="现代医学"></van-tab>
      <van-tab title="中医学"></van-tab>
      <van-tab title="生物学"></van-tab>
      <van-tab title="其他"></van-tab>
    </van-tabs>
    <div class="container">
      <van-swipe indicator-color='#21A2E6'
                 :autoplay="3000">
        <van-swipe-item>
          <img src="@/assets/images/banner.png"
               alt="">
        </van-swipe-item>
        <van-swipe-item> <img src="@/assets/images/banner.png"
               alt=""></van-swipe-item>
        <van-swipe-item> <img src="@/assets/images/banner.png"
               alt=""></van-swipe-item>
      </van-swipe>
      <div class="cart_list">
        <div class="item">
          <div class="info">
            <div class="t">孕晚期身上痒是什么原因引起的</div>
            <div class="time">
              2019-02-24
              |
              阅读：25481
            </div>
          </div>
          <img src="@/assets/images/banner.png"
               alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs, Swipe, SwipeItem } from 'vant';
export default {
  components: {
    vanTab: Tab,
    vanTabs: Tabs,
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem
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
