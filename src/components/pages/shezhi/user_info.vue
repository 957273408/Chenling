<template>
  <div>
    <div class="wrap">
      <div class="item flex-between head">
        <div class="title">头像</div>
        <van-uploader :after-read="onReads" accept="image/*" >
          <img src="@/assets/images/522.png" alt="" class="upload img">
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
      <div class="item flex-between">
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
      <div class="popup">
        <van-icon name="cross" @click="show=false" class="cross"/>
        <input type="text" v-model="mod">
        <div class="button flex-center" @click="submit">确认修改</div>
      </div>
    </van-popup>

    <!-- 修改性别 -->
    <van-actionsheet v-model="sexShow" :actions="actions" cancel-text="取消" @select="onSelect"/>

    <!-- 修改生日 -->
    <van-popup v-model="timeShow" position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" :min-date="new Date(1900, 1, 1)" :max-date="new Date()" @cancel="timeShow=false" @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Popup, Actionsheet, DatetimePicker, Uploader } from 'vant';
export default {
  components: {
    'van-icon': Icon,
    'van-popup': Popup,
    'van-actionsheet': Actionsheet,
    'van-datetime-picker': DatetimePicker,
    'van-uploader': Uploader
  },
  data() {
    return {
      show: false,
      mod: '',
      attribute: '',
      sexShow: false,
      timeShow: false,
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
      data: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.$post('user/userinfo', {}).then((res) => {
         this.data = res.data
      })
    },
    popup(name, val) {
      this.show = true
      this.mod = val
      this.attribute = name
    },
    // 确认修改
    submit() {
      let data = {}
      data[this.attribute] = this.mod
      this.$post('user/userinfo', data).then((res) => {
        this.show = false
        this.getData()
      })
    },
    // 修改性别
    onSelect(e) {
      this.$post('user/userinfo', {sex: e.sex}).then((res) => {
        this.sexShow = false
        this.getData()
      })
    },
    // 修改生日
    onConfirm(e) {
      this.$post('user/userinfo', {birth: e.getTime()/1000}).then((res) => {
        this.timeShow = false
        this.getData()
      })
    },
    // 图片修改
    onReads(file) {
      let data = new FormData()
      data.append('return_imgs', file.file)
      this.$upImg(data).then((res) => {
        this.data.head_pic = file.content
        this.$post('user/userinfo', {head_pic: res.data.imgpath}).then((res) => { })
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
</style>
