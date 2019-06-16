<template>
  <div class="vip">
    <img src="@/assets/images/头图.png"
         alt="">
    <img src="@/assets/images/二.png"
         alt="">
    <img src="@/assets/images/三.png"
         alt="">
    <div class="content">
      <div class="title">
        购买产品即可成为会员
      </div>
      <div class="l">
          <router-link to="/details"
          tag="div"
                       class="item">
            <img src="@/assets/icon/图层602拷贝 (2).png"
                 alt="">
            <div class="t">辅舒良 丙酸氟替卡松鼻喷雾剂120喷 鼻炎喷剂
              季节性过敏性鼻炎进口喷剂药品</div>
            <div class="info">
              <div class="pice">¥68 <span class="del">¥199</span></div>
              <button>立即购买</button>
            </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.vip{
  width: 750px;
  img{
    width: 100%;
  }
}
.content {
  padding: 0 75px;
  .title {
    position: relative;
    @include sc(32px, #54a6d1);
    @include wh(auto, 123px);
    @include fj();
    font-weight: bold;
    font-family: SourceHanSansCN-Bold;
    line-height: 123px;
    &:before {
      content: "";
      position: absolute;
      display: block;
      transform: translate(-50%, 0);
      width: 123px;
      height: 123px;
      background: linear-gradient(
        45deg,
        rgba(121, 198, 233, 1),
        rgba(209, 235, 253, 1)
      );
      opacity: 0.35;
      border-radius: 50%;
    }
  }
  .l{
    margin-bottom: 60px;
  }
  .item{
    box-sizing: border-box;
    margin-bottom: 50px;
    img{
      display: inline-block;
      box-sizing: border-box;
      border:8px solid rgba(203,229,243,1);
      width:600px;
      height:600px;
      margin: auto;
    }
    .t{
      font-size:28px;
      font-weight:bold;
      line-height: 35px;
      color:rgba(44,44,44,1);
      @include tt();
    }
    .info{
      @include fj();
      margin-top: 23px;
      button{
        width:150px;
        height:45px;
        background:rgba(33,162,230,1);
        border-radius:23px;
        font-size:24px;
        color:rgba(255,255,255,1);
      }
      .pice{
        color: rgba(231, 39, 66, 1);
        font-size: 40px;
        font-weight: bold;
        line-height:35px;
        margin-right: 13px;
      }
      .del{
        font-size:20px;
        text-decoration:line-through;
        vertical-align: bottom;
        color:rgba(180,180,180,1);
        line-height:35px;
      }
    }
  }
}
</style>
<script>
export default {

}
</script>


