<template>
  <div id="box">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;margin-bottom:40pt;" fixed></van-nav-bar> -->
    <img :src="data.card" alt="">
    <div class="touxiang">
      <img :src="data.head_pic" alt="">
      <div>
        <p>我是 <span> {{data.nickname}}</span></p>
        <p>我为亿长寿代言</p>
      </div>
    </div>
    <img :src="data.img" alt="" class="erweima">
  </div>
</template>

<script>
import { erweima } from "@/axios/getData";
export default {
  data(){
    return{
      data:{}
    }
  },
  async created() {
    var res = await erweima();
    this.data = res.data
    console.log(res.data)
  },
  methods: {
    getData() {
      this.$post('user/erweima', {}).then((res) => {
        
      })
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
}
.erweima{
  position: absolute;
  width:100pt;
  height:100pt;
  top:67%;
  left:57%;
}
.touxiang{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: absolute;
  top:15%;
  left:20%;
  img{
    width:40pt;
    height:40pt;
    border:2pt solid #fff;
    border-radius: 50%;
  }
  div{
    margin-left: 15pt;
    font-size: 15pt;
    font-weight: 500;
    span{
      color:dodgerblue;
    }
  }
}
</style>