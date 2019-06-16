<template>
  <div>
    <header>
      <van-swipe :autoplay="3000"
                 indicator-color="#21A2E6">
        <van-swipe-item v-for="(item) in banner"
                        :key="item.ad_id">
          <img :src="item.ad_code"
               alt="">
        </van-swipe-item>
      </van-swipe>
      <router-link to="/search">
        <van-search shape='round'
                    background='none'
                    placeholder="搜索亿长寿精选好物" />
      </router-link>
    </header>
    <main>
      <nav class="flex-wrap">
        <router-link v-for="(item, index) in yuyue"
                     :key="index"
                     to=""
                     tag="div"
                     class="item ">
          <div class="title">
            <img :src="item.logo"
                 class="icon" />{{item.name}}
          </div>
          <p>{{item.sub_name}}</p>
        </router-link>
      </nav>
      <section class="menu">
        <router-link :to="`/pharmacy?id=${item.id}`"
                     tag="div"
                     class="item"
                     v-for="(item, index) in category_eight"
                     :key="index">
          <img :src="item.image"
               alt="">
          <p>{{item.name}}</p>
        </router-link>

      </section>
      <router-link class="banner"
                   tag="div"
                   to="/pharmacy">
        <img :src="img[0].ad_code"
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
          <div v-for="(item) in fuwu"
               :key="item.id"
               class="item">
            <img :src="item.logo"
                 :alt="item.name">
          </div>
        </div>
      </section>
      <section class="banner">
        <router-link to="/pharmacy">
          <img :src="img[1].ad_code"
               alt="">
        </router-link>
      </section>
      <section class="community">
        <t-title title="健康社群"></t-title>
        <div class="content">
          <div class="item"
               v-for="(item, index) in healthy"
               :key="index">
            <img :src="item.logo"
                 alt="">
            <div>
              <p>{{item.name}}</p>
              <span>{{item.count}}人已加入</span>
            </div>
            <router-link :to="'/community?id='+item.id"
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
        <img :src="img[2].ad_code"
             alt="">
      </section>
      <section class="banner">
        <img :src="img[3].ad_code"
             alt="">
      </section>
      <section class="hot_to">
        <div class="content">
          <div class="top">
            <!-- <router-link to="" tag="li" v-for="(item, index) in category_eight.slice(0, 3)" :key="index">

            </router-link> -->
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
        <img :src="img[4].ad_code"
             alt="">
      </div>
      <div class="hot_buy">
        <t-title title="热卖好货"></t-title>
        <div class="content">
          <router-link :to="'/details?goods_id='+item.goods_id"
                       v-for="(item, index) in hot_product"
                       :key="index"
                       class="item">
            <img :src="item.good_img"
                 alt="">
            <div class="t">汤臣倍健 褪黑素片 400mg/片*60</div>
            <div class="info">
              <div class="pice">{{item.shop_price}}</div>
              <div class="del">{{item.market_price}}</div>
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
import { gethome } from '@/axios/getData'
export default {
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-search': Search,
    TTitle,
  },
  data() {
    return {
      banner: [],
      category_eight: [],
      category_seven: [],
      fuwu: [],
      healthy: [],
      hot_product: [],
      img: [{ ad_code: '' }, { ad_code: '' }, { ad_code: '' }, { ad_code: '' }, { ad_code: '' }],
      yuyue: [],
    }
  },
  async created() {
    let res = await gethome()
    console.log(res.data);
    this.banner = res.data.banner
    this.category_eight = res.data.category_eight
    this.category_seven = res.data.category_seven
    this.fuwu = res.data.fuwu
    this.healthy = res.data.healthy
    this.hot_product = res.data.hot_product
    this.img = res.data.img
    this.yuyue = res.data.yuyue
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

