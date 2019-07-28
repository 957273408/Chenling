<template>
  <div id="box">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <div class="wrap">
      <div class="item flex-between head">
        <div class="title">头像</div>
        <van-uploader :after-read="onReads" accept="image/*" >
          <img :src="data.head_pic" alt="" class="upload img">
        </van-uploader>
      </div>
      <div class="item flex-between" @click="popup('nickname', data.nickname)">
        <div class="title">用户名</div>
        <div class="right flex-center-y"><span>{{data.nickname}}</span><van-icon name="arrow" class="arrow" /></div>
      </div>
      <div class="item flex-between" @click="sexShow = true">
        <div class="title">性别</div>
        <div class="right flex-center-y"><span>{{data.sex == 1 ? '男' : '女'}}</span><van-icon name="arrow" class="arrow" /></div>
      </div>
      <div class="item flex-between" @click="timeShow = true">
        <div class="title">生日</div>
        <div class="right flex-center-y"><span>{{data.birthday}}</span><van-icon name="arrow" class="arrow" /></div>
      </div>
      <div class="item flex-between" @click="popup('mobile', data.mobile)">
        <div class="title">手机</div>
        <div class="right flex-center-y"><span>{{data.mobile}}</span><van-icon name="arrow" class="arrow" /></div>
      </div>
      <div class="item flex-between" @click="popup('email', data.email)">
        <div class="title">邮箱</div>
        <div class="right flex-center-y"><span>{{data.email}}</span><van-icon name="arrow" class="arrow" /></div>
      </div>
    </div>

    <!-- 基础修改 -->
    <van-popup v-model="show" position="bottom">
      <div class="popup" style="width:100%">
        <van-icon name="cross" @click="show=false" class="cross"/>
        <input type="text" v-model="mod" placeholder="请输入正确的格式">
        <div class="button flex-center" @click="submit">确认修改</div>
      </div>
    </van-popup>

    <!-- 修改性别 -->
    <van-actionsheet v-model="sexShow" :actions="actions" cancel-text="取消" @select="onSelect"  style="width:100%"/>

    <!-- 修改生日 -->
    <van-popup v-model="timeShow" position="bottom"  style="width:100%">
      <van-datetime-picker v-model="currentDate" type="date" :min-date="new Date(1900, 1, 1)" :max-date="new Date()" @cancel="timeShow=false" @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Popup, Actionsheet, DatetimePicker, Uploader, NavBar } from 'vant';
import { xiugaiziliao, userinfo, upload} from "@/axios/getData"
export default {
  components: {
    'van-icon': Icon,
    'van-popup': Popup,
    'van-actionsheet': Actionsheet,
    'van-datetime-picker': DatetimePicker,
    'van-uploader': Uploader,
    vanNavBar:NavBar
  },
  data() {
    return {
      show: false,
      mod: '',
      attribute: '',
      sexShow: false,
      timeShow: false,
      user:{
        photo:null
      },
      actions: [
        {
          name: '男',
          sex: 1
        },
        {
          name: '女',
          sex: 2
        },
      ],
      currentDate: new Date(),
      data: {
        head_pic:"",

      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData(){
      let u_id=this.$store.state.userInfo.user_id
      var res= await xiugaiziliao({u_id});
      // var date = new Date(Number(res.data.birthday));
      // var dateTime = date.toLocaleString();
      // res.data.birthday = dateTime.split(" ")[0].replace(/\//g,"-");
      this.data=res.data;
      console.log(res.data,111111)
    },
    popup(name, val) {
      this.show = true
      this.mod = val
      this.attribute = name
    },
    // 确认修改
    submit() {
      // let data1 = this.mod;
      // data1[this.attribute] = this.mod
      this.data[this.attribute] = this.mod
      switch(this.attribute){
        case "nickname" : 
          userinfo({nickname:this.mod}).then(()=>{
          this.show = false
        })
        break;
        case "email" : 
          userinfo({email:this.mod}).then(()=>{
            this.show = false;
          })
        break;
        case "mobile" : 
          userinfo({mobile:this.mod}).then(()=>{
          this.show = false;
        })
        break;
        default:
      }
      console.log(this.data,this.attribute)
      // userinfo(data).then(()=>{
      //     // this.data.sex=e.sex;
      //     this.show = false
      // })
    },
    // 修改性别
    onSelect(e) {        
        userinfo({sex: e.sex}).then(()=>{
          this.data.sex=e.sex;
          this.sexShow = false
        })
    },
    // 修改生日 birth
    onConfirm(e) {
      var date = new Date(e.getTime());
      var dateTime = date.toLocaleString();
      var time = dateTime.split(" ")[0].replace(/\//g,"-");
      // console.log(time)
      // this.timeShow = false
      userinfo({birthday: time}).then(()=>{
        this.data.birthday=time;
        this.timeShow = false
      })
    },
    // 图片修改
    
    onReads(file) {
      let data = new FormData()
      data.append('return_imgs', file.file)
      data.append('token',this.$store.state.userInfo.token)
      console.log(data,file)
      this.$upImg(data).then((res) => {
        this.data.head_pic = file.content;
        console.log(2,res.data.imgpath)
        userinfo({head_pic: res.data.imgpath}).then((res) => { })
      })
    }
  }
}
</script>
<style scoped lang="scss">
.wrap {
  background: #fff;
  padding: 0 30px;
  .item {
    height: 100px;
    border-bottom: 1px solid #ebebeb;
    font-size: 32px;
    .img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
    .title {
      color: #4f4f4f;
    }
    .right {
      span {
        // color: #959595;
        // font-size: 26px;
        margin-right: 6px;
      }
    }
  }
  .head {
    height: auto;
    padding: 20px 0;
  }
}
.popup {
  padding: 60px 30px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  .cross {
    position: absolute;
    right: 26px;
    top: 26px;
    font-size: 40px;
  }
  input {
    margin: 60px auto;
    height: 90px;
    border: 2px solid #e0dede;
    width: 96%;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 0 30px;
    font-size: 32px;
  }
  .button {
    margin: 60px auto;
    background: linear-gradient(to bottom, #2194e6 , #21cce6);
    color: #fff;
    height: 90px;
    border-radius: 60px;
    font-size: 38px;
    box-shadow: 0 4px 16px #b3edf6;
  }
}
::-webkit-input-placeholder{
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
#box{
  width:100%;
}
</style>
