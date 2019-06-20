<template>
  <div v-if="showlist">
    <header>
      <img :src="list.banner.banner"
           alt="">
    </header>
    <div class="list">
      <router-link v-for="(item, index) in list.goods_list"
                   tag="div"
                   :key="index"
                   :to="'/details?goods_id='+item.goods_id"
                   class="item">
        <img :src="item.original_img"
             alt="">
        <div class="t">{{item.goods_name +' '+ item.goods_remark}}</div>
        <div class="info">
          <div class="pice">¥{{item.shop_price}}</div>
          <div class="del">¥{{item.market_price}}</div>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
import { goods_category } from '@/axios/getData.js'
export default {
  data() {
    return {
      list: {},
      showlist: false,
    }
  },
  methods: {
    async getdata(p = 1) {
      let res = await goods_category({ id: this.$route.query.id, p })
      console.log(res);
      this.list = res.data
      if (res.data.goods_list.length) this.showlist = true
    }
  },
  created() {
    this.getdata()
  },
}
</script>

<style lang="scss" scoped>
@import "./css/pharmacytype.scss";
</style>
