<template>
<div id="box">
  <img src="@/assets/images/形状1拷贝3@2x.png" alt="" style="z-index:-5;position:absolute;width:100%;height:100%;">
  <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
  <div class="signIn">
    <div class="rule flex-center" @click="show=true">签到规则</div>
    <div class="con">
      <p class="title">已连续签到<span> {{data.sign_count}} </span>天</p>
      <p class="text">连续签到7天可获得额外奖励</p>
      <div class="list flex-between">
        <div class="item flex-center" v-for="(item, index) in 7" :key="index" :class="index < data.sign_count ? 'success' : ''">
          <p class="num">{{++index}}</p>
          <img src="@/assets/images/signIn_icon1.png" alt="" v-if="index <= data.sign_count" style="height: 10px;width:50%;">
          <img src="@/assets/images/signIn_icon2.png" alt="" v-if="index > data.sign_count && index !== 7">
          <img src="@/assets/images/signIn_icon3.png" alt="" v-if="index === 7 && index !== data.sign_count">
        </div>
      </div>
      <p class="title" v-if="!data.sign_status">今天还没签到，赶快签到吧！</p>
      <div class="button flex-center" :class="data.sign_status ? 'dis' : ''" @click="signIn">马上签到</div>
      <p class="total">累计获得<span> {{data.sign_integral}} </span>积分</p>
    </div>
    <van-popup v-model="show" position="bottom">
      <div class="popup" v-html="rules">{{rules}}</div>
      <!-- <s:property :value="rules" escape="false" /> -->
    </van-popup>
  </div>
</div>
</template>
<script>
import util from '../../utils/utils.js';
import { Popup, Toast } from 'vant';
import { qiandao_guize, user_sign, sign_total } from '@/axios/getData';
export default {
  data() {
    return {
      data: {},
      rules: '',
      show: false
    }
  },
  components: {
    'van-popup': Popup
  },
  created() {
    this.getData()
    this.rule()
  },
  methods: {
    async getData() {
      var res = await sign_total()
      this.data = res.data
      console.log(res)
    },
    async rule() {
      var res = await qiandao_guize();
      console.log(res.data);
      this.rules = res.data.content;
    },
    signIn() {
      if (this.data.sign_status) return false
      let data = {
        date: util.format(new Date().getTime(), 'YYYY-MM-DD')
      }
      user_sign(data).then((res) => {
        console.log(res)
        Toast(res.data.msg)
        this.getData()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.signIn {
  background: url('src/assets/images/形状1拷贝3@2x.png') no-repeat top;
  background-size: 100% 100%;
  min-height: 100vh;
  position: relative;
  .rule {
    position: absolute;
    right: 0;
    width: 150px;
    height: 50px;
    color: #eb6e1a;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    background: linear-gradient(to right, #fff , #fff);
    top: 3%;
  }
  .con {
    background: #fff;
    width: 90%;
    box-sizing: border-box;
    padding: 40px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 30px;
    .title {
      text-align: center;
      color: #454545;
      font-size: 36px;
      margin-bottom: 20px;
      span {
        color: #eb6e1a;
        font-weight: bold
      }
    }
    .text {
      color: #82858a;
      text-align: center;
      font-size: 28px;
    }
    .list {
      margin: 40px 0;
      .item {
        width: 70px;
        height: 90px;
        background: #eceef3;
        border-radius: 14px;
        flex-direction: column;
        font-size: 32px;
        font-weight: bold;
        color: #454545;
        img {
          height: 30px;
          margin-top: 4px;
        }
      }
      .success {
        background: linear-gradient(to bottom, #eb6e1a , #ffc000);
        color: #fff;
      }
    }
    .button {
      width: 340px;
      background: linear-gradient(to right, #eb6e1a , #ffc000);
      color: #fff;
      height: 90px;
      border-radius: 60px;
      font-size: 38px;
      margin: 46px auto;
      box-shadow: 0 4px 16px #b3edf6;
    }
    .total {
      text-align: center;
      font-size: 30px;
      span {
        color: #ec7019;
        font-weight: bold;
      }
    }
     .dis {
      background: #b6b6b6;
      box-shadow: none
    }
  }
  .popup {
    padding: 50px 40px;
    min-height: 30vh
  }
}
</style>
