<template>
<div id="box">
  	<!-- all 所有订单
waitpay 待支付
waitsend 待发货
waitccomment 待评价
finish 已完成 -->
    
    <div class="nav">
		  <a href="#" @click="toggle_order(0)" :class="{active:index==0}">所有订单</a>
		  <a href="#" @click="toggle_order(1)" :class="{active:index==1}">待支付</a>
		  <a href="#" @click="toggle_order(2)" :class="{active:index==2}">待发货</a>
		  <!-- <a href="#" @click="toggle_order(3)" :class="{active:index==3}">已发货</a> -->
		  <a href="#" @click="toggle_order(3)" :class="{active:index==3}">待评价</a>
		  <a href="#" @click="toggle_order(4)" :class="{active:index==4}">已完成</a>
	  </div>

    <div class="orderList">
      <van-list finished-text="没有更多了" v-model="loading" :finished="finished" @load="onLoad">
        <div class="list" v-for="(item,index) in data" :key="index">
            <div class="head flex-between" style="margin:0 20pt;">
              <p class="number">订单号：<span>{{item.order_sn}}</span></p>
              <p class="status" v-if="item.order_status==0" style="color: #f8900a;">{{item.order_status_detail}}</p>
              <p class="status" v-if="item.order_status==1" style="color: #2277e2;">{{item.order_status_detail}}</p>
              <p class="status" v-if="item.order_status==2" style="color: #2277e2;">{{item.order_status_detail}}</p>
              <p class="status" v-if="item.order_status==3" style="color: #858585;">{{item.order_status_detail}}</p>
              <p class="status" v-if="item.order_status==4" style="color: #2277e2;">{{item.order_status_detail}}</p>
              <p class="status" v-if="item.order_status>=4" style="color: #858585;">{{item.order_status_detail}}</p> 
            </div>
            <div class="item">
			        <div id="flex_info" v-for="(items,index_) in item.order_goods" :key="index_">
              	<img class="img" :src="items.original_img" alt="">
              	<div class="flex_1">
              	  <p class="title">{{items.goods_name}}</p>
              	  <p class="text" style="display:block;margin:10pt 0;"></p>
              	  <p class="price">￥{{Number(items.goods_price)}} &nbsp;&nbsp;&nbsp;&nbsp;<span> x {{items.goods_num}}</span></p>
              	</div>
			        </div>
              <div class="total flex-center-y">
                总计：<span>￥{{item.order_amount}}</span>
              </div>
              <div class="button flex-center-y">
                <div class="border flex-center">联系客服</div>
                <div class="border flex-center" @click="$router.push({path:'/chakanwuliu',query:{id_:item.order_id}})">查看物流</div>
                <div class="border flex-center" v-if="item.order_status<=1" @click="cancel(item.order_id,index)">取消订单</div>
                <div class="background flex-center" v-if="item.order_status==0" @click="up_order(item.order_id)">去付款</div>
                <div class="background_blue flex-center" v-if="item.order_status==1">提醒发货</div>
                <div class="background_blue flex-center" v-if="item.order_status==2">确认收货</div>
                <div class="border flex-center" v-if="item.order_status>=4">申请售后</div>
              </div>
            </div>
        </div>
      </van-list>
  </div>
</div>
</template>

<script>
import { Tab, Tabs, List, Dialog, Toast, NavBar } from 'vant';
import { order_list, del_order, up_myorder } from '@/axios/getData';
export default {
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab,
    'van-list': List,
    vanNavBar:NavBar
  },
  data(){
	  return{
      index:0,
      data:[
        {}
      ],
      list:[],
      loading: false,
      finished: false,
      type:['all','waitpay','waitsend','waitccomment','finish'],
      p:1
	  }
  },
  created(){
    console.log()
    this.getData();
  },
  methods:{
    async getData(){
      var res = await order_list({type:'all',page:1});
      // this.data=res.data.list;
      console.log(res.data);
      // console.log(this.data,res.data.list[0].order_goods[0])
      // for(let i=0;i<res.data.list.length;i++){
      //   this.data[i].order_goods.pop();
      //   this.data[i].order_goods.push(res.data.list[i].order_goods[0]);
      // }
      // console.log(this.data)
    },
    //未发货之前取消订单
    async cancel(id,index) {
      Dialog.confirm({
        title: '提示',
        message: '取消订单后不可恢复！'
      }).then(() => {
        del_order({order_id: id}).then((res) => {
          if(res.code==200){
            Toast('取消成功')
            this.data.splice(index,1);
          } else {
            Toast('取消失败')
          }
        })
      })
    },
    async onLoad(){
      if(this.loading){
        if(this.p==1){
          this.data=[]
        }
        console.log(this.index,8888888)
        order_list({type:this.type[this.index],page:this.p}).then((res)=>{
          this.data=this.data.concat(res.data.list)
          this.loading=false;
          this.p+=1;
          if(this.data.length>=res.data.count){
            this.finished=true;
            return;
          }
        })
      }
    },
    toggle_order(a){
      this.index=a;
      console.log(this.index)
      this.p=1;
      this.finished=false;
      this.loading=true;
      console.log(1)
      this.onLoad();
      console.log(this.data)
    },
    async up_order(aa){
      await  up_myorder({order_id:aa}).then((res)=>{
        this.onBridgeReady(res);
      })
      console.log(res)
    },
    onBridgeReady(res) {
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: res.data.appId, //公众号名称，由商户传入
          timeStamp: res.data.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: res.data.nonceStr, //随机串
          package: res.data.package,
          signType: res.data.signType, //微信签名方式：
          paySign: res.data.paySign //微信签名
        },
        res => {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            this.$router.push({ path: "/succesorder" });
          }
        }
      );
    }
  }
}
    // payment(id) {
    //   this.$post('user/payment_order', {order_id: id}).then((res) => {
    //      if (typeof WeixinJSBridge == "undefined") {
    //       if (document.addEventListener) {
    //         document.addEventListener(
    //           "WeixinJSBridgeReady",
    //           onBridgeReady,
    //           false
    //         );
    //       } else if (document.attachEvent) {
    //         document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
    //         document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
    //       }
    //     } else {
    //       WeixinJSBridge.invoke(
    //         "getBrandWCPayRequest",
    //         {
    //           appId: res.data.appId, //公众号名称，由商户传入
    //           timeStamp: res.data.timeStamp, //时间戳，自1970年以来的秒数
    //           nonceStr: res.data.nonceStr, //随机串
    //           package: res.data.package,
    //           signType: res.data.signType, //微信签名方式：
    //           paySign: res.data.paySign //微信签名
    //         },
    //         res => {
    //           if (res.err_msg == "get_brand_wcpay_request:ok") {
    //             this.$router.push({ path: "/success" });
    //           }
    //         }
    //       );
    //     }
    //   })
    // }

//   data() {
//     return {
//       active: 0,
//       tabList: [
//         {
//           title: '全部',
//           loading: false,
//           page: 1,
//           finished: false,
//           list: [],
//           type: 'all'
//         },
//         {
//           title: '待付款',
//           loading: false,
//           page: 1,
//           finished: false,
//           list: [],
//           type: 1
//         },
//         {
//           title: '待发货',
//           loading: false,
//           page: 1,
//           finished: false,
//           list: [],
//           type: 2
//         },
//         {
//           title: '配送中',
//           loading: false,
//           page: 1,
//           finished: false,
//           list: [],
//           type: 3
//         },
//         {
//           title: '已完成',
//           loading: false,
//           page: 1,
//           finished: false,
//           list: [],
//           type: 4
//         }
//       ]
//     }
//   },
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData(clear) {
//       let index = this.active
//       if (clear) this.tabList[index].page = 1; this.tabList[index].finished = false
//       if (this.tabList[index].finished) return false
//       this.tabList[index].loading = true
//       let data = {
//         p: this.tabList[index].page,
//         type: this.tabList[index].type
//       }
//       this.$post('order/order_list', data).then((res) => {
//         this.tabList[index].list = clear ? res.data : this.tabList[index].list.concat(res.data)
//         this.tabList[index].loading = false
//         if (res.data.length < 10)  this.tabList[index].finished = true
//         this.tabList[index].page = ++this.tabList[index].page
//       })
//     },
//     // 取消订单
//     cancel(id) {
//       Dialog.confirm({
//         title: '提示',
//         message: '取消订单后不可恢复！'
//       }).then(() => {
//         this.$post('order/cancel_order', {order_id: id}).then((res) => {
//           Toast('取消成功')
//           this.getData(true)
//         })
//       })
//     },
//     // 确认收货
//     submit(id) {
//       Dialog.confirm({
//         title: '提示',
//         message: '请检查订单无误后确认！'
//       }).then(() => {
//         this.$post('order/order_confirm', {order_id: id}).then((res) => {
//           this.getData(true)
//         })
//       })
//     },
//     afterSale(item) {
//       this.$router.push({
//         name: 'afterSale',
//         query: {
//           id: 14
//         }
//       })
//     },

</script>

<style scoped lang="scss">
.orderList {
  margin-top: 25px;
}
.list {
	a{
		color:#000;
	}
  .img{
	  width:60pt;
	  height:60pt;
	  margin-right:50px;
  }
  .item {
    padding: 0 20px;
    margin: 30px 30px 0 30px;
    background: #fff;
    border-radius: 20px;
    display: block;
    .head {
      height: 100px;
    }
    .info {
      padding: 20px;
      background: #fafafa;
      img {
        width: 120px;
        height: 120px;
        margin-right: 25px;
        border-radius: 6px;
      }
      .flex_1 {
        overflow: hidden;
        .text {
          font-size: 22px;
          color: #848484;
          margin: 6px 0;
        }
        .price {
            color: #848484;
        }
      }
    }
    .total {
      height: 80px;
      justify-content: flex-end;
      span {
        color: #ef1818;
        font-weight: bold;
      }
    }
    .button {
      justify-content: flex-end;
      padding-bottom: 30px;
      margin-bottom: 30px;
      border-bottom: 1pt solid rgba(153, 153, 153, .3);
      div {
        width: 170px;
        height: 50px;
        border-radius: 30px;
        margin-right: 20px;
        font-size: 22px;
        &:last-child {
          margin-right: 0;
        }
      }
      .border {
        border: 2px solid #efefef;
        box-sizing: border-box;
        color: #545454;
      }
      .background {
        background: #FF4C23;
        color: #fff;
      }
      .background_blue  {
        background: linear-gradient(to right, #21cce6 , #2697e7);
        color: #fff;
      }
    }
  }
}
.nav{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 50px;
	a{
		color:#000; 
	}
	.active{
		position: relative;
		color:#FF4C23;
	}
	.active::after{
		position: absolute;
		content: "";
		width: 100%;
		height: 0.066667rem;
		background: #FF4C23;
		left: 0;
		bottom: -20px;
	}
}
#flex_info{
	display: flex;
	flex-direction: row;
	align-items: center;
}
// #box /deep/ .van-nav-bar {
//   .van-icon{
//   	color: #999 !important;
//   }
//   .van-nav-bar__text{
//   	color: #999 !important;
//   }
// }
</style>
