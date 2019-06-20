<template>
<div>
  	<div class="nav">
		<a href="#" @click="index=0" :class="{active:index==0}">所有订单</a>
		<a href="#" @click="index=1" :class="{active:index==1}">待付款</a>
		<a href="#" @click="index=2" :class="{active:index==2}">待发货</a>
		<a href="#" @click="index=3" :class="{active:index==3}">已发货</a>
		<a href="#" @click="index=4" :class="{active:index==4}">已完成</a>
	</div>
  <div class="orderList">
    <!-- <van-tabs type="card" class="tab">
      <van-tab> -->
        <van-list finished="" finished-text="没有更多了">
          <div class="list">
            <div class="item">
              <div class="head flex-between">
                <p class="number">订单号：2019113025481</p>
                <p class="status" v-if="index==1" style="color: #f8900a;">待付款</p>
                <p class="status" v-if="index==2" style="color: #2277e2;">待发货</p>
                <p class="status" v-if="index==3" style="color: #2277e2;">配送中</p>
                <p class="status" v-if="index==4" style="color: #858585;">已完成</p>
              </div>
              <!-- <router-link :to="'/orderDetails?id='+item.order_id" class="info flex"> -->
			  <router-link to="">
				  <div id="flex_info">
                	<img class="img" src="@/assets/images/图层602拷贝.png" alt="">
                	<div class="flex_1">
                	  <p class="title">善存 多维元素片100片/瓶 ...</p>
                	  <p class="text">瓶</p>
                	  <p class="price">￥105.00 &nbsp;&nbsp;&nbsp;&nbsp;<span> x5</span></p>
					  
                	</div>
				  </div>
              </router-link>
              <div class="total flex-center-y">
                总计：<span>￥210.00</span>
              </div>
              <div class="button flex-center-y">
                <div class="border flex-center">联系客服</div>
                <div class="border flex-center">取消订单</div>
                <div class="background flex-center">付款</div>
                <!-- <div class="background_blue flex-center">提醒发货</div>
                <div class="background_blue flex-center">确认收货</div>
                <div class="border flex-center">申请售后</div> -->
              </div>
            </div>
          </div>
        </van-list>
      <!-- </van-tab>
    </van-tabs> -->
  </div>
</div>
</template>

<script>
import { Tab, Tabs, List, Dialog, Toast } from 'vant';
import { order_list } from '@/axios/getData';
export default {
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab,
    'van-list': List
  },
  data(){
	  return{
      index:0,
      data:{}
	  }
  },
  created(){
    this.getData();
  },
  methods:{
    async getData(){
      var res = await order_list();
      this.data=res.data;
      console.log(res.data);
    }
  }
}
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
//     // 付款
//     payment(id) {
//       this.$post('user/payment_order', {order_id: id}).then((res) => {
//          if (typeof WeixinJSBridge == "undefined") {
//           if (document.addEventListener) {
//             document.addEventListener(
//               "WeixinJSBridgeReady",
//               onBridgeReady,
//               false
//             );
//           } else if (document.attachEvent) {
//             document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
//             document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
//           }
//         } else {
//           WeixinJSBridge.invoke(
//             "getBrandWCPayRequest",
//             {
//               appId: res.data.appId, //公众号名称，由商户传入
//               timeStamp: res.data.timeStamp, //时间戳，自1970年以来的秒数
//               nonceStr: res.data.nonceStr, //随机串
//               package: res.data.package,
//               signType: res.data.signType, //微信签名方式：
//               paySign: res.data.paySign //微信签名
//             },
//             res => {
//               if (res.err_msg == "get_brand_wcpay_request:ok") {
//                 this.$router.push({ path: "/success" });
//               }
//             }
//           );
//         }
//       })
//     }
//   }
// }
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
</style>
