<!--兑换积分-->
<template>
  <div id="box">
    
<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <van-list>
      <div class="list">
        <div class="item flex" v-for="(item,index) in data.goods_list" :key="index">
          <img src="@/assets/images/图层90拷贝@2x.png">
          <div class="info flex_1">
            <p class="title">{{item.goods_name}}</p>
            <p class="price">{{item.intergral}}积分</p>
            <div class="button flex-center" @click="detali(item.order_id)">查看详情</div>
          </div>
        </div>
        <div class="button_more" v-if="data.goods_list.length>0">
          <van-button round @click="more" :class="{jinyong:data.count==data.goods_list.length}">{{data.count==data.goods_list.length?"没有更多数据了":"加载更多"}}</van-button>
        </div>
      </div>
	    <!-- <div class="item flex">
          <img src="@/assets/images/图层93拷贝@2x.png">
          <div class="info flex_1">




            <p class="title">DJI 大疆无人机 御Mavic 2</p>
            <p class="price">50000积分</p>
            <div class="button flex-center">查看详情</div>
          </div>
        </div>
      </div> -->
    </van-list>
    <van-popup v-model="popup">
      <div class="popup">
        <p class="title">兑换信息</p>
        <div class="info">
          <div>
            <div class="item1">兑换商品:</div>
            <div>{{duihuan_detali.goods_name}}</div>
          </div>
          <div>
            <div class="item1">花费积分:</div>
            <div>{{duihuan_detali.intergral}}积分</div>
          </div>
          <div>
            <div class="item1">收件人:</div>
            <div>{{duihuan_detali.consignee}}</div>
          </div>
          <div>
            <div class="item1">联系方式:</div>
            <div>{{duihuan_detali.mobile}}</div>
          </div>
          <div>
            <div class="item3">收货地址:</div>
            <div>{{duihuan_detali.address}}</div>
          </div>
          <div>
            <div class="item1">发货状态:</div>
            <div>{{duihuan_detali.shipping_status==0?'未发货':'已发货'}}<br><div>{{duihuan_detali.shipping_status==0?'':duihuan_detali.shipping_code}}({{duihuan_detali.shipping_status==0?'':duihuan_detali.invoice_no}})</div></div>
          </div>
        </div>
        <div class="button">
          <div class="flex-center back" @click="popup=false">返回</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { List, Popup, Button} from 'vant';
import { duihuan_jilu, duihuan_xq } from '@/axios/getData';
export default {
  data(){
    return{
      popup:false,
      data:{
        goods_list:[]
      },
      duihuan_detali:{}
    }
  },
  created(){
    this.getdata();
  },
  methods:{
    async getdata(){
      var res = await duihuan_jilu();
      this.data=res.data;
      console.log(res.data)
    },
    async detali(order_){
      var res = await duihuan_xq({order_id:order_});
      this.duihuan_detali=res.data;
      this.popup=true;
      console.log(res.data);
    },
    async more(){
      if(this.data.count!=this.data.goods_list.length){
        // console.log(464646)
        this.data.p+=1;
        var res = await duihuan_jilu({id:this.id_,p:this.data.p});
        this.data.goods_list.push.apply(this.data.goods_list,res.data.goods_list)  //数组拼接
      }
    },
  },
  components: {
    'van-list': List,
    'van-popup':Popup,
    'van-button':Button
  },
}
//   data() {
//     return {
//       list: [],
//       loading: false,
//       page: 1,
//       finished: false
//     }
//   },
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData(clear) {
//       let index = this.active
//       if (clear) {
//         this.list = []
//         this.page =  1
//         this.finished = false
//       }
//       if (this.finished) return false
//       this.loading = true
//       let data = {
//         p: this.page,
//         level: this.active
//       }
//       this.$post('user/collect_list', data).then((res) => {
//         this.list = this.list.concat(res.data)
//         this.loading = false
//         if (res.data.length < 10)  this.finished = true
//         this.page = ++this.page
//       })
//     },
//     cancel(id) {
//       Dialog.confirm({
//         title: '提示',
//         message: '是否确认取消收藏！'
//       }).then(() => {
//         let data = {
//           collect_id: id
//         }
//         this.$post('user/cancel_collect', data).then((res) => {
//           this.getData('clear')
//         })
//       })
//     }
//   }
// }
</script>

<style scoped lang="scss">
.item {
  margin: 35px;
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  img {
    width: 185px;
    height: 185px;
    border-radius: 10px;
  }
  .info {
    margin-left: 25px;
    overflow: hidden;
    .title {
      font-size: 34px;
    }
    .price {
      margin: 20px 0;
      font-size: 36px;
      font-weight: bold;
      color: #dc2121;
    }
    .button {
      width: 180px;
      height: 55px;
      background: #eee;
      border-radius: 30px;
      color: #a0a0a0;
    }
  }
}
.noData {
  text-align: center;
  margin-top: 30px;
}
.popup {
  width: 680px;
  border-radius: 80px;
  background: #fff;
  box-sizing: border-box;
  padding: 45px;
  .info{
    font-size: 10pt;
    &>div{
      width:100%;
      display: flex;
      margin-bottom: 10pt;
      &>div:nth-child(1){
        width:25%;
      }
      &>div:nth-child(2){
        width:75%;
      }
    }
    .item1{
      width:50pt;
      text-align: right;
    }
    .item2{
      padding-left:30px; 
    }
    .item3{
      width:145pt;
      text-align: right;
    }
    &>div>div:nth-child(2){
      margin-left:15pt;
    }
  }
  .button {
    padding: 0 10px;
    margin-top: 50px;
    div {
      width: 270px;
      height: 90px;
      border-radius: 90px;
      font-size: 32px;
    }
    .back {
      background: #cccccc;
      color: #000;
      margin: 0 auto;
    }
  }
  .title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .item {
    margin: 35px 0;
    input {
      width: 100%;
      height: 90px;
      background: #eee;
      box-sizing: border-box;
      padding: 0 30px;
      border-radius: 10px;
      font-size: 32px;
      &::-webkit-input-placeholder{
        color:rgb(150, 150, 150);
      }
    }
  }
}
.button_more{
  text-align: center;
  margin:10pt;
  .van-button{
    background: linear-gradient(to right,#FE5900,#FF8500);
    height:30pt;
    color:#fff;
    line-height:30pt;
  }
}
.jinyong{
  background: #ccc !important;
}
//    #box /deep/ .van-nav-bar {
//   .van-icon{
//   	color: #999 !important;
//   }
//   .van-nav-bar__text{
//   	color: #999 !important;
//   }
// }
</style>
