<template>
  <div class="container">
    <div class="list">
      <div class="userinfo">
        <div class="active">
          <img src="@/assets/icon/拼主@2x.png"
               alt="">
        </div>
        <div class="name">林小气</div>
        <div class="text">
          我正在五折买这款商品，快来一起乐拼！
        </div>
      </div>
      <div class="item flex-center-y">
        <div class="info flex flex_1">
          <img src="@/assets/icon/图层131拷贝@2x.png"
               alt=""
               class="item">
          <div class="introduce flex_1">
            <p class="title ellipsis">54561231</p>
            <div class="handle flex-between">
              <p class="price">￥900</p>
              <van-stepper class="flex" />
            </div>
          </div>
        </div>
      </div>
      <div class="total">
        总价:
        <span>￥360.5</span>
      </div>
    </div>
    <div class="happlytime">
      <div class="time">
        距离结束还剩 : <span>75</span>:<span>51</span>:<span>12</span>
      </div>
      <div class="now">

        当前乐拼总金额
        <span>
          3500元
        </span>

        ，享受折扣
        <span>
          7折
        </span>
      </div>
      <div class="next">

        距离下一级还差
        <span>
          500元
        </span>
      </div>
      <div class="progress">
        <div class="top">
          <div>9.5折</div>
          <div>9折</div>
          <div>8.5折</div>
          <div>8折</div>
          <div>7.5折</div>
          <div>7折</div>
          <div>6.5折</div>
          <div>6折</div>
          <div>5.5折</div>
          <div>5折</div>
        </div>
        <div class="probos">
          <div class="go"></div>
        </div>
        <div class="bot">
          <div>9.5折</div>
          <div>9折</div>
          <div>8.5折</div>
          <div>8折</div>
          <div>7.5折</div>
          <div>7折</div>
          <div>6.5折</div>
          <div>6折</div>
          <div>5.5折</div>
          <div>5折</div>
        </div>
      </div>
      <button class="btn">
        喊人来乐拼
      </button>
    </div>
    <div class="hostiory">
      <div class="title">
        乐拼记录
      </div>
      <div class="hlist">
        <div>
          <img src="@/assets/icon/拼主@2x.png" alt="">
          <div class="name">林***七</div>
          <div class="paric">¥367.00</div>
        </div>
      </div>
      <button>
        加载更多
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "./css/happy.scss";
</style>
