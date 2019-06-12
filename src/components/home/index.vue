<template>
  <div>
    <header>
      <van-swipe :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/images/banner.png"
               alt="">
        </van-swipe-item>
        <van-swipe-item> <img src="@/assets/images/banner.png"
               alt=""></van-swipe-item>
        <van-swipe-item> <img src="@/assets/images/banner.png"
               alt=""></van-swipe-item>
      </van-swipe>
      <van-search shape='round'
                  background='none'
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
        <div class="item">
          <img src="@/assets/images/图层553.png"
               alt="">
          <p>中西药品</p>
        </div>
        <div class="item">
          <img src="@/assets/images/图层111.png"
               alt="">
          <p>营养保健</p>
        </div>
        <div class="item">
          <img src="@/assets/images/图层555.png"
               alt="">
          <p>医疗器械</p>
        </div>
        <div class="item">
          <img src="@/assets/images/图层552.png"
               alt="">
          <p>减脂健身</p>
        </div>
        <div class="item">
          <img src="@/assets/images/滋补养生.png"
               alt="">
          <p>滋补养生</p>
        </div>
        <div class="item">
          <img src="@/assets/images/图层555.png"
               alt="">
          <p>美妆个护</p>
        </div>
        <div class="item">
          <img src="@/assets/images/图层554.png"
               alt="">
          <p>居家百货</p>
        </div>
        <div class="item">
          <img src="@/assets/images/健康食品.png"
               alt="">
          <p>健康食品</p>
        </div>
      </section>
      <router-link class="banner"
                   tag="div"
                   to="">
        <img src="@/assets/images/活动圆.png"
             alt="">
      </router-link>
      <section class="happly-go">
        <div class="top">
          <h2>正在乐拼</h2>
          <span>查看全部</span>
        </div>
        <van-swipe indicator-color="white">
          <van-swipe-item>
            <div class="item">
              <img src=""
                   alt="">
              <p></p>
              <div class="pice">
                <span>¥99</span>
                <del>¥199</del>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </section>

      <section class="hserve">
        <t-title title='医疗服务'>
          <router-link to=""
                       slot="right">更多</router-link>
        </t-title>
        <div class="content">
          <div class="item">

          </div>
          <div class="item">

          </div>
          <div class="item">

          </div>
          <div class="item">

          </div>
        </div>
      </section>
      <section class="banner">
        <img src="@/assets/images/商品海报1.png"
             alt="">
      </section>
      <section class="community">
        <t-title title="健康社群"></t-title>
        <div class="content">
          <div class="item">
            <img src=""
                 alt="">
            <p>疑难杂症</p>
            <span>146487人已加入</span>
            <router-link to="">
              <button>
                进入社群
              </button>
            </router-link>
          </div>
          <div class="item">
            <img src=""
                 alt="">
            <p>疑难杂症</p>
            <span>146487人已加入</span>
            <router-link to="">
              <button>
                进入社群
              </button>
            </router-link>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script>
import TTitle from './compontes/Ttitle'
import { Swipe, SwipeItem, Search, } from 'vant';
export default {
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-search': Search,
    TTitle,
  }


}
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
header {
  .van-swipe {
    width: 100%;
    height: 341px;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  /deep/ .van-swipe__indicators {
    left: 619px;
    bottom: 45px;
  }
  /deep/ .van-search {
    position: absolute;
    top: 16px;
    width: 100%;
    .van-cell {
      background: rgba(255, 255, 255, 1);
      opacity: 0.8;
      border-radius: 32px;
    }
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
main {
  padding: 0 31px;
}
.menu {
  padding: 240px 36px 0;
  @include fj("center");
  flex-wrap: wrap;
  .item {
    @include fj(center);
    flex-direction: column;
    align-items: center;
    @include wh(25%, 200px);
    img {
      width: 102px;
      height: 76px;
    }
    p {
      @include sc(22px, rgba(73, 73, 73, 1));
      margin-top: 9px;
    }
  }
}
.banner {
  @include wh(688px, auto);
  margin: 20px auto 0;
  img {
    @include wh(100%, 100%);
  }
}
.happly-go {
  @include wh(688px, 457px);
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(233, 79, 71, 1),
    rgba(235, 101, 94, 1)
  );
  box-shadow: 0 11px 10px rgba(233, 79, 71, 0.1);
  margin: 40px auto 0;
  border-radius: 20px;
  .top {
    height: 84px;
    @include fj(space-between);
    padding: 0 30px;
    align-items: center;
  }
  .van-swipe {
    width: 100%;
    height: 370px;
    .van-swipe-item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.hserve {
  .content {
    @include fj();
    flex-wrap: wrap;
    .item {
      @include wh(336px, 160px);
      background-color: red;
      margin-top: 15px;
    }
  }
}
</style>
