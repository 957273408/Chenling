<template>
  <div>
    <div class="banner">
      <img :src="img_src"
           alt="">
    </div>
    <div class="list">
      <van-list v-model="loading"
                :finished="finished"
                :offset="offset"
                @load="onLoad">
        <div class="item flex-center-y"
             v-for="(item,index) in data"
             :key="index">
          <div class="info flex flex_1">
            <img :src="item.good_img"
                 alt=""
                 class="item">
            <div class="introduce flex_1">
              <p class="title ellipsis">{{item.goods_name}}</p>
              <div class="handle flex-between">
                <p class="price">￥{{item.shop_price}} <span>¥{{item.market_price}}</span></p>
                <button @click="$router.push({path:'/details',query:{prom_type:item.prom_type,goods_id:item.goods_id,islq:true}})">去乐拼</button>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { le_index } from "@/axios/getData"
import { List } from "vant"
export default {
  data() {
    return {
      img_src: "",
      page: 1,
      data: [],
      loading: false,
      finished: false,
      offset: 30
    }
  },
  components: {
    'van-list': List
  },
  created() {
    le_index({ page: this.page }).then((res) => {
      this.img_src = res.data.advert[0].ad_code;
    })
  },
  methods: {
    async onLoad() {
      if (this.loading) {
        le_index({ page: this.page }).then((res) => {
          this.data = this.data.concat(res.data.group);
          this.loading = false;
          console.log(this.data.length)
          this.page += 1;
          if (this.data.length == res.data.count) {
            this.finished = true;
          }
        })

      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./css/nowhappy.scss";
</style>
