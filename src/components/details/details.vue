<template>
  <div style="padding-bottom:50px">
    <div class="details_swipe">
      <van-swipe :autoplay="5000">
        <van-swipe-item>
          <img src="@/assets/images/banner.png"
               alt>
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/images/banner.png"
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
        欧姆龙高精准电子血压计家用上臂式全自动
        血压测量仪HEM-7132
      </p>
      <div class="flex-between">
        <div class="price">
          <span class="new">￥350.00</span>
          <span class="old">原价：399.00</span>
        </div>
      </div>
      <div class="mes">运费：¥0元</div>
    </div>
    <div class="border"></div>

    <!-- 参数选择 -->
    <div class="column">
      <!-- <div class="item flex-between">
        <div class="title">地址</div>
        <div class="text flex_1 ellipsis">广东省 深圳市</div>
        <van-icon name="arrow" class="arrow"/>
      </div>-->
      <van-cell is-link>
        <template slot="title">
          <span class="custom-text title"
                style="margin-right:0.533333rem">领劵</span>
          <van-tag color="rgba(249, 39, 12, 1)"
                   plain>满399减20</van-tag>
        </template>
      </van-cell>
      <van-cell is-link>
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
    <!-- <div class="evaluate"
         v-if="data.comment.list.length">
      <div class="head flex-between">
        <div class="title">商品评价({{data.comment.count}})</div>
        <router-link to="evaluateList"
                     class="good flex-center-y">
          <p>
            好评度
            <span>{{data.comment.praise*100}}%</span>
          </p>
          <van-icon name="arrow"
                    class="arrow" />
        </router-link>
      </div>
      <div class="item"
           v-for="(item, index) in data.comment.list"
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
    </div> -->

    <!-- 商品详情 -->
    <div class="shop_details"></div>

    <!-- 底部按钮 -->
    <van-goods-action >
      <van-goods-action-mini-btn icon="chat-o"
                                 text="收藏" />
      <van-goods-action-mini-btn info="5"
                                 icon="cart-o"
                                 text="客服" />
      <van-goods-action-mini-btn icon="shop-o"
                                 text="购物车" />
      <van-goods-action-big-btn text="加入购物车" />
      <van-goods-action-big-btn primary
                                text="参加乐拼" />
    </van-goods-action>
  </div>
</template>
<script>
import {  Swipe, SwipeItem, Icon, Rate, Popup, Stepper, Toast, Cell, Tag, GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn} from "vant";
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

  }
}
</script>
<style lang="scss" scoped>
@import "./details.scss";
</style>
