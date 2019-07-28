<template>
  <div id="box">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <router-link to="/user_info" class="head flex-between">
      <div class="left flex-center-y" ><!--  @click="$router.push({path:'/user_info'})"  -->
        <img :src="data.head_pic" alt="">
        <p>{{data.nickname}}</p>
      </div>
      <van-icon name="arrow" class="arrow" />
    </router-link>
    <div class="wrap">
      <router-link :to="To" class="item flex-between">
        <div class="title">实名认证</div>
        <div class="right flex-center-y">
          <!-- <span>未认证</span> -->
          <span v-if="data.is_name_auth == 0">未认证</span>
          <span v-if="data.is_name_auth == 1">已认证</span>
        <van-icon name="arrow" class="arrow" /></div>
      </router-link>
      <router-link to="/bankCard" class="item flex-between">
        <div class="title">银行卡</div>
        <div class="right flex-center-y"><van-icon name="arrow" class="arrow"/></div>
      </router-link>
	  <!-- <router-link to="" class="item flex-between">
        <div class="title">支付密码</div>
        <div class="right flex-center-y"><van-icon name="arrow" class="arrow" /></div>
      </router-link> -->
      <router-link to="/setPhonePwd?isshow=0" class="item flex-between" >
        <div class="title">修改手机号</div>
        <div class="right flex-center-y"><van-icon name="arrow" class="arrow" /></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Icon, NavBar } from 'vant';
import { user_setting } from "@/axios/getData"
export default {
  data() {
    return {
      data: {},
      To:"/setPhonePwd?isshow=1"
    }
  },
  components: {
    'van-icon': Icon,
    vanNavBar:NavBar
  },
  created() {
    this.getData();

  },
  methods: {
    async getData() {
      var res= await user_setting()
      console.log(res.data.setting);
      this.data = res.data.setting;
      if(this.data.is_name_auth){
        // this.To=""
      }
      console.log(this.data,8888)
    }
  }
}
</script>

<style scoped lang="scss">
.head {
  background: #fff;
  margin-top:40px;
  padding: 30px;
  .left {
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
    }
    p {
      margin-left: 20px;
      font-size: 32px;
	  color:#000;
    }
  }
}
.arrow {
  color: #8b8682
}
.wrap {
  margin-top: 25px;
  background: #fff;
  padding: 0 30px;
  .item {
    height: 100px;
    border-bottom: 1px solid #ebebeb;
    &:last-child {
      border-bottom: 0;
    }
    .title {
      font-size: 32px;
      color: #4f4f4f;
    }
    .right {
      span {
        color: #959595;
        font-size: 26px;
        margin-right: 6px;
      }
    }
  }
}
.loginOut {
  height: 100px;
  position: fixed;
  background: #fff;
  width: 100%;
  bottom: 0;
  color: #ee241e;
  font-size: 34px;
  box-shadow: 0 0 14px #eee;
}

// #box /deep/ .van-nav-bar {
// 	.van-icon{
// 		color: #999 !important;
// 	}
// 	.van-nav-bar__text{
// 		color: #999 !important;
// 	}
// }
</style>
