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
                   :to="'/pharmacy?id='+img[0].ad_id">
        <img :src="img[0].ad_code"
             alt="">
      </router-link>
      <section class="happly-go">
        <img class="img"
             src="@/assets/images/正在乐拼.png"
             alt="">
        <div class="top">
          <h2>正在乐拼</h2>
          <router-link tag="span"
                       to="/nowhapply">
            查看全部
          </router-link>
        </div>
        <van-swipe v-if="showhapply"
                   indicator-color="white">
          <van-swipe-item v-for="(items, index) in groupList[0].goodsinfo"
                          :key="index">
            <router-link :to="'/details?goods_id='+item.goods_id"
                         tag="div"
                         v-for="(item, index) in items"
                         :key="index"
                         class="item">
              <img src="@/assets/icon/图层136拷贝@2x.png"
                   alt="">
              <p>
                {{item.goods_name}}
              </p>
              <div class="pice">
                <span>¥{{item.cost_price}}</span>
                <del>¥{{item.final_price}}</del>
              </div>
            </router-link>

          </van-swipe-item>
        </van-swipe>
        <div class="gohapply"
             v-else>
          暂时没有商品快开始乐拼吧
        </div>
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
        <router-link :to="'/pharmacy?id='+img[1].ad_id">
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
          <router-link to="/nowhapply"
                       class="more"
                       slot="right">
            更多
          </router-link>
        </div>
        <div class="content"
             v-if="category_seven.length">
          <div class="item">
            <div class="imt">
              <router-link :to="`/pharmacy?id=${category_seven[0].id}`"
                           tag="div">
                <img :src="category_seven[0].image"
                     alt="">
                <div class="title">{{category_seven[0].name}}</div>
                <div class="tex">{{category_seven[0].sub_name}}</div>
                <button class="btn">go</button>
              </router-link>
            </div>
            <div>
              <router-link :to="`/pharmacy?id=${category_seven[1].id}`"
                           class="imt2"
                           tag="div">
                <img :src="category_seven[1].image"
                     alt="">
                <div class="title">{{category_seven[1].name}}</div>
                <div class="tex">{{category_seven[1].sub_name}}</div>
              </router-link>
              <router-link :to="`/pharmacy?id=${category_seven[2].id}`"
                           class="imt2"
                           tag="div">
                <img :src="category_seven[2].image"
                     alt="">
                <div class="title">{{category_seven[2].name}}</div>
                <div class="tex">{{category_seven[2].sub_name}}</div>
              </router-link>

            </div>
          </div>
          <div class="item">
            <router-link :to="`/pharmacy?id=${category_seven[3].id}`"
                         class="imt3"
                         tag="div">
              <div class="title">{{category_seven[3].name}}</div>
              <div class="tex">{{category_seven[3].sub_name}}</div>
              <img :src="category_seven[3].image"
                   alt="">
            </router-link>
            <router-link :to="`/pharmacy?id=${category_seven[4].id}`"
                         class="imt3"
                         tag="div">
              <div class="title">{{category_seven[4].name}}</div>
              <div class="tex">{{category_seven[4].sub_name}}</div>
              <img :src="category_seven[4].image"
                   alt="">
            </router-link>
            <router-link :to="`/pharmacy?id=${category_seven[5].id}`"
                         class="imt3"
                         tag="div">
              <div class="title">{{category_seven[5].name}}</div>
              <div class="tex">{{category_seven[5].sub_name}}</div>
              <img :src="category_seven[5].image"
                   alt="">
            </router-link>
            <router-link :to="`/pharmacy?id=${category_seven[6].id}`"
                         class="imt3"
                         tag="div">
              <div class="title">{{category_seven[6].name}}</div>
              <div class="tex">{{category_seven[6].sub_name}}</div>
              <img :src="category_seven[6].image"
                   alt="">
            </router-link>

          </div>
        </div>
      </section>
      <section class="banner">
        <router-link to="/addvip">
          <img :src="img[2].ad_code"
               alt="">
        </router-link>
      </section>
      <section class="banner">
        <router-link to="/pharmacytype?id=52">
          <img :src="img[3].ad_code"
               alt="">
        </router-link>
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
              <p>隐形眼镜</p>
              <span>下单<em>立减158元</em></span>
            </li>
            <li>
              <img src="@/assets/images/药丸.png"
                   alt="">
              <p>药妆个护</p>
              <span>大牌<em>199减100元</em></span>
            </li>
            <li>
              <img src="@/assets/images/药丸.png"
                   alt="">
              <p>医疗器械</p>
              <span>低至<em>1.1元</em></span>
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
        <router-link to="/pharmacytype?id=52">
          <img :src="img[4].ad_code"
               alt="">
        </router-link>
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
      showhapply: false,
      banner: [],
      category_eight: [],
      category_seven: [],
      fuwu: [],
      healthy: [],
      hot_product: [],
      img: [{ ad_code: '' }, { ad_code: '' }, { ad_code: '' }, { ad_code: '' }, { ad_code: '' }],
      yuyue: [],
      groupList: [],
    }
  },
  async created() {

    let res = await gethome()
    console.log(res);
    this.banner = res.data.banner
    this.category_eight = res.data.category_eight
    this.category_seven = res.data.category_seven
    this.fuwu = res.data.fuwu
    this.healthy = res.data.healthy
    this.hot_product = res.data.hot_product
    this.img = res.data.img
    this.yuyue = res.data.yuyue
    this.groupList = res.data.groupList
    if (this.groupList[0].goodsinfo) {
      this.showhapply = true
    }
    this.$forceUpdate()
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

