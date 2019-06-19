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
      <div class="mes">运费：¥{{freight}}元</div>
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
      <van-cell is-link
                @click="openSku">
        <template slot="title">
          <span class="custom-text title">地址</span>
          <span class="text">广东省深圳市</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text title">已选</span>
          <span class="text">套餐1</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text title">说明</span>
          <span class="text">广东省深圳市</span>
        </template>
      </van-cell>
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text title">服务</span>
          <span class="text flex_1 ellipsis">
            <span class="circle"></span>包邮
            <span class="circle"></span>由华云发货并提供售后
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
        <p class="time">{{item.add_time | date}}</p>
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
              <div class="num">¥{{item.expression}}</div>
              <div class="countnum">满{{item.condition}}元可用</div>
            </div>
            <div class="content">
              <h3>{{item.name}}</h3>
              <p>部分特殊商品不可使用</p>
            </div>
            <button v-if="item.ling_status==1" class="btn">领取</button>
            <button v-else disabled class="btn nobtn">已领取</button>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 底部按钮 -->
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o"
                                 text="收藏" />
      <van-goods-action-mini-btn info="5"
                                 icon="cart-o"
                                 text="客服" />
      <van-goods-action-mini-btn icon="shop-o"
                                 text="购物车" />
      <van-goods-action-big-btn @click="addCart"
                                text="加入购物车" />
      <van-goods-action-big-btn primary
                                text="参加乐拼" />
    </van-goods-action>

    <!--选择规格-->
    <van-popup v-model="showsku"
               position="bottom">
      <div class="popup">
        <div class="wrap">
          <div class="commodity flex">
            <img alt>
            <div class="middle flex flex_1">
              <p class="title">123</p>
              <div class="price">
                <p class="new">￥33</p>
                <p class="old">￥22</p>
              </div>
            </div>
            <van-icon name="cross"
                      class="cross"
                      @click="openSku" />
          </div>
          <div class="specification">
            <p class="title">332</p>
            <div class="list flex-wrap">
              <div class="item active">11</div>
            </div>
          </div>
          <div class="num flex-between cart">
            <p class="title">数量</p>
            <van-stepper class="flex" />
          </div>
          <div class="count">
            库存:720
          </div>
        </div>
        <div class="button flex-center">确定</div>
      </div>

    </van-popup>
  </div>
</template>
<script>
import {  Swipe, SwipeItem, Icon, Rate, Popup, Stepper, Toast, Cell, Tag, GoodsAction,
  GoodsActionBigBtn, Sku,
  GoodsActionMiniBtn} from "vant";
import { ajaxComment, couponList, addToCart, goodsinfo } from '@/axios/getData'
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
      showCoupons: false,
      showsku: false,
      couponList: [],
      collect: 0,
      goods_attr: 0,
      filter_spec: '',
      spec_goods_price: '',
      goods_images_list: '',
      goods_num: 0,
      address: {},//地址
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
    }
  },
  methods: {
    openCoupons() {
      this.showCoupons = !this.showCoupons
    },
    openSku() {
      this.showsku = !this.showsku
    },
    async addCart() {
      let res = addToCart({ goods_num })
    },
    async getGoods() {
      let goods_id = this.$route.query.goods_id
      let res = await goodsinfo({ goods_id })
      console.log(res);
      this.goods = res.data.goods
      this.comment = res.data.comment
      this.address = res.data.address
      this.goods = res.data.goods
      this.freight = res.data.freight
      this.goods_images_list = res.data.goods_images_list
    },
    async getcouponList() {
      let res = await couponList()
      console.log(res);
      this.couponList = res.data
    }
  },
  created() {
    this.getGoods()
    this.getcouponList()
  },

}
</script>
<style lang="scss" scoped>
@import "./details.scss";
</style>
