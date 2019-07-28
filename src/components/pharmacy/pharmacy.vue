<template>
  <div class="pharmacy">
    <header>
      <router-link to="/search">
        <van-search shape='round'
                    background='none'
                    placeholder="搜索亿长寿精选好物" />
      </router-link>
      <van-swipe :autoplay="3000"
                 indicator-color="rgba(33, 162, 230, 1)">
        <van-swipe-item v-for="(item, index) in images" :key="index">
          <img :src="item.ad_code" alt="" style="height:100%">
        </van-swipe-item>

      </van-swipe>
    </header>
    <menu>
      <van-swipe indicator-color="rgba(33, 162, 230, 1)" v-if="cateArr.length">
        <van-swipe-item>
          <div class="menu-list">
            <router-link :to="'/pharmacytype?id='+item.id"
                         tag='div'
                         v-for="(item, index) in cateArr"
                         :key="index"
                         class="menu_item"
                         v-if="index<8">
              <img :src="item.image"
                   alt="">
              <span>{{item.name}}</span>
            </router-link>
          </div>
        </van-swipe-item>
        <van-swipe-item v-if="cateArr.length>8">
          <div class="menu-list">
            <router-link :to="'/pharmacytype?id='+item.id"
                         tag='div'
                         v-for="(item, index) in cateArr"
                         :key="index"
                         class="menu_item"
                         v-if="index>8">
              <img :src="item.image"
                   alt="">
              <span>{{item.name}}</span>
            </router-link>
          </div>
        </van-swipe-item>
      </van-swipe>
    </menu>
    <div class="banner">
      <p>{{banners.name}}</p>
      <img :src="banners.banner"
           alt="">
    </div>
    <div class="hot_buy">
      <t-title title="热卖好货"></t-title>
      <div class="content">
        <van-list v-model="loading" :finished="finished" :offset="offset" @load="onLoad">
          <router-link v-for="(item, index) in goods_list"
                       :key="index"
                       class="item"
                       :to="'/details?goods_id='+item.goods_id">
            <img :src="item.original_img"
                 alt="">
            <div class="t">{{item.goods_name}}</div>
            <div class="info">
              <div class="pice">¥{{item.shop_price}}</div>
              <div class="del">¥{{item.market_price}}</div>
            </div>
          </router-link>
        </van-list>  
      </div>
    </div>
    <div id="finish">{{finished?"没有更多了~":""}}</div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search, List} from 'vant';
import TTitle from '../home/compontes/Ttitle'
import { bighoues, uploading } from '@/axios/getData'
export default {
  components: {
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanSearch: Search,
    'van-list': List, 
    TTitle
  },
  data() {
    return {
      banners: [],
      cateArr: [],
      goods_list: [],
      next_page: [],
      images:[],
      loading: false,
      finished: false,
      p:1,
      count:null,
      offset:20
    }
  },
  async created() {
    let id = this.$route.query.id
    let res = await bighoues({ id })
    // console.log(res);
    Object.keys(res.data).forEach(e => {
      this.$data[e] = res.data[e]
    })
    // console.log(this.banners);

    //热卖好货 接口数据
    var hot_ = await uploading({id,p:1});
    this.goods_list = hot_.data.goods_list
    this.p = hot_.data.p;
    console.log(hot_.data)
    this.count=hot_.data.count;
    console.log(this.count,this.p,999)
  },
  methods:{   
    async onLoad(){  //大药房上拉刷新
      let id = this.$route.query.id
      if(this.loading){
        this.p+=1;
        uploading({id,p:this.p}).then((res)=>{
          this.goods_list=this.goods_list.concat(res.data.goods_list)
          this.loading=false;
          if(this.goods_list.length==res.data.count){
            this.finished=true;
            return;
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./css/pharmacy.scss";
#finish{
  padding:5pt 0; 
  text-align: center;
  font-size: 11pt;
  color:#999;
}
</style>
