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
            <p class="icon guahao"></p>预约挂号
          </div>
          <p>三甲医院/热门科室/专家号源</p>
        </router-link>
        <router-link to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <p class="icon zhuanjia"></p>专家咨询
          </div>
          <p>在线/电话/快速咨询</p>
        </router-link>
        <router-link to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <p class="icon peizheng"></p>陪诊服务
          </div>
          <p>全程陪诊一条龙服务</p>
        </router-link>
        <router-link to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <p class="icon jiuyi"></p>就医协议
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
              <img src="@/assets/icon/图层136拷贝@2x.png"
                   alt="">
              <p>
                鱼跃电子血压计医用家用全自动
                高精准上臂式测量仪器
              </p>
              <div class="pice">
                <span>¥99</span>
                <del>¥199</del>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/icon/图层136拷贝@2x.png"
                   alt="">
              <p>
                鱼跃电子血压计医用家用全自动
                高精准上臂式测量仪器
              </p>
              <div class="pice">
                <span>¥99</span>
                <del>¥199</del>
              </div>
            </div>
            <div class="item">
              <img src="@/assets/icon/图层136拷贝@2x.png"
                   alt="">
              <p>
                鱼跃电子血压计医用家用全自动
                高精准上臂式测量仪器
              </p>
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
                       class="more"
                       slot="right">更多</router-link>
        </t-title>
        <div class="content">
          <div class="item">
            <img src="@/assets/icon/医疗服务1@2x.png"
                 alt="">
          </div>
          <div class="item">
            <img src="@/assets/icon/医疗服务2@2x.png"
                 alt="">
          </div>
          <div class="item">
            <img src="@/assets/icon/医疗服务3@2x.png"
                 alt="">
          </div>
          <div class="item">
            <img src="@/assets/icon/医疗服务4@2x.png"
                 alt="">
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
            <img src="@/assets/icon/组6@2x.png"
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
            <img src="@/assets/icon/组5@2x.png"
                 alt="">
            <div>
              <p>毛遂自荐</p>
              <span>64510人已加入</span>
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
                       class="more"
                       slot="right">
            更多
          </router-link>
        </div>
        <div class="content">
          <div class="item">
            <div>
              <img src="../../assets/images/药房1.png"
                   alt="">
            </div>
            <div>
              <div>
                <img src="../../assets/images/男性健康.png"
                     alt="">
              </div>
              <div><img src="../../assets/images/女性调养.png"
                     alt=""></div>
            </div>
          </div>
          <div class="item">
            <div>
              <img src='../../assets/images/关爱长辈.png'
                   alt="">
            </div>
            <div>
              <img src='../../assets/images/儿童用药.png'
                   alt="">
            </div>
            <div>
              <img src='../../assets/images/肝胆专区.png'
                   alt="">
            </div>
            <div>
              <img src='../../assets/images/心脑血管.png'
                   alt="">
            </div>

          </div>
        </div>
      </section>
      <section class="banner">
        <img src="@/assets/images/招商海报.png"
             alt="">
      </section>
      <section class="banner">
        <img src="@/assets/images/商品海报2.png"
             alt="">
      </section>
      <section class="hot_to">
        <div class="content">
          <div class="top">

            <li>
              <img src="@/assets/images/药丸.png"
                   alt="">
              <p>中西药品</p>
              <span>下单<em>减120元</em></span>
            </li>
            <li>
              <img src="@/assets/images/药丸.png"
                   alt="">
              <p>中西药品</p>
              <span>下单<em>减120元</em></span>
            </li>
            <li>
              <img src="@/assets/images/药丸.png"
                   alt="">
              <p>中西药品</p>
              <span>下单<em>减120元</em></span>
            </li>
            <li>
              <img src="@/assets/images/药丸.png"
                   alt="">
              <p>中西药品</p>
              <span>下单<em>减120元</em></span>
            </li>

          </div>
          <div class="bottom">
            <li>
              <p>滋补保健</p>
              <span>29元<em>购</em></span>
              <img src="@/assets/icon/图层554@2x.png"
                   alt="">
            </li>
            <li>
              <p>维生素钙剂</p>
              <span>满百<em>减20元</em></span>
              <img src="@/assets/icon/图层580@2x.png"
                   alt="">
            </li>
            <li>
              <p>成人用品</p>
              <span>低至<em>2元起</em></span>
              <img src="@/assets/icon/图层577@2x.png"
                   alt="">
            </li>
            <li>
              <p>母婴</p>
              <span>花王<em>126/件</em></span>
              <img src="@/assets/icon/图层578@2x.png"
                   alt="">
            </li>

          </div>
        </div>
      </section>
      <div class="banner">
        <img src="@/assets/icon/商品海报3@2x.png"
             alt="">
      </div>
      <div class="hot_buy">
        <t-title title="热卖好货"></t-title>
        <div class="content">
          <router-link to="/details" class="item">
            <img src="@/assets/icon/4拷贝2@2x.png" alt="">
            <div class="t">汤臣倍健 褪黑素片 400mg/片*60</div>
            <div class="info">
              <div class="pice">¥68</div>
              <div class="del">¥199</div>
            </div>
          </router-link>
        </div>
      </div>
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
  },
  data() {
    return {
      
    }
  },
  created(){
    this.$store.commit('userUpdate','123')
    this.$axios.get('api/index/index').then(res=>{
      console.log(res);
    })
  }
}
</script>

<style lang="scss" scoped>
@import "./css/index.scss";
</style>
<style>
.van-tabbar-item__icon img {
  width: auto;
}
</style>

