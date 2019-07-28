<template>
  <div>
    <header>
      <img :src="banner" alt="" style="height:800pt">
    </header>

    <!--上拉刷新--><!-- tag="div" -->
    <div class="list">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <router-link v-for="(item, index) in goods"              
                     :key="index"
                     :to="'/details?goods_id='+item.goods_id"
                     class="item">
          <img :src="item.original_img" alt="">
          <div class="t">{{item.goods_name +' '+ item.goods_remark}}</div>
          <div class="info">
            <div class="pice">¥{{item.shop_price}}</div>
            <div class="del">¥{{item.market_price}}</div>
          </div>
        </router-link>
      </van-list>
    </div>
  </div>
</template>

<script>
import { goods_category, goods_category_list } from '@/axios/getData'
import { List } from 'vant'
export default {
  data() {
    return {
      banner:"",
      goods:[],
      showlist: false,
      count:null,
      p:1,
      loading:false,
      finished:false,
    }
  },
  components:{
    'van-list': List, 
  },
  async created() {
    // this.getdata()
      let id = this.$route.query.id;
      let res = await goods_category({id})
      this.banner = res.data.banner.banner;
      console.log(res.data);
      // let goods= await goods_category_list({id,p:1});
      // this.goods = goods.data.goods_list;
      this.count = goods.data.count;
      // this.p+=1;
      // console.log(goods.data);
      // if(goods.data){
      //   this.p_1=true
      // }
  },
  methods: {
    async onLoad(){  //大药房上拉刷新
      let id = this.$route.query.id
      if(this.loading){
        goods_category_list({id,p:this.p}).then((res)=>{
          var goods_=res.data.goods_list
          this.loading=false;
          this.goods=this.goods.concat(goods_)
          console.log(this.goods,88888)   
          // console.log(this.goods.length,res.data.count)
           this.p = ++this.p
           console.log(this.p)
          if(this.goods.length>=res.data.count){
            console.log(12)
            this.finished=true;
          }
        })
      }
    }
  },
  watch:{
    p:{
      handler(){
        if(this.goods.length==this.count){
          this.finished=true;
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./css/pharmacytype.scss";
.van-loading{
  background: transparent !important;
}
</style>
