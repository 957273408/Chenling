<template>
  <div>
    <header>
      <div class="flex">
        <div>
          <p>#疑难杂症</p>
          <span>146487人已加入</span>
        </div>
        <button>加入社群</button>
      </div>
    </header>
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
export default {

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
