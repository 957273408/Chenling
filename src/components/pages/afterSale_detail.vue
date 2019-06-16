<template>
  <div class="afterSale_detail">
    <div class="steps flex-center-y">
      <div class="item flex_1" v-for="(item, index) in exchange" :key="index">
        <div class="icon">
          <img src="../../assets/images/step_success.png" alt="" v-if="active >= index">
          <img src="../../assets/images/step_loser.png" alt="" v-else>
          <p class="line" :class="active < index ? 'disable' : ''" v-if="index"></p>
        </div>
        <p class="title">{{item.title}}</p>
      </div>
    </div>
    <div class="state flex-between" @click="$router.push({path: '/afterSale_detail_path'})">
      <div class="left">
        <p class="title">审核通过，请将商品寄到退货地址</p>
        <p class="time">2019-03-07 11:25:54</p>
      </div>
      <van-icon name="arrow" />
    </div>
    <div class="list">
      <h3>商品信息</h3>
      <div class="info flex">
        <img src="../../assets/images/classify_item.png" alt="">
        <div class="flex_1">
          <p class="title">基因检测3999套餐</p>
          <div class="flex-between">
            <p><span>单价：</span>￥3999.00</p>
            <p><span>申请数量：</span>x2</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="h3">退货地址</div>
        <div class="cell flex">
          <div class="title">收件人：</div>
          <div class="text flex_1">华云生命</div>
        </div>
        <div class="cell flex">
          <div class="title">电话号码：</div>
          <div class="text flex_1">0755-25568628 </div>
        </div>
        <div class="cell flex">
          <div class="title">收货地址：</div>
          <div class="text flex_1">深圳市龙岗区坂田街道发达路云里智能园6栋2楼</div>
        </div>
      </div>
      <div class="item">
        <div class="h3">收货地址</div>
        <div class="cell flex">
          <div class="title">收件人：</div>
          <div class="text flex_1">林小七</div>
        </div>
        <div class="cell flex">
          <div class="title">电话号码：</div>
          <div class="text flex_1">13531502899</div>
        </div>
        <div class="cell flex">
          <div class="title">收货地址：</div>
          <div class="text flex_1">深圳市龙华新区民治街道牛栏前大厦B1215</div>
        </div>
      </div>
      <div class="item">
        <div class="h3">服务信息</div>
        <div class="cell flex">
          <div class="title">服务单号：</div>
          <div class="text flex_1">20181130058462484</div>
        </div>
        <div class="cell flex">
          <div class="title">申请时间：</div>
          <div class="text flex_1">2018-11-30 10:42:38</div>
        </div>
        <div class="cell flex">
          <div class="title">服务类型：</div>
          <div class="text flex_1">换货</div>
        </div>
      </div>
    </div>
    <div class="handle flex-center-y">
      <div class="border flex-center">联系客服</div>
      <!-- <div class="border flex-center">取消订单</div> -->
      <!-- <div class="background flex-center">付款</div> -->
      <div class="background_blue flex-center" @click="popup=true">填写单号</div>
    </div>
    <van-popup v-model="popup">
      <div class="popup">
        <p class="title">填写单号</p>
        <div class="item">
          <input type="text" placeholder="请输入快递公司名称">
        </div>
        <div class="item">
          <input type="text" placeholder="请输入快递单号">
        </div>
        <div class="button flex-between">
          <div class="flex-center back" @click="popup=false">返回</div>
          <div class="flex-center submit" @click="popup=false">提交</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Popup } from 'vant';
export default {
  components: {
    'van-icon': Icon,
    'van-popup': Popup
  },
  data() {
    return {
      active: 1,
      exchange: [
        {
          title: '提交申请'
        },
        {
          title: '审核通过'
        },
        {
          title: '寄回商品'
        },
        {
          title: '商家寄出'
        },
        {
          title: '确认收货'
        },
        {
          title: '完成'
        },
      ],
      return: [
        {
          title: '提交申请'
        },
        {
          title: '审核通过'
        },
        {
          title: '寄回商品'
        },
        {
          title: '商家收货'
        },
        {
          title: '退款'
        },
      ],
      popup: false
    }
  }
}
</script>

<style scoped lang="scss">
.afterSale_detail {
  background: url('src/assets/images/afterSale_detail.png') no-repeat top;
  background-size: 100% auto;
  padding: 30px 30px 0 30px;
  background-color: #fff;
  .steps {
    color: #fff;
    text-align: center;
    padding: 35px 0;
    .item {
      .icon {
        position: relative;
        .line {
          width: 100%;
          height: 8px;
          background: #fff;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%)
        }
        .disable {
          opacity: .7;
        }
        img {
          width: 34px;
          position: relative;
          z-index: 100;
        }
      }
      .title {
        margin-top: 6px;
        font-size: 24px
      }
    }
  }
  .state {
    box-shadow: 0 4px 20px #e6e6e6;
    padding: 30px;
    background:  #fff;
    border-radius: 20px;
    .title {
      font-size: 32px;
      margin-bottom: 14px;
    }
    .time {
      font-size: 24px;
      color: #848484;
    }
  }
  .list {
    padding-top: 50px;
    padding-bottom: 100px;
    h3 {
      font-size: 34px;
      font-weight: 100;
    }
    .info {
      background: #fff;
      padding: 30px 0;
      border-bottom: 1px solid #eee;
      img {
        width: 120px;
        height: 120px;
        border-radius: 10px;
      }
      .flex_1 {
        margin-left: 20px;
        .title {
          font-size: 32px;
          margin-bottom: 40px;
        }
        p {
          span {
            color: #848484;
          }
        }
      }
    }
    .item {
      padding: 30px 0;
      border-bottom: 1px solid #eee;
      .h3 {
        font-size: 34px;
        font-weight: 100;
        margin-bottom: 20px;
      }
      .cell {
        line-height: 50px;
        .title {
          width: 160px;
          color: #868686;
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
      background: linear-gradient(to right, #fd7253 , #ef4821);
      color: #fff;
    }
  }
  .van-popup {
    background: transparent
  }
  .popup {
    width: 680px;
    border-radius: 30px;
    background: #fff;
    box-sizing: border-box;
    padding: 45px;
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
        background: #eee;
      }
      .submit {
        background: linear-gradient(to right, #fd7253 , #ef4821);
        color: #fff;
      }
    }
  }
}
</style>
