<template>
  <div style="padding-bottom:50px;">
    <div class="chat">
      <div class="item">
        <div class="info">
          <img src="@/assets/icon/active.png"
               alt="">
          <p class="name">不要放弃治疗</p>
          <p class="time">2019-04-29 09:51:22</p>
        </div>
        <div class="tex"> 我是一个孕妈妈，本来怀孕是一件很开心的事情，可是不幸的是，我在孕期被查出了甲亢，虽然现在用药物在控制，但是我还是担心会对孩子造成影响，不知道怎么办才好。</div>
        <div class="btn flex">
          <div>
            <img src="@/assets/icon/AK-MN点赞@2x.png"
                 alt="">
            5482513
          </div>
          <div>
            <img src="@/assets/icon/AK-MN消息1@2x.png"
                 alt="">
            123
          </div>
        </div>
      </div>
    </div>
    <div class="comment">
      <div class="tip">
        评论<span>(233)</span>
      </div>
      <div class="item">
        <div class="info">
          <img src="@/assets/icon/active.png"
               alt="">
          <p class="name">憨厚的黄连</p>
          <p class="time">2019-04-29 16:18:24</p>
        </div>
        <div class="txt">孕期出现了这样的情况，真的让人乐观不起来</div>
      </div>
    </div>
    <div class="commit">
      <van-field v-model="value"
                 placeholder="请输入用户名" />
      <button>发表</button>
    </div>
  </div>
</template>

<script>
import { Field } from 'vant';
export default {
  components: {
    vanField: Field
  },
  data() {
    return {
      value:""
    }
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
