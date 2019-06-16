<template>
  <div class="orderDetails">
    <div class="head">
      <div class="title">待收货</div>
      <div class="text">卖家已发货，请准备收货</div>
    </div>
    <div class="logistics">
      <div class="item">
        <p class="title">物流信息： 顺丰快递  2548974512648</p>
        <p class="time">2019-03-02 19:14:17</p>
      </div>
      <!-- <div class="item">
        <p class="title">收货人:</p>
        <p class="address"></p>
      </div> -->
    </div>
    <div class="wrap">
      <div class="lepin msg">
        <h4 class="msg1">乐拼信息</h4>
        <div class="inner">
          <div style="display:flex;align-items:center;">
            <img src="@/assets/images/522.png" alt="">
            <img src="@/assets/images/522.png" alt="" style="margin-left:-15pt;"/>
            <img src="@/assets/images/522.png" alt="" style="margin-left:-15pt;"/>
            <img src="@/assets/images/522.png" alt="" style="margin-left:-15pt;"/>
            <img src="@/assets/images/522.png" alt="" style="margin-left:-15pt;"/>
            <img src="@/assets/images/522.png" alt="" style="margin-left:-15pt;"/>
            <img src="@/assets/images/更多(5)@2x.png" alt="" style="margin-left:20px;"/>
          </div>
          <div class="flexlepin">
            <p class="button">申请售后</p> <!--@click="$router.push({path: '/afterSale'})" -->
          </div>
        </div>
      </div>
      <div class="msg">
        <h4 class="msg1">商品信息</h4>
        <div class="product flex">
          <img src="@/assets/images/图层600拷贝(2).png" alt="">
          <div class="info flex_1">
            <p class="title">力度伸 维生素C泡腾片橙味 </p>
            <p class="price">￥99.99 &nbsp;&nbsp;&nbsp;&nbsp;<span> X5</span></p>
            <div class="afterSale flex">
               <p class="button flex-center">申请售后</p> <!--@click="$router.push({path: '/afterSale'})" -->
            </div>
          </div>
        </div>
      </div>
      <div class="list">
        <h4>收货地址</h4>
        <div class="item flex">
          <div class="title">收件人:</div>
          <div class="text"> &nbsp;&nbsp;&nbsp;&nbsp;林小七</div>
        </div>
        <div class="item flex">
          <div class="title">电话号码：</div>
          <div class="text"> &nbsp;&nbsp;&nbsp;&nbsp;18888888888</div>
        </div>
        <div class="item flex">
          <div class="title">收货地址：</div>
          <div class="text"> &nbsp;&nbsp;&nbsp;&nbsp;深圳市龙华新区民治街道牛栏前大厦B1215</div>
        </div>
      </div>
      <div class="list">
        <h4>订单信息</h4>
        <div class="item flex-between">
          <div class="title">订单号码：</div>
          <div class="text">20191130058462484</div>
        </div>
        <div class="item flex-between">
          <div class="title">下单时间：</div>
          <div class="text">2019-11-30 10:42:38</div>
        </div>
        <div class="item flex-between">
          <div class="title">支付方式：</div>
          <div class="text">支付宝</div>
        </div>
        <div class="item flex-between">
          <div class="title">备注：</div>
          <div class="text" style="color: #868686">无</div>
        </div>
      </div>
      <div class="list">
        <div class="item flex-between">
          <div class="title">商品金额：</div>
          <div class="text">￥98.00</div>
        </div>
        <div class="item flex-between">
          <div class="title">运费：</div>
          <div class="text">+￥0.00</div>
        </div>
        <div class="item flex-between">
          <div class="title">优惠券抵扣：</div>
          <div class="text">-￥0.00</div>
        </div>
        <div class="item flex-between">
          <div class="title">元宝抵扣：</div>
          <div class="text">-￥0.00</div>
        </div>
        <div class="item flex-between">
          <div class="title">积分抵扣：</div>
          <div class="text">-￥0.00</div>
        </div>
        <div class="item flex-between">
          <div class="title">实付金额：</div>
          <div class="text" style="color: #e22424">￥98.00</div>
        </div>
      </div>
    </div>
    <div class="handle flex-center-y">
      <div class="border flex-center">联系客服</div>
      <!-- <div class="border flex-center">取消订单</div> -->
      <!-- <div class="background flex-center">付款</div> -->
      <div class="background_blue flex-center">确认收货</div>
    </div>
  </div>
</template>

<script>
// import util from '../utils/utils.js'
export default {
  created() {
    // this.getData()
  },
  data() {
    return {
      data: {
        order_goods: [{}]
      }
    }
  },
}
//   methods: {
//     getData() {
//       this.$post('order/order_detail', {id: this.$route.query.id}).then((res) => {
//         this.data = res.data
//       })
//     }
//   },
//   filters: {
//     date(val) {
//       if (val) {
//         let date = util.format(val*1000)
//         return date
//       }
//     }
//   }
// }
</script>

<style scoped lang="scss">
.orderDetails {
  background: url('src/assets/images/矩形10拷贝3@2x.png') no-repeat top;
  background-size: 100% auto;
  overflow: hidden;
  padding: 0 35px;
  background-color: #fff;
}
.head {
  padding: 40px 0;
  color: #fff;
  .title {
    font-size: 46px;
    margin-bottom: 14px;
  }
}
.logistics {
  padding: 0 30px;
  box-shadow: 0 4px 20px #e6e6e6;
  background: #fff;
  border-radius: 14px;
  margin-bottom: 30px;
  .item {
    background: url(src/assets/images/图层18@2x.png) no-repeat 100% center;
    padding: 30px 0;
    &:first-child {
      border-bottom: 1px solid #e1e1e1;
    }
    .time {
      margin-top: 15px;
      color: #848484;
      font-size: 26px;
    }
    .address {
      margin-top: 15px;
      color: #4c4c4c;
      font-size: 26px;
    }
  }
}
.wrap {
  background: #fff;
  margin-bottom: 100px;
  .lepin{
    margin-bottom:50px;
    .inner{
      margin:20px 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150px;
          height: 60px;
          border-radius: 60px;
          border: 2px solid #eee;
          color: #848484;
      }
    }
  }
  .msg{
    .msg1{
      font-size: 0.48rem;
      font-weight: 100;
      color: #333;
    }
  }
  .product {
    padding: 25px 0;
    border-bottom: 1px solid #eee;
    img {
      width: 120px;
      height: 120px;
      border-radius: 10px;
    }
    .info {
      overflow: hidden;
      padding-left: 20px;
      .title {
        font-size: 30px;
        margin-bottom: 8px;
      }
      span {
        color: #848484;
      }
      .afterSale {
        justify-content: flex-end;
        .button {
          width: 150px;
          height: 60px;
          border-radius: 60px;
          border: 2px solid #eee;
          color: #848484;
        }
      }
    }
  }
  .list {
    padding: 40px 0;
    border-bottom: 1px solid #eee;
    h4 {
      font-size: 36px;
      font-weight: 100;
      margin-bottom: 30px;
      color: #333;
    }
    .item {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .title {
        color: #868686;
      }
      .text {
        color: #020202;
      }
    }
  }
}
.handle {
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 10px #ece8e8;
  justify-content: flex-end;
  div {
      width: 170px;
      height: 50px;
      border-radius: 30px;
      margin-right: 20px;
      font-size: 28px;
      // &:last-child {
      //   margin-right: 0;
      // }
    }
    .border {
      border: 2px solid #efefef;
      box-sizing: border-box;
      color: #545454;
    }
    .background {
      background: linear-gradient(to right, #fcd54e , #edb342);
      color: #fff;
    }
    .background_blue  {
      background: linear-gradient(to right, #FD7253 , #EF4821);
      color: #fff;
    }
}
</style>

