<template>
  <div style="padding-bottom:50px;">
    <div class="chat">
      <div class="item">
        <div class="info">
          <img :src="info.head_pic"
               alt="">
          <p class="name">{{info.nickname}}</p>
          <p class="time">{{info.add_time}}</p>
        </div>
        <div class="tex"> {{info.content}}</div>
        <div class="btn flex">
          <div @click="clickZan">
            <img :src="info.zan==0?zan:iszan"
                 alt="">
            {{info.zan_num}}
          </div>
          <div>
            <img src="@/assets/icon/AK-MN消息1@2x.png"
                 alt="">
            {{info.count}}
          </div>
        </div>
      </div>
    </div>
    <div class="comment">
      <div class="tip">
        评论<span>({{info.count}})</span>
      </div>
      <div class="item"
           v-for="(item, index) in list"
           :key="index">
        <div class="info">
          <img :src="item.head_pic"
               alt="">
          <p class="name">{{item.nickname}}</p>
          <p class="time">{{item.add_time}}</p>
        </div>
        <div class="txt">{{item.content}}</div>
      </div>
    </div>
    <div class="commit">
      <van-field v-model="value"
                 placeholder="请输入用户名" />
      <button @click="sumbit">发表</button>
    </div>
  </div>
</template>

<script>
import { Field, Toast } from 'vant';
import iszan from '@/assets/icon/AK-MN点赞_fill@2x.png'
import zan from '@/assets/icon/AK-MN点赞@2x.png'
import { messageInfo, clickzan, } from '@/axios/getData.js'
export default {
  components: {
    vanField: Field,

  },
  data() {
    return {
      value: "",
      info: {},
      list: [],
      iszan,
      zan
    }
  },
  methods: {
    async sumbit() {

    },
    async getmsgInfo() {
      let res = await messageInfo({ id: this.$route.query.id, comment_id: this.$route.query.comment_id })
      console.log(res);
      this.info = res.data.info
      this.list = res.data.list
    },
    async clickZan() {
      let comment_id = this.$route.query.comment_id

      let res = await clickzan({ comment_id })
      Toast(res.data)
      this.getmsgInfo()
      
    }
  },
  created() {
    this.getmsgInfo()
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";

.chat {
  padding: 0 35px;
  .item {
    @include wh(auto, auto);
    @include fj(center);
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 0;
    .info {
      width: 100%;
      img {
        float: left;
        @include wh(75px, 75px);
        margin-right: 15px;
        border-radius: 50%;
      }
      .name {
        font-size: 30px;
        font-weight: 400;
        color: rgba(41, 41, 41, 1);
        line-height: 29px;
        margin: 8px 0 15px;
      }
      .time {
        font-size: 22px;
        font-weight: 400;
        color: rgba(98, 98, 98, 1);
        line-height: 29px;
      }
    }
    .tex {
      font-size: 28px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(63, 63, 63, 1);
      line-height: 48px;
      margin-top: 30px;
    }
    .btn {
      align-self: flex-end;
      div {
        @include fj();
        align-items: center;
        font-size: 26px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(63, 63, 63, 1);
        line-height: 41px;
        margin-left: 70px;
        img {
          @include wh(34px, 34px);
          margin-right: 18px;
        }
      }
    }
  }
}
.comment {
  padding: 0 35px;
  .tip {
    font-size: 34px;
    font-weight: bold;
    color: rgba(41, 41, 41, 1);
    line-height: 29px;
    span {
      font-size: 26px;
      font-weight: 400;
      color: rgba(41, 41, 41, 1);
      line-height: 29px;
    }
  }
  .item {
    @include wh(auto, auto);
    @include fj(center);
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 0;
    .info {
      width: 100%;
      img {
        float: left;
        @include wh(75px, 75px);
        margin-right: 15px;
        border-radius: 50%;
      }
      .name {
        font-size: 30px;
        font-weight: 400;
        color: rgba(41, 41, 41, 1);
        margin: 5px 0 14px;
      }
      .time {
        font-size: 22px;
        font-weight: 400;
        color: rgba(98, 98, 98, 1);
      }
    }
    .txt {
      font-size: 28px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(63, 63, 63, 1);
      line-height: 48px;
      margin-top: 27px;
      margin-left: 96px;
    }
  }
}

.commit {
  position: fixed;
  bottom: 0;
  padding: 28px;
  width: 750px;
  @include fj();
  align-items: center;
  height: 104px;
  input {
    flex: 1;
    height: 68px;
    background: rgba(245, 245, 245, 1);
    border-radius: 34px;
    font-size: 26px;
    text-indent: 2em;
  }
  button {
    width: 180px;
    font-size: 30px;
    font-weight: 400;
    color: rgba(33, 162, 230, 1);
    line-height: 25px;
    background-color: #fff;
  }
}
</style>
