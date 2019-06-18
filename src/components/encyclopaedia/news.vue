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
        goods_content: "<p>重修的你不是</p><p><br/></p>",
        goods_name: "sdhjsd",
        goods_remark: "十大科技",
        is_free_shipping: 0,
        market_price: "0.00",
        original_img: "http://ycs.rujiezhineng.net/public/upload/goods/2019/05-06/1c814a24013969734379b2935846cc8c.jpg",
        shop_price: null,
        shuoming: null,
        update_time: "1970-01-01",
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



