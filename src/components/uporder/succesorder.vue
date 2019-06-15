<template>
  <div class="succesorder">
    <img src="@/assets/icon/成功23@2x.png"
         alt="">
    <div class="title">订单支付成功</div>
    <div class="num">订单金额为: <span>96.00</span></div>
    <div class="tip"> 您可进入我的订单查看订单进度</div>
    <div class="btn">
      <router-link class="tohome"
                   to="/">
        <button>返回首页</button>
      </router-link>
      <router-link class="order"
                   to="/home">
        <button>查看订单</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.succesorder {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 1184px;
  img {
    width: 124px;
    height: 124px;
  }
  .title {
    font-size: 34px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 40px;
    margin-top: 43px;
    margin-bottom: 20x;
  }
  .num,
  .tip {
    font-size: 30px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 60px;
    span {
      color: rgba(226, 35, 35, 1);
    }
  }
  .btn {
    width: 626px;
    margin: 55px;
    @include fj();
    button {
      width: 300px;
      height: 85px;
      background: rgba(238, 238, 238, 1);
      border-radius: 42px;
    }
    .tohome {
      @include sc(33px, rgba(0, 0, 0, 1));
    }
    .order {
      button {
        @include sc(33px, rgba(255, 255, 255, 1));
        background: rgba(255, 76, 35, 1);
      }
    }
  }
}
</style>
