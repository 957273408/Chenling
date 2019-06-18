<template>
  <div>
    <header :style="'background-image:url('+info.img +')'">
      <div class="flex">
        <div>
          <p>#{{info.name}}</p>
          <span>{{info.count}}人已加入</span>
        </div>
        <button v-show="yes==0">加入社群</button>
      </div>
    </header>
    <div class="chat">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="info">
          <img :src="item.head_pic"
               alt="">
          <p class="name">{{item.nickname}}</p>
          <p class="time">2019-04-29 09:51:22</p>
        </div>
        <div class="tex">{{item.content}}</div>
        <div class="btn flex">
          <div>
            <img src="@/assets/icon/AK-MN点赞@2x.png"
                 alt="">
            {{item.zan_num}}
          </div>
          <div>
            <img src="@/assets/icon/AK-MN消息1@2x.png"
                 alt="">
            {{item.count}}
          </div>
        </div>
      </div>
    </div>
    <router-link to="/editmessage"
                 tag="div"
                 class="edit"
                 src='@/assets/icon/赚@2x.png'>
      <img src="@/assets/icon/赚@2x.png"
           alt="">
    </router-link>
  </div>
</template>

<script>
import { jiankangInfo } from '@/axios/getData.js'
export default {
  data() {
    return {
      info: {},
      list: [],
      yes: '',
    }
  },
  methods: {
    async getinfo(p = 1) {
      let id = this.$route.query.id
      let res = await jiankangInfo({ id, p })
      this.info = res.data.info
      this.list = res.data.list
      this.yes = res.data.yes
    }
  },
  created() {
    this.getinfo()
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
header {
  @include bis("src/assets/icon/矩形1拷贝4@2x.png");
  @include wh(auto, 480px);
  @include fj();
  align-items: flex-end;
  .flex {
    flex: 1;
    height: 120px;
    align-items: center;
    padding: 0 30px;
    @include fj();
    p {
      display: block;
      margin-bottom: 20px;
      font-size: 40px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
    }
    span {
      font-size: 26px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
    }
    button {
      width: 180px;
      height: 60px;
      background: linear-gradient(
        90deg,
        rgba(33, 204, 230, 1),
        rgba(33, 148, 230, 1)
      );
      box-shadow: 0px 5px 10px 0px rgba(33, 203, 230, 0.4);
      border-radius: 30px;
      font-size: 24px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 24px;
    }
  }
}
.chat {
  padding: 0 35px;
  .item {
    @include wh(auto, auto);
    @include fj(center);
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 0;
    border-bottom: 1px solid #ecedef;
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
.edit {
  position: fixed;
  right: 36px;
  bottom: 126px;
  @include wh(90px, 90px);
}
</style>
