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
            <div>
              <p>疑难杂症</p>
              <span>146487人已加入</span>
            </div>
            <router-link to=""
                         tag="button">
              进入社群
            </router-link>
          </div>
          <div class="item">
            <img src=""
                 alt="">
            <div>
              <p>疑难杂症</p>
              <span>146487人已加入</span>
            </div>
            <router-link to=""
                         tag="button">
              进入社群
            </router-link>
          </div>

        </div>
      </section>
      <section class="pharmacy">
        <div class="top">
          <p class="left"><span>亿长寿</span>大药房</p>
          <router-link to=""
                       slot="right">
            更多
          </router-link>
        </div>
        <div class="content">
          <div class="item">
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="item">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
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
@import "./css/index.scss";
</style>
