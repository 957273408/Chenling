<template>
  <div>
    <header>
      <van-swipe :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <van-search style="background: none;"
                  placeholder="搜索亿长寿精选好物"
                  v-model="value" />
    </header>
    <main>
      <nav class="flex-wrap">
        <router-link to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <p class="icon"></p>预约挂号
          </div>
          <p>三甲医院/热门科室/专家号源</p>
        </router-link>
        <router-link to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <p class="icon"></p>专家咨询
          </div>
          <p>在线/电话/快速咨询</p>
        </router-link>
        <router-link to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <p class="icon"></p>陪诊服务
          </div>
          <p>全程陪诊一条龙服务</p>
        </router-link>
        <router-link to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <p class="icon"></p>就医协议
          </div>
          <p>代取寄送报告单/开药不排队</p>
        </router-link>
      </nav>
      <section class="menu">
        <div>
          <img src="" alt="">
          <p>中西药品</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search } from 'vant';
export default {
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-search': Search,

  }


}
</script>

<style lang="scss" scoped>
header {
  .van-swipe {
    width: 100%;
    height: 341px;
    background-color: red;
  }
}
/deep/ .van-swipe__indicators {
  left: 619px;
  bottom: 45px;
}
/deep/ .van-search {
  position: absolute;
  top: 16px;
  .van-cell {
    width: 688px;
    height: 64px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.8;
    border-radius: 32px;
  }
}

nav {
  position: absolute;
  overflow: hidden;
  left: 50%;
  transform: translate(-50%, -41px);
  width: 688px;
  height: 280px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  .item {
    width: 50%;
    box-sizing: border-box;
    padding: 0 30px;
    background-color: yellow;
    p {
      font-size: 22px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      width: 310px;
      color: rgba(145, 147, 157, 1);
    }
    .icon {
      display: inline-block;
      width: 39px;
      height: 41px;
      background: linear-gradient(
        142deg,
        rgba(247, 150, 93, 1),
        rgba(255, 195, 123, 1)
      );
      box-shadow: 0px 2px 4px 0px rgba(248, 153, 95, 0.4);
    }
    .title {
      margin: 25px 0 5px 0;
      text-align: left;
      font-size: 32px;
      font-family: SourceHanSansCN-Bold;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
