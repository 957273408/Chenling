<template>
  <div class="news">
    <header>
      <div class="title">{{info.goods_name}}</div>
      <div class="time">
        发布时间：{{info.update_time}} 阅读：{{info.reading_sum}}
      </div>
    </header>
    <img :src="info.original_img"
         alt="">
    <div class="contaner"
         v-html="info.goods_content"></div>
  </div>
</template>

<script>
import { getHealthyinfo } from '@/axios/getData.js';
export default {
  data() {
    return {
      info: {
        goods_content: "",
        goods_name: "",
        goods_remark: "",
        is_free_shipping: 0,
        market_price: "",
        original_img: "",
        shop_price: null,
        shuoming: null,
        update_time: "",
      }
    }
  },
  async mounted() {
    let id = this.$route.query.id
    let res = await getHealthyinfo({ article_id: id })
    this.info = res.data.health
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.news {
  padding: 0 30px;
}
header {
  padding: 26px 0;
  border-bottom: 2px solid #e5e5e5;
  margin-bottom: 30px;
  .title {
    @include sc(36px, #232323);
    line-height: 38px;
    margin-top: 25px;
  }
  .time {
    @include sc(26px, #676767);
    line-height: 38px;
    margin-top: 25px;
  }
}
img {
  margin: auto;
  width: 525px;
  height: 320px;
  border-radius: 12px;
}
.contaner {
  padding: 30px;
}
</style>



