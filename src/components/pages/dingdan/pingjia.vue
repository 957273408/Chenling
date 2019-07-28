<template>
  <div class="evaluate" id="box">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <div class="header flex-center-y" style="margin-top:40pt;">
      <img src="@/assets/images/图层111.png" alt="">
      <div class="rate flex_1">
        <p class="title">评分</p>
        <van-rate v-model="data.goods_rank" color="#FF462D" />
      </div>
    </div>
    <div class="con">
      <textarea name="" id="" cols="30" rows="10" placeholder="赶快分享你的使用体验吧~" v-model="data.content"></textarea>
      <div class="flex-wrap">
        <div class="img_wrap" v-for="(item, index) in img" :key="index">
          <img :src="item.content" alt="" class="img">
          <img src="@/assets/images/img_del.png" alt="" class="close" @click="close(index)">
        </div>
        <van-uploader :after-read="onReads" accept="image/*" multiple v-if="img.length < 5">
          <img src="@/assets/images/upload.png" alt="" class="upload img">
        </van-uploader>
      </div>
    </div>
    <div class="button flex-center" @click="submit">提交</div>
  </div>
</template>

<script>
import { Icon, Rate, Uploader, Toast, NavBar } from 'vant';
export default {
  components: {
    'van-icon': Icon,
    'van-uploader': Uploader,
    'van-rate': Rate,
    vanNavBar:NavBar
  },
  data() {
    return {
      value: 2,
      img: [],
      img_list: [],
      data: {
        goods_rank: 5,
        content: '',
        rec_id: ''
      },
    }
  },
  methods: {
    onReads(file) {
      if (Array.isArray(file)) {
        let length = 5 - this.img.length > file.length ? file.length :  5 - this.img.length
        for(let i = 0; i < length; i++) {
          this.upImg(file[i])
        }
      } else {
        this.upImg(file)
      }
    },
    upImg(file) {
      let data = new FormData()
      data.append('return_imgs', file.file)
      this.$upImg(data).then((res) => {
        this.img.push(file)
        this.img_list.push(res.data.imgpath)
      })
    },
    submit() {
      let data = this.data
      data['imgs'] = this.img_list.toString()
      data['rec_id'] = this.$route.query.id
      this.$post('order/add_comment', data).then((res) => {
        Toast('评论成功')
      })
    },
    // 关闭图片
    close(index) {
      this.img.splice(index, 1)
      this.img_list.splice(index, 1)
    },
  }
}
</script>

<style scoped lang="scss">
.evaluate {
  padding: 0 35px;
  min-height: 100vh;
  background: #fff;
  .header {
    padding: 30px 0;
    border-bottom: 1px solid #eee;
    img {
      width: 160px;
      height: 160px;
      border-radius: 14px;
    }
    .rate {
      padding-left: 30px;
      .title {
        font-size: 32px;
        margin-bottom: 15px;
        margin-left: 10px;
      }
    }
  }
  .con {
    textarea {
      border: none;
      resize: none;
      width: 100%;
      font-size: 30px;
      padding: 30px 15px;
      height: 250px;
      box-sizing: border-box;
      &::-webkit-input-placeholder{
        color:#989898;
      }
    }
    .img_wrap {
      position: relative;
      .close {
        position: absolute;
        right: 10px;
        top: -10px;
        width: 30px
      }
    }
    .img {
      width: 160px;
      height: 160px;
      margin-right: 20px;
      margin-bottom: 20px;
      border-radius: 14px;
    }
    .upload {
      border-radius: 0;
    }
  }
  .button {
    margin: 44px auto;
    background: linear-gradient(to right, #FF462D , #FF9E3F);
    color: #fff;
    height: 90px;
    border-radius: 60px;
    font-size: 38px;
    box-shadow: 0 4px 16px #b3edf6;
  }
}
// #box /deep/ .van-nav-bar {
//   .van-icon{
//   	color: #999 !important;
//   }
//   .van-nav-bar__text{
//   	color: #999 !important;
//   }
// }
</style>
