<template>
  <div>
    <router-link to="" class="head flex-between">
      <div class="left flex-center-y">
        <img src="@/assets/images/522.png" alt="">
        <p>林小七</p>
      </div>
      <van-icon name="arrow" class="arrow" />
    </router-link>
    <div class="wrap">
      <router-link to="" class="item flex-between">
        <div class="title">实名认证</div>
        <div class="right flex-center-y">
          <span>未认证</span>
          <!-- <span v-if="data.is_name_auth == 1">认证中</span>
          <span v-if="data.is_name_auth == 2">已认证</span>
          <span v-if="data.is_name_auth == 3">认证失败</span> -->
        <van-icon name="arrow" class="arrow" /></div>
      </router-link>
      <router-link to="" class="item flex-between">
        <div class="title">银行卡</div>
        <div class="right flex-center-y"><van-icon name="arrow" class="arrow"/></div>
      </router-link>
	  <router-link to="" class="item flex-between">
        <div class="title">支付密码</div>
        <div class="right flex-center-y"><van-icon name="arrow" class="arrow" /></div>
      </router-link>
      <router-link to="" class="item flex-between">
        <div class="title">修改手机号</div>
        <div class="right flex-center-y"><van-icon name="arrow" class="arrow" /></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  components: {
    'van-icon': Icon
  },
}
//   data() {
//     return {
//       data: {}
//     }
//   },
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData() {
//       this.$post('user/userinfo', {}, false).then((res) => {
//          this.data = res.data
//       })
//     }
//   }
// }
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
</style>
