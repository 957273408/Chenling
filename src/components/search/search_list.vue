<template>
  <div>
    <header id="top">
      <van-collapse v-model="activeNames"  accordion id="coll">
        <van-collapse-item :title="title_1[sort.sort1]" name="1">
          <div class="item_1 bottom" @click="getsearch(1,0)">综合</div>
          <div class="item_1 bottom" @click="getsearch(1,1)">新品</div>
          <div class="item_1" @click="getsearch(1,2)">评价</div>
        </van-collapse-item>
        <van-collapse-item :title="title_2[sort.sort2]" name="2">
          <div class="item_1 bottom" @click="getsearch(2,1)">从低到高</div>
          <div class="item_1" @click="getsearch(2,2)">从高到低</div>
        </van-collapse-item>
        <van-collapse-item :title="title_3[sort.sort3]" name="3" class="item_1">
          <div class="item_1 bottom" @click="getsearch(3,1)">从低到高</div>
          <div class="item_1" @click="getsearch(3,2)">从高到低</div>
        </van-collapse-item>
      </van-collapse>
    </header>
    <!--上拉刷新-->
    <div class="list" v-if="!fail">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <router-link v-for="(item, index) in goods" :key="index" :to="'/details?goods_id='+item.goods_id" class="item">
          <img :src="item.original_img" alt="">
          <div class="t">{{item.goods_name}}</div>
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
import { goods_category, goods_category_list, searchlist} from '@/axios/getData'
import { List, Collapse, CollapseItem, Toast  } from 'vant'
export default {
  data() {
    return {
      //联合查询字段
      title_1:['综合','新品','评论'],
      title_2:['价格','价格 低到高','价格 高到低'],
      title_3:['销量','销量 低到高','销量 高到低'],
      //排序方式
      sort_asc1:['sort,desc','is_new,desc','comment_count,desc'],  //综合
      sort_asc2:['','shop_price,asc','shop_price,desc'],    //价格
      sort_asc3:['','sales_sum,asc','sales_sum,desc'],    //销量
      sort:{
        sort1:0,
        sort2:0,
        sort3:0
      },
      banner:"",
      goods:[],
      showlist: false,
      count:null,
      p:1,
      loading:false,
      finished:false,
      fail:"",
      activeNames:[],
      type:1,
    }
  },
  components:{
    'van-list': List,
    'van-collapse':Collapse, 
    'van-collapse-item':CollapseItem 
  },
  async created() {
    // console.log(this.$route.query.keyword);
    // this.onLoad()
    let res = await searchlist({keyword:this.$route.query.keyword});
    console.log(res)
    if(res.data.goods_list==null){
      this.fail = res.msg
      Toast("没有搜索到任何商品")
      setTimeout(()=>{
        this.$router.go(-1);
      },500)
    }else{
      // this.goods=res.data.goods_list;
    }
  },
  methods: {
    getkey(aa){
      this.activeNames=[];
    },
    getsearch(a,b){
      this.type=0
      this.sort['sort'+a]=b;
      this.p=1;
      this.activeNames=[];
      console.log(68747)
      this.onLoad();
    },
    async getdata1(){
      let id = this.$route.query.keyword
      searchlist({keyword:id,p:this.p,comprehensive:this.sort_asc1[this.sort.sort1],price:this.sort_asc2[this.sort.sort2],volume:this.sort_asc3[this.sort.sort3]}).then((res)=>{
        this.goods=res.data.goods_list;
        console.log(res.data)
      }) 
    },
    async onLoad(){  //上拉刷新
      let id = this.$route.query.keyword
      if(this.type){
        if(this.loading){
          searchlist({keyword:id,p:this.p}).then((res)=>{
            var goods=res.data.goods_list
            this.loading=false;
            this.goods=this.goods.concat(goods)
            console.log(this.goods)   
            // console.log(this.goods.length,res.data.count)
            this.p = ++this.p
            console.log(this.p)
            if(this.goods.length>=res.data.count){
              this.finished=true;
            }
          })
        }else{
          this.finished=true;
        }
      }else{
        console.log(52555552)
        if(this.p==1){
          console.log(5555555555)
          this.goods=[];
        }
        if((this.p==1&&this.type==0)||this.loading){
          console.log(122)
          searchlist({keyword:id,p:this.p,comprehensive:this.sort_asc1[this.sort.sort1],price:this.sort_asc2[this.sort.sort2],volume:this.sort_asc3[this.sort.sort3]}).then((res)=>{
            var goods=res.data.goods_list
            this.loading=false;
            this.goods=this.goods.concat(goods)
            console.log(this.goods)   
            // console.log(this.goods.length,res.data.count)
            this.p = ++this.p
            console.log(this.p)
            if(this.goods.length>=res.data.count){
              this.finished=true;
            }
          })
        }else{
          this.finished=true;
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#top{
  justify-content: space-around;
  height:30pt;
  &>div{
    display: flex;
    width:100%;
    text-align: center;
    line-height: 30pt;
    &>div{
      width:30%;
    }
  }
}
.list{
  // height:100%;
  &>div{
  width:100%;
  display: flex;
  flex-wrap: wrap;
  .item{
    width: 50%;
    padding: 30px;
    box-sizing: border-box;
    img{
      width:180px;
      height:180px;
      margin: auto;
    }
    .t{
      font-size:26px;
      font-weight:bold;
      line-height: 35px;
      color:rgba(44,44,44,1);
    }
    .info{
      display: flex;
      margin-top: 23px;
      .pice{
        color: rgba(231, 39, 66, 1);
        font-size: 30px;
        font-weight: bold;
        line-height:35px;
        margin-right: 13px;
      }
      .del{
        font-size:20px;
        text-decoration:line-through;
        vertical-align: bottom;
        color:rgba(180,180,180,1);
        line-height:35px;
      }
    }
  }
}
}
.van-loading{
  background: transparent !important;
}
.item_1{
  height: 30pt;
  line-height: 30pt;
}
.bottom{
  border-bottom:1pt solid rgba(153, 153, 153, 0.2);
}

#coll /deep/ .van-collapse-item__content{
  margin-top:-2pt;
  border:1pt solid rgba(153, 153, 153, 0.2);
  border-top:none;
}
#coll /deep/ .van-cell{
  padding:10pt 0;
}
</style>
