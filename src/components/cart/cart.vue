<template>
  <div class="cart">
    <div class="head flex-between">
      <p class="allNum">共2件商品</p>
      <div class="img">
        <img src="../../assets/icon/删除@2x.png"
             alt=""
             @click="del">
      </div>
    </div>

    <div class="list">
      <van-checkbox-group v-model="checked"
                          @change="select">
        <div class="item flex-center-y">
          <van-checkbox class="checkbox"
                        checked-color="#2194e6"
                        :name="index"></van-checkbox>
          <div class="info flex flex_1">
            <img src=""
                 alt=""
                 class="item">
            <div class="introduce flex_1">
              <p class="title ellipsis">54561231</p>
              <p class="text">456421313132</p>
              <div class="handle flex-between">
                <p class="price">￥900</p>
                <van-stepper class="flex" />
              </div>
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>

    <div class="balance flex-center-y">
      <div class="left flex_1 flex-between">
        <van-checkbox checked-color="#2194e6">全选</van-checkbox>
        <p class="total">合计：<span>￥200</span></p>
      </div>
      <div class="button">发起乐拼</div>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Stepper, Dialog, Toast } from 'vant';
export default {
  components: {
    vanCheckbox: Checkbox,
    vanCheckboxGroup: CheckboxGroup,
    vanStepper: Stepper,
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.cart {
  width: 100%;
  @include bis("src/assets/icon/bg123@2x.png");
  background-size: 100% 40%;
}
.head {
  padding: 20px 35px;
  font-size: 36px;
  .allNum {
    height: 32px;
    font-size: 32px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(249, 249, 249, 1);
    line-height: 24px;
  }
  .img {
    width: 56px;
    box-shadow: 0 0 20px #aaa;
    background-color: #fff;
    border-radius: 50%;
  }
}
.list {
  box-shadow: 0 0 16px #f0e8e8;
  margin: 0 35px 110px 35px;
  background: #fff;
  border-radius: 20px;
  .checkbox {
    margin: 0 20px;
  }
  .info {
    padding: 30px 0;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    &:last-child {
      border-bottom: 0;
    }
    img {
      width: 185px;
      height: 185px;
      border-right: 20px;
    }
    .introduce {
      padding: 0 25px;
      overflow: hidden;
      .title {
        font-size: 34px;
        margin-bottom: 8px;
      }
      .text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .handle {
        padding-top: 10px;
      }
      .price {
        color: #dc2121;
      }
    }
  }
}
.balance {
  position: fixed;
  height: 100px;
  bottom: 108px;
  left: 0;
  background: #fff;
  width: 100%;
  box-shadow: 0 0 20px #eeecec;
  .total {
    span {
      font-size: 34px;
      color: #dc2121;
    }
  }
  .left {
    padding: 0 50px;
    height: 100px;
    color: #707070;
  }
  .button {
    width: 250px;
    background: rgba(249, 39, 12, 1);
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 36px;
    color: #fff;
    letter-spacing: 2px;
  }
}
</style>
