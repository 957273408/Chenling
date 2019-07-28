<template>
  <div class="bindSettings">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <div class="list">    
      <div class="item flex-center-y">
        <div class="title">选择银行：</div>
         <input type="text" placeholder="点击选择" v-model="data.bankname" readonly @click="show = true">
        <van-icon name="arrow" class="arrow" />
      </div>
      
      <div class="item flex-center-y">
        <div class="title">银行卡号：</div>
         <input type="text" placeholder="请输入银行卡号" v-model="data.banknum">
      </div>
      <div class="item flex-center-y">
        <div class="title">确认卡号：</div>
        <input type="text" placeholder="请再次输入银行卡号" v-model="data.bankname2">
      </div>
      <!-- <div class="item flex-center-y">
        <div class="title">开户所在地：</div>
         <input type="text" placeholder="点击选择" readonly v-model="data.place">
         <van-icon name="arrow" class="arrow" />
      </div> -->

    <div class="item flex-center-y">
      <div class="title">开户所在地：</div>
      <input type="text" placeholder="点击选择" readonly v-model="data.place"  @click="show1=true">
      <van-icon name="arrow" class="arrow"/>
    </div>

      <div class="item flex-center-y">
        <div class="title">开户行：</div>
        <input type="text" placeholder="请输入开户支行" v-model="data.bankplace">
      </div>
      <div class="button flex-center" @click="submit()">添加</div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" show-toolbar  @confirm="onConfirm" @cancel="show=false"/>
    </van-popup>
    <van-popup v-model="show1" position="bottom">
      <van-area :area-list="site" @cancel="show1=false" @confirm="changeAddress"/>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Picker, Popup, Toast, Area, NavBar } from 'vant';
import util from '../../utils/utils.js'
import { bankadd, delBank } from '@/axios/getData'
export default {
  components: {
    'van-icon': Icon,
    'van-picker': Picker,
    'van-popup': Popup,
    "van-area": Area,
    vanNavBar:NavBar
  },
  data() {
    return {
      show: false,  // 选择银行
      show1:false,  // 选择所在地
      columns: [
        {
          text: '工商银行'
        },
        {
          text: '建设银行'
        },
        {
          text: '中国银行'
        },
        {
          text: '交通银行'
        },
        {
          text: '农业银行'
        },
        {
          text: '招商银行'
        },
        {
          text: '平安银行'
        },
        {
          text: '浦发银行'
        },
        {
          text: '邮政储蓄银行'
        }
      ],
      data: {
        banknum: '',
        bankname2: '',
        bankname:"",
        bankplace:"",
        place:""
      },
      Address:"",
      site: util.site,
    }
  },
  created(){
  },
  methods: {
    async submit() {
      var id=this.$route.query.id;
      if(this.data.bankname&&this.data.bankname2&&this.data.banknum&&this.data.bankplace&&this.data.place){
        if(this.data.bankname2==this.data.banknum){
          this.data.id=id;
          console.log(555)
          await bankadd(this.data).then((res)=>{
            this.$router.go(-1);
          })
        }else{
          Toast("两次输入的卡号必须相同");
        }
      }
    },
    onConfirm(picker, value, index) {
      this.data.bankname=this.columns[value].text;
      this.show=false;
    },
    changeAddress(val) {
      this.data.place=val[0].name+" "+val[1].name+" "+val[2].name;
      this.show1 = false
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  padding: 30px 40px;
}
.item {
  height: 100px;
  border-bottom: 1px solid #ebebeb;
  font-size: 32px;
  .title {
    width: 200px;;
  }
  input {
    flex: 1;
  }
  .code {
    width: 170px;
    height: 50px;
    background: linear-gradient(to right, #21cce6 , #2194e6);
    font-size: 22px;
    border-radius: 60px;
    color: #fff;
  }
  .arrow {
    color: #afafaf;
  }
}
.button {
  margin: 40px auto;
  background: linear-gradient(to right, #FF462D , #FF9E3F);
  color: #fff;
  height: 90px;
  border-radius: 60px;
  font-size: 38px;
  box-shadow: 0 4px 16px #b3edf6;
}
.disabled {
  background: #eee;
  color: #333;
  box-shadow: 0 4px 16px #eee;
}
input::-webkit-input-placeholder{
  color:#999999;
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
