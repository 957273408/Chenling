<template>
  <div class="bindSettings">
    <div class="list">
      <div class="item flex-center-y">
        <div class="img"><img src="@/assets/images/s_phone.png" alt=""></div>
        <input type="text" placeholder="请输入新的手机号码"/>
      </div>
      <div class="item flex-center-y">
        <div class="img"><img src="@/assets/images/s_unlock.png" alt=""></div>
        <input type="text" placeholder="请输入短信验证码"/>
        <div class="code flex-center">获取验证码</div>
      </div>
      <div class="button flex-center">绑定</div>
    </div>
  </div>
</template>

<script>
// import { Toast } from 'vant'
export default {

}
//   data() {
//     return {
//       data: {
//         code: '',
//         mobile: ''
//       },
//       codeText: '获取验证码'
//     }
//   },
//   methods: {
//     getCode() {
//       if (!(/^1[3456789]\d{9}$/.test(this.data.mobile))) {
//         Toast('请输入正确的手机号码')
//         return false
//       } else if (this.codeText !== '获取验证码') {
//         return false
//       }
//       this.$post('user/smsSend', {mobile: this.data.mobile}).then((res) => {})
//       let index = 60
//       let clock = window.setInterval(() => {
//         this.codeText = index + 's'
//         index --
//         if (index < 0) {
//           window.clearInterval(clock)
//           this.codeText = '获取验证码'
//         }
//       }, 1000)
//     },
//     submit() {
//       this.$post('user/bandmobile', this.data).then((res) => {
//         Toast('绑定成功')
//         this.$router.go(-1)
//       })
//     }
//   }
// }
</script>

<style scoped lang="scss">
.list {
  padding: 80px 40px;
}
.item {
  height: 120px;
  border-bottom: 1px solid #ebebeb;
   font-size: 32px;
  img {
    width: 36px;
    margin-right: 20px;
  }
  input {
    flex: 1;
    &::-webkit-input-placeholder{
      color:#B7B7BB;
    }
  }
  .code {
    width: 170px;
    height: 50px;
    background: #FF4C23;
    font-size: 22px;
    border-radius: 60px;
    color: #fff;
  }
  .gary {
    background: #c6c6c6;
  }
}
.button {
  margin: 50px auto;
  background: linear-gradient(to right, #FF462D , #FF9E3F);
  color: #fff;
  height: 90px;
  border-radius: 60px;
  font-size: 38px;
  box-shadow: 0 4px 16px #b3edf6;
}
</style>