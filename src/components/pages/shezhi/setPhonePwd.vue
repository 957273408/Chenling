<template>
  <div class="bindSettings">
    <div class="list" v-if="this.$route.query.isshow==0">
      <div class="item flex-center-y img1">
        <div><img src="@/assets/images/s_phone.png" alt=""></div>
        <input type="text" placeholder="请输入新的手机号码" v-model="data.mobile"/>
      </div>
      <div class="item flex-center-y img1">
        <div><img src="@/assets/images/s_unlock.png" alt=""></div>
        <input type="text" placeholder="请输入短信验证码"  v-model="data.code"/>
        <div class="code flex-center" :class="codeText !== '获取验证码' ? 'gary' : ''" @click="getCode">{{codeText}}</div>
      </div>
      <div class="button flex-center"  @click="submit">绑定</div>
    </div>
    <div class="list" v-if="this.$route.query.isshow==1">
      <div class="item flex-center-y img2">
        <div class="img">真实姓名</div>
        <input type="text" placeholder="请输入您的真实姓名" v-model="data.mobile"/>
      </div>
      <div class="item flex-center-y img2">
        <div class="img">身份证号码</div>
        <input type="text" placeholder="请输入您的身份证号码"  v-model="data.code"/>
      </div>
      <div class="button flex-center"  @click="submit_shiming">提交</div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { smsSend, bandmobile, shiming } from "@/axios/getData";
export default {
  data() {
    return {
      data: {
        code: '',
        mobile: ''
      },
      codeText: '获取验证码',
      code:"",
    }
  },
  methods: {
    getCode() {
      if (!(/^1[3456789]\d{9}$/.test(this.data.mobile))) {
        Toast('请输入正确的手机号码')
        return false
      } else if (this.codeText !== '获取验证码') {
        return false
      }
      smsSend({mobile: this.data.mobile}).then((res) => {
        Toast(res.data.msg)
      })
      let index = 60
      let clock = window.setInterval(() => {
        this.codeText = index + 's'
        index --
        if (index < 0) {
          window.clearInterval(clock)
          this.codeText = '获取验证码'
        }
      }, 1000)
    },
    submit() {
      // if(this.data.code&&this.data.mobile){
        bandmobile(this.data).then((res) => {
          Toast(res.data.msg)
          if(res.code==200){
            Toast(res.data.msg)
            this.$router.go(-1);
          }
        })
      // }else if(!(/^1[3456789]\d{9}$/.test(this.data.mobile))){
      //   Toast("请填写正确的手机号码");
      // }else{
      //   Toast("请填写验证码")
      // }
    },
    submit_shiming(){
      if(this.data.code&&this.data.mobile){
        shiming({realname:this.data.mobile,idcard:this.data.code}).then((res)=>{
          Toast("数据已提交");
          this.$router.go(-1);
        })
      }
    }
  }
}
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
  .img1{
    input {
      flex: 1;
      padding:0 15pt;
      &::-webkit-input-placeholder{
        padding-left:30pt; 
        color:#B7B7BB;
      }
    }
  }
  input {
    flex: 1;
    padding:0 15pt;
    &::-webkit-input-placeholder{
      // text-align: right;
      color:#B7B7BB;
    }
  }
  .code {
    width: 170px;
    height: 50px;
    background: #FF4C23;
    font-size: 18px;
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
}
.img2{
    input {
    // flex: 1;
    // padding:0 15pt;
    &::-webkit-input-placeholder{
      text-align: right;
      color:#B7B7BB;
    }
  }
}
</style>