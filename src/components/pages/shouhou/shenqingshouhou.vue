<template>
  <div>
    <div class="info flex">
      <img src="@/assets/images/图层134拷贝@2x.png" alt="">
      <div class="flex_1">
        <p class="title">鱼跃电子血压计医用家用全自动高精...</p>
        <div class="flex-between">
          <p><span>单价：</span>￥99.00</p>
          <p><span>购买数量：</span>x2</p>
        </div>
      </div>
    </div>
    <div class="list">
      <h4>售后方式</h4>
      <router-link to="/afterSale_barter" class="item flex-between">
        <div class="left flex-center-y">
          <img src="@/assets/images/afterSale1.png" alt="">
          <p>换货</p>
        </div>
         <div class="right flex-center-y">
          <p>已收到货，需要更换商品</p>
          <van-icon name="arrow" />
        </div>
      </router-link>
      <router-link to="/afterSale_barter" class="item flex-between">
        <div class="left flex-center-y">
          <img src="@/assets/images/afterSale2.png" alt="">
          <p>退货</p>
        </div>
         <div class="right flex-center-y">
          <p>已收到货，需要更换商品</p>
          <van-icon name="arrow" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  components: {
    'van-icon': Icon
  },
}
</script>

<style scoped lang="scss">
.info {
  background: #fff;
  padding: 40px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
  }
  .flex_1 {
    margin-left: 20px;
    .title {
      font-size: 32px;
      margin-bottom: 40px;
    }
    p {
      span {
        color: #848484;
      }
    }
  }
}
.list {
  margin-top: 30px;
  background: #fff;
  padding: 30px 30px 0 30px;
  h4 {
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .item {
    height: 140px;
    border-bottom: 1px solid #eee;
    .left {
      font-size: 32px;
      color: 333;
      img {
        width: 60px;
        margin-right: 20px;
      }
    }
    .right {
      color: #898989;
      p {
        margin-right: 10px;
      }
    }
  }
}
</style>