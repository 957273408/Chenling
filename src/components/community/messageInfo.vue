<template>
  <div style="padding-bottom:50px;">
    
<van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar>
    <!-- <van-button @click="more_" class="more">查看更多</van-button> -->
    <div class="chat" style="margin-top:40pt;">
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

      <van-list v-model="loading" :finished="finished" :offset="offset" @load="onLoad">
        <div class="item"
             v-for="(item, index) in list"
             :key="index">
          <div class="info">
            <img :src="item.head_pic" alt="">
            <p class="name">{{item.nickname}}</p>
            <p class="time">{{item.add_time}}</p>
          </div>
          <div class="txt">{{item.content}}</div>
        </div>
      </van-list>

    </div>
    <div class="commit">
      <van-field v-model="value" placeholder="请输入评论内容" focus/>
      <button @click="sumbit">发表</button>
    </div>
  </div>
</template>

<script>
import { Field, Toast, List, Button, NavBar } from 'vant';
import iszan from '@/assets/icon/AK-MN点赞_fill@2x.png'
import zan from '@/assets/icon/AK-MN点赞@2x.png'
import { messageInfo, clickzan, mefabiao} from '@/axios/getData.js'
export default {
  components: {
    vanField: Field,
    vanList: List,
    vanButton: Button,
    vanNavBar:NavBar 
  },
  data() {
    return {
      value: "",
      info: {head_pic:""},
      list: [
        {
          head_pic:""
        }
      ],
      iszan,
      zan,
      finished:false,
      loading:false,
      offset:20,
      p:1
    }
  },
  methods: {
    async sumbit() {
      console.log(this.value);
      console.log(this.$route.query.id,this.$route.query.comment_id)
      if(!this.loading){
        mefabiao({ id: this.$route.query.id, comment_id: this.$route.query.comment_id,content:this.value }).then(()=>{
          this.getmsgInfo()
          Toast("发表成功");
        })
      }
    },
    async getmsgInfo() {
      let res = await messageInfo({ id: this.$route.query.id, comment_id: this.$route.query.comment_id })
      console.log(res.data);
      this.info = res.data.info
      this.list = res.data.list
    },

    //上拉加载更多
    async onLoad(){
      if(this.loading){
        this.p+=1;
        messageInfo({ id: this.$route.query.id, comment_id: this.$route.query.comment_id,p:this.p }).then((res)=>{
          this.list=this.list.concat(res.data.list)
          this.loading=false;
          if(this.list.length==res.data.count){
            this.finished=true;
            return;
          }
        })
      }
    },
    async more_(){
      // console.log(4574)
      // this.p+=1;
      // mefabiao({ id: this.$route.query.id, comment_id: this.$route.query.comment_id,p:this.p }).then((res)=>{
      //   console.log(res.data)
      //   this.list=this.list.concat(res.data.list)
      // })
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
.more{
  position: fixed;
  left: 70%;
  top:80%;
}
</style>
