<template>
  <div style="padding-bottom:50px">
    <div class="details_swipe">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(item) in goods_images_list"
                        :key="item.image_id">
          <img :src="item.image_url"
               alt>
        </van-swipe-item>

      </van-swipe>
      <div class="info">
        <div class="pice">
          <div>
            <p>当前折扣7折，乐拼总金额3500</p>
            <span>距离下一级还差500</span>
          </div>
        </div>
        <div class="time">
          <div>
            <p>35小时23分22秒</p>
            <span>距离结束</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 热销信息 -->
    <div class="info">
      <p class="title">
        {{goods.goods_name}}
      </p>
      <div class="flex-between">
        <div class="price">
          <span class="new">￥{{goods.shop_price}}</span>
          <span class="old">原价：{{goods.market_price}}</span>
        </div>
      </div>
      <div class="mes">运费：¥{{goods.is_free_shipping==1?'0':freight}}元</div>
    </div>
    <div class="border"></div>

    <!-- 参数选择 -->
    <div class="column">
      <!-- <div class="item flex-between">
        <div class="title">地址</div>
        <div class="text flex_1 ellipsis">广东省 深圳市</div>
        <van-icon name="arrow" class="arrow"/>
      </div>-->
      <van-cell is-link
                @click="openCoupons">
        <template slot="title">
          <span class="custom-text title"
                style="margin-right:0.533333rem">领劵</span>
          <van-tag color="rgba(249, 39, 12, 1)"
                   plain>满399减20</van-tag>
        </template>
      </van-cell>
      <van-cell>
        <template slot="title">
          <span class="custom-text title">地址</span>
          <span class="text">{{address}}</span>
        </template>
      </van-cell>
      <van-cell is-link
                @click="showsku=true">
        <template slot="title">
          <span class="custom-text title">已选</span>
          <span class="text">{{sku_name}}</span>
        </template>
      </van-cell>
      <van-cell>
        <template slot="title">
          <span class="custom-text title">说明</span>
          <span class="text">广东省深圳市</span>
        </template>
      </van-cell>
      <van-cell>
        <template slot="title">
          <span class="custom-text title">服务</span>
          <span class="text flex_1 ellipsis">
            <span class="circle"
                  v-show="goods.is_free_shipping==1"></span>包邮
            <span class="circle"></span>由亿长寿发货并提供售后
          </span>
        </template>
      </van-cell>

    </div>

    <div class="border"></div>

    <!-- 评论 -->
    <div class="evaluate"
         v-if="comment.list.length">
      <div class="head flex-between">
        <div class="title">商品评价({{comment.count}})</div>
        <router-link to="evaluateList"
                     class="good flex-center-y">
          <p>
            好评度
            <span>{{comment.praise*100}}%</span>
          </p>
          <van-icon name="arrow"
                    class="arrow" />
        </router-link>
      </div>
      <div class="item"
           v-for="(item, index) in comment.list"
           :key="index">
        <div class="user_info flex-between">
          <div class="user flex-center-y">
            <div class="portrait">
              <img :src="item.head_pic"
                   alt>
            </div>
            <p class="name">{{item.username}}</p>
          </div>
          <div class="star">
            <van-rate v-model="item.goods_rank"
                      color="#21b2e6"
                      readonly />
          </div>
        </div>
        <div class="evaluate_text">{{item.content}}</div>
        <div class="album flex-between">
          <img v-for="(val, key) in item.imgs"
               :key="key"
               :src="val"
               alt>
        </div>
        <p class="time">{{item.add_time}}</p>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="shop_details"
         v-html="goods.goods_content"></div>

    <!-- 优惠详细 -->
    <van-popup position="bottom"
               v-model="showCoupons">
      <div class="coupons">
        <div class="head_title">
          优惠详情
          <van-icon name="cross"
                    @click="openCoupons" />
        </div>
        <div class="coupons_list">
          <div class="coupon_item"
               v-for="(item, index) in couponList"
               :key="index">
            <div class="price">
              <div class="num">¥{{item.money}}</div>
              <div class="countnum">满{{item.condition}}元可用</div>
            </div>
            <div class="content">
              <h3>{{item.name}}</h3>
              <p>部分特殊商品不可使用</p>
            </div>
            <button v-if="item.ling_status==0"
                    class="btn"
                    @click="getCoupon(item)">领取</button>
            <button v-else
                    disabled
                    class="btn nobtn">已领取</button>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 底部按钮 -->
    <van-goods-action>
      <van-goods-action-mini-btn @click="addCollect"
                                 :icon="iscollect?'star':'star-o'"
                                 text="收藏" />
      <van-goods-action-mini-btn icon="comment-o"
                                 text="客服" />
      <van-goods-action-mini-btn @click="$router.push('/cart')"
                                 icon="shopping-cart-o"
                                 text="购物车" />
      <van-goods-action-big-btn @click="addCart"
                                text="加入购物车" />
      <van-goods-action-big-btn primary
                                @click="showsku=true;buy_now=true"
                                :text="this.$route.query.prom_type==6?'参加乐拼':'直接购买'" />
    </van-goods-action>

    <!--选择规格-->
    <!--addTohapply-->
    <van-popup v-model="showsku"
               position="bottom">
      <div class="popup">
        <div class="wrap">
          <div class="commodity flex">
            <img :src='goods.original_img'
                 alt>
            <div class="middle flex flex_1">
              <p class="title">{{goods.goods_name}}</p>
              <div class="price">
                <p class="new">￥{{price}}</p>
                <p class="old">￥{{goods.market_price}}</p>
              </div>
            </div>
            <van-icon name="cross"
                      class="cross"
                      @click="showsku=false;buy_now=false" />
          </div>
          <div class="specification"
               v-for="(item, index) in filter_spec"
               :key="index">
            <p class="title">{{index}}</p>
            <div class="list flex-wrap">
              <div :class="e.active?'item active':'item' "
                   v-for="(e, i) in item"
                   :key="i"
                   @click="changeColor(e,i,index)">{{e.item}}</div>
            </div>
          </div>
          <div class="num flex-between cart">
            <p class="title">数量</p>
            <van-stepper v-model="num"
                         :max='store_count'
                         class="flex" />
          </div>
          <div class="count">
            库存:{{store_count}}
          </div>
        </div>
        <div class="button flex-center"
             @click="openSku">确定</div>
      </div>

    </van-popup>
  </div>
</template>
<script>
import {  Swipe, SwipeItem, Icon, Rate, Popup, Stepper, Toast, Cell, Tag, GoodsAction,
  GoodsActionBigBtn, Sku,
  GoodsActionMiniBtn} from "vant";
import { ajaxComment, couponList, addToCart, goodsinfo, add_shoucang, get_coupon } from '@/axios/getData'
export default {
  components: {
    "van-icon": Icon,
    "van-swipe": Swipe,
    "van-rate": Rate,
    "van-cell": Cell,
    "van-popup": Popup,
    "van-stepper": Stepper,
    "van-swipe-item": SwipeItem,
    'van-tag': Tag,
    'vanGoodsAction': GoodsAction,
    'vanGoodsActionBigBtn': GoodsActionBigBtn,
    'vanGoodsActionMiniBtn': GoodsActionMiniBtn,
    vanSku: Sku

  },
  data() {
    return {
      buy_now: false,  //点击直接购买 跳出选规格 => 确定 => 跳转结算页面
      pay_type: "直接购买",  // 购买方式  直接购买或者参加乐拼
      num: 0,
      store_count: 1000,
      price: 0,
      showCoupons: false,
      showsku: false,
      sku_name: '',
      item_id: null,
      couponList: [],
      iscollect: false,
      goods_attr: 0,
      filter_spec: '',
      goods_images_list: '',
      goods_num: 0,
      address: '',//地址
      spec_goods_price: [],
      comment: {
        count: 1,
        list: [],
        praise: 0,
      },//评论
      filter_spec: [],
      freight: 0,
      goods: {
        goods_content: ''
      },
      isgroup_: 0
    }
  },
  methods: {
    async getCoupon({ id }) {
      let res = await get_coupon({ id, user_id: this.$store.state.userInfo.user_id })
      if (res.err) return
    },
    changeColor({ item }, ind, key) {

      this.filter_spec[key].forEach((e, index) => {
        e.active = (index == ind)
      })
      let arr = []
      Object.keys(this.filter_spec).forEach(e => {
        this.filter_spec[e].forEach(k => {
          if (k.active) arr.push(k)
        })
      })
      arr.sort((a, b) => a.item_id - b.item_id)
      let item_id = arr.reduce((id, { item_id }) => {
        return id = id + '_' + item_id
      }, '').substring(1)
      this.item_id = item_id;
      // this.addCart()***********************************************
      let item_name = arr.reduce((name, { item }) => {
        return name = name + '-' + item
      }, '')
      this.$forceUpdate()
      try {
        this.sku_name = item_name
        this.item_id = this.spec_goods_price[item_id].item_id
        this.store_count = this.spec_goods_price[item_id].store_count
        this.price = this.spec_goods_price[item_id].price
      } catch (e) { }
    },


    async addCollect() {
      let res = await add_shoucang({ goods_id: Number(this.$route.query.goods_id), user_id: this.$store.state.userInfo.user_id })
      if (res.err) return
      this.iscollect = !this.iscollect
      this.$toast(res.data.msg)
    },
    openCoupons() {
      this.showCoupons = !this.showCoupons
    },
    async openSku() {
      this.showsku = !this.showsku

      /*没有商品规格*/
      if ((this.buy_now && this.item_id && this.num) || this.buy_now && this.filter_spec.length == 0) {
        console.log(this.spec_goods_price);
        this.$router.push({ path: '/uporder', query: { islq: this.$route.query.islq, action: "buy_now", goods_id: Number(this.$route.query.goods_id), goods_num: this.num, item_id: this.spec_goods_price[0].item_id, isgroup: this.isgroup_ } });
        return;
      }
      console.log(this.filter_spec.length == 0)
      console.log(this.filter_spec)
      if (this.filter_spec.length == 0 && this.num) {
        var itemid = this.spec_goods_price[0].item_id
        let res = await addToCart({ goods_id: Number(this.$route.query.goods_id), goods_num: this.num, item_id: itemid, isgroup: this.isgroup_ })
        if (res.err) {          console.log(res);
          return        }
        this.$toast(res.data)
        this.$router.push({ path: '/cart', query: { isgroup: this.isgroup_ } })
        return;
      }

      if ((this.spec_goods_price.length == 0 || this.item_id) && this.num) {
        this.addCart();
        this.$router.push({ path: '/cart', query: { goods_id: Number(this.$route.query.goods_id), goods_num: this.num, item_id: this.item_id, isgroup: this.isgroup_ } })
      }
    },
    async addCart(aa) {
      if (this.filter_spec.length == 0) {
        this.showsku = true;
        return;
      }
      console.log(this.item_id, this.num)
      console.log(this.isgroup_)
      if (this.item_id && this.num) {
        // console.log(Number(this.$route.query.goods_id),this.num,this.spec_goods_price[this.item_id] ,isgroup_)  //this.spec_goods_price[this.item_id]
        let res = await addToCart({ goods_id: Number(this.$route.query.goods_id), goods_num: this.num, item_id: this.item_id, isgroup: this.isgroup_ })
        if (res.err) {          console.log(res);
          return        }
        this.$toast(res.data)
        this.$router.push({ path: '/cart', query: { isgroup: this.isgroup_ } })
      } else {
        this.openSku()
      }
    },
    addTohapply() {
      this.$router.push({
        path: '/uporder',
        query: {
          action: "",
          goods_id: this.$route.query.goods_id,
          goods_num: this.num,
          item_id: this.item_id,
          // cart_ids:
        }
      })
    },
    async getGoods() {
      let goods_id = this.$route.query.goods_id
      let res = await goodsinfo({ goods_id })
      console.log(res.data, 11111)
      if (res.err) return
      console.log(res, 33333);
      this.goods = res.data.goods
      this.comment = res.data.comment
      this.address = res.data.address
      this.goods = res.data.goods
      this.freight = res.data.freight
      this.goods_images_list = res.data.goods_images_list
      this.iscollect = (res.data.collect != 0)
      this.filter_spec = res.data.filter_spec
      this.price = res.data.goods.shop_price
      this.spec_goods_price = res.data.spec_goods_price
      // this.getcouponList(res.data.coupon)
      // console.log(this.spec_goods_price)
    }
    // getcouponList(coupon) {
    //     this.couponList = coupon.reduce((arr, { coupon }) => {
    //       return arr.concat(coupon)
    //     }, [])
    // }
  },
  created() {
    if (this.$route.query.prom_type == 6) {
      this.isgroup_ = 6
    } else {
      this.isgroup_ = 0
    }
    this.$route.query.prom_type == 6 ? this.pay_type = "参加乐拼" : ""
    this.getGoods()
    // this.getcouponList()
  },
}
</script>
<style lang="scss" scoped>
@import "./details.scss";
</style>
