<template>
  <div>
    <div class="user flex-center-y">
      <img src="../../assets/icon/coordinates@2x.png"
           alt
           class="address_icon">
      <div class="flex_1">
        <div class="flex-between">
          <p>收货人：{{data.address.consignee}}</p>
          <p>{{data.address.mobile}}</p>
        </div>
        <p class="address">{{ data.address.city + data.address.district + data.address.address}}</p>
      </div>
      <van-icon name="arrow"
                class="arrow"
                @click="getAddressList" />
      <img src="../../assets/images/submitOrder_bg.png"
           alt
           class="submitOrder_bg">
    </div>
    <div class="list">
      <div class="info flex"
           v-for="(item, index) in data.cartList"
           :key="index">
        <img :src="item.product_img"
             alt
             class="product_img">
        <div class="flex_1">
          <div class="flex-between">
            <p class="title">{{item.goods_name}}</p>
            <span class="price">￥{{item.shop_price}}</span>
          </div>
          <!-- <p class="text">肿瘤个体化化疗药物分子检测</p> -->
          <p class="num">x{{item.goods_num}}</p>
        </div>
      </div>
      <div class="item flex-between">
        <div class="title">优惠券</div>
        <div class="right flex-center-y"
             @click="couponShow=true">
          <p>{{coupon == '' ? '选择优惠劵' : '-'+coupon.expression}}</p>
          <van-icon name="arrow"
                    class="arrow" />
        </div>
      </div>
      <div class="item flex-between">
        <div class="title">使用{{data.pay_points?data.pay_points:0}}积分抵扣{{data.pay_points?data.pay_points:0}}元</div>
        <div class="right flex-center-y">
          <van-switch v-model="pay_points" />
        </div>
      </div>
      <div class="item flex-between">
        <div class="title">使用{{data.user_money}}元宝抵扣{{data.user_money}}元</div>
        <div class="right flex-center-y">
          <van-switch v-model="user_money" />
        </div>
      </div>

      <div class="item flex-between">
        <div class="title">备注</div>
        <input type="text"
               placeholder="请输入要备注的内容"
               class="flex_1"
               v-model="user_note">
      </div>
      <div class="price_info">
        <p class="flex-between">
          <span>商品金额：</span>
          <span class="price">￥{{total}}</span>
        </p>
        <p class="flex-between">
          <span>运费：</span>
          <span class="price">+￥0.00</span>
        </p>
        <p class="flex-between">
          <span>优惠券抵扣：</span>
          <span class="price">-￥{{coupon !== '' ? coupon.expression?coupon.expression:'0.00' : '0.00' }}</span>
        </p>
        <p class="flex-between">
          <span>积分抵扣：</span>
          <span class="price">-￥{{user_money ? data.user_money?data.user_money:'0.00' : '0.00'}}</span>
        </p>
        <p class="flex-between">
          <span>个人累计折扣：</span>
          <span class="price">-￥{{pay_points ? data.pay_points?data.pay_points:'0.00' : '0.00'}}</span>
        </p>
      </div>
    </div>
    <div class="button_wrap flex-between">
      <p>
        需支付：
        <span>￥{{price}}</span>
      </p>
      <div class="submit flex-center"
           @click="submit">提交订单</div>
    </div>

    <!--优惠劵-->
    <van-popup v-model="couponShow"
               position="bottom">
      <div class="coupon_list">
        <div class="item flex-center-y"
             v-for="(item, index) in data.userCartCouponList"
             :key="index">
          <div class="left flex-center">
            <div class="num">{{item.expression}}</div>
            <div class="text">{{item.content}}</div>
          </div>
          <div class="center flex_1">
            <p class="title">{{item.name}}</p>
            <p class="time">有效期至 [{{item.end_time}}]</p>
          </div>
          <div class="right flex-center"
               @click="use(item)">
            <div class="button flex-center">去使用</div>
          </div>
        </div>
      </div>
    </van-popup>

    <!--地址-->
    <van-popup style="width:100%;height:100%"
               v-model="addressShow"
               position="right"
               :overlay="false"
               class="address_popup">
      <shouhuodizhi @tochange='changeAddress'></shouhuodizhi>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Switch, Popup, Dialog } from "vant";
import shouhuodizhi from '@/components/pages/shezhi/shouhuodizhi.vue'
import { submit_order, addOrder } from '@/axios/getData'
export default {
  components: {
    "van-icon": Icon,
    "van-switch": Switch,
    "van-popup": Popup,
    shouhuodizhi
  },
  data() {
    return {
      pay_points: false,
      user_money: false,
      couponShow: false,
      coupon: "",
      address: "",
      addressShow: false,
      data: {
        address: {},
        cartList: []
      },
      addressList: [],
      user_note: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    changeAddress(e) {
      this.data.address = e
      this.addressShow = false
      this.$forceUpdate()
    },
    async getData() {
      console.log(this.$route.query);
      if (this.$route.query.action == 'cart') {
        let res = await submit_order({ cart_ids: this.$route.query.ids, action: 'cart' })
        if (res.err) return
        this.data = res.data
        console.log(this.data);
        delete this.data.cartList.cart_ids;
        this.$forceUpdate()
      } else {
        let data = {
          goods_id: this.$route.query.goods_id,
          goods_num: this.$route.query.goods_num,
          item_id: this.$route.query.item_id,
          action: this.$route.query.action
        };
        let res = await submit_order(data)
        console.log(res);
        if (res.err) {
          Dialog.confirm({
            title: '确认',
            message: res.msg
          }).then(() => {
            // on confirm
            this.$router.push('/nowhapply')
          }).catch(() => {
            // on cancel
            this.$router.push('/')
          });
        }
        this.data = res.data
        console.log(this.data);
        delete this.data.cartList.cart_ids;
        // this.$post("cart/settlement", data).then(res => {
        //   this.data = res.data;
        // });
      }
    },
    // 使用优惠劵
    use(item) {
      this.coupon = item;
      this.couponShow = false;
    },
    // // 选择收货地址
    useAddress(item) {
      this.address = item;
      this.addressShow = false;
    },
    // // 获取地址列表
    getAddressList() {
      this.addressShow = true;
    },
    // // 提交订单
    async submit() {
      let data = {
        address_id: this.address == "" ? this.data.address.address_id : "",
        coupon_id: this.coupon == "" ? "" : this.coupon.id,
        pay_points: this.pay_points ? this.data.pay_points : "",
        user_money: this.user_money ? this.data.user_money : "",
        user_note: this.user_note,
        // action: this.$route.query.action,
        action: this.$route.query.action,
        item_id: "",
        goods_num: "",
        goods_id: "",
        pay_type: 1,
        cart_ids: this.$route.query.ids,
        prom_type: this.data.cartList[0].prom_type
      };
      if (this.$route.query.action == "") {
        data.cart_ids = this.data.cart_ids.toString();
      } else {
        data.goods_id = this.$route.query.goods_id;
        data.goods_num = this.$route.query.goods_num;
        data.item_id = this.$route.query.item_id;
      }
      let res = await addOrder(data)
      if (res.err) return
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener(
            "WeixinJSBridgeReady",
            onBridgeReady,
            false
          );
        } else if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
          document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
        }
      } else {
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
  },
  computed: {
    // 总价
    total() {
      let total = 0;
      Object.values(this.data.cartList).forEach(e => {
        total += Number(e.goods_price) * e.goods_num;
      })
      return total.toFixed(2);
    },
    // 成交价
    price() {
      let price = Number(this.total);
      if (this.user_money) price = price - this.data.user_money;
      if (this.pay_points) price = price - this.data.pay_points;
      if (this.coupon !== "") price = price - this.coupon.expression;
      return price.toFixed(2);
    }
  }
};
</script>

<style scoped lang="scss">
.user {
  padding: 30px 35px 35px 35px;
  background: #fff;
  position: relative;
  .address_icon {
    width: 50px;
  }
  .flex_1 {
    padding: 0 20px;
    overflow: hidden;
    .flex-between {
      font-size: 32px;
      margin-bottom: 12px;
      color: #000;
      font-weight: bold;
    }
    .address {
      line-height: 40px;
      color: #4c4c4c;
    }
  }
  .submitOrder_bg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
.list {
  padding: 0 35px;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 100px;
  .info {
    padding: 30px 0;
    border-bottom: 1px solid #ebebeb;
    .product_img {
      width: 125px;
      height: 125px;
      border-radius: 14px;
    }
    .flex_1 {
      overflow: hidden;
      padding-left: 20px;
    }
    .title {
      font-weight: bold;
      font-size: 32px;
    }
    .price {
      color: #dc2121;
      font-weight: bold;
      font-size: 32px;
    }
    .text {
      margin: 8px 0;
    }
    .num {
      text-align: right;
      color: #333;
    }
  }
  .item {
    height: 100px;
    font-size: 32px;
    border-bottom: 1px solid #ebebeb;
    input {
      text-align: right;
      padding-left: 50px;
    }
    .title {
      color: #000;
    }
    .right {
      font-size: 28px;
      color: #4e4e4e;
    }
  }
  .price_info {
    overflow: hidden;
    color: #020202;
    p {
      margin: 35px 0;
      .price {
        color: #ef1818;
        font-weight: bold;
      }
    }
  }
}
.button_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: #fff;
  box-shadow: 0 0 10px #eee;
  p {
    margin-left: 30px;
    color: #000;
    span {
      color: #ef1818;
      font-weight: bold;
      font-size: 36px;
    }
  }
  .submit {
    width: 270px;
    height: 100px;
    background: linear-gradient(to right, #21cce6, #2194e6);
    color: #fff;
    font-size: 36px;
  }
}
.coupon_list {
  padding: 30px;
  min-height: 50vh;
  .item {
    // background: url("src/assets/images/coupon_bg.png") no-repeat center center;
    background-size: 100% 100%;
    height: 200px;
    margin-top: 20px;
    .left {
      width: 180px;
      color: #fff;
      height: 100%;
      flex-direction: column;
      .num {
        font-size: 60px;
      }
      .text {
        font-size: 22px;
        margin-top: 4px;
      }
    }
    .center {
      overflow: hidden;
      padding: 0 20px;
      .title {
        font-size: 30px;
      }
      .time {
        color: #939393;
        margin-top: 30px;
        font-size: 22px;
      }
    }
    .right {
      width: 170px;
      .button {
        width: 120px;
        height: 40px;
        border-radius: 30px;
        border: 2px solid #2198e6;
        color: #2198e6;
      }
      .img {
        width: 140px;
      }
    }
  }
  .disabled {
    // background: url("src/assets/images/coupon_disabled.png") no-repeat center center;
    background-size: 100% 100%;
  }
}

.address_list {
  padding: 0 30px;
  background: #fff;
  width: 100vw;
  min-height: 50vh;
  box-sizing: border-box;
  .item {
    padding: 40px 0;
    border-bottom: 1px solid #eee;
    .left {
      overflow: hidden;
      padding-right: 100px;
      .column {
        font-size: 32px;
        color: #201b18;
        .phone {
          margin-left: 30px;
        }
        .default {
          font-size: 18px;
          padding: 2px 14px;
          border-radius: 30px;
          background: #2198e6;
          color: #fff;
          margin-left: 6px;
        }
      }
      .address {
        margin-top: 20px;
        color: #404040;
      }
    }
    .right {
      width: 170px;
      color: #2198e6;
    }
  }
}
</style>
