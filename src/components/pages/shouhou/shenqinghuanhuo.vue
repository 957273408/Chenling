<template>
  <div>
    <div class="head">
      <div class="info flex">
        <img src="@/assets/images/图层134拷贝@2x.png" alt="">
        <div class="flex_1">
          <p class="title">鱼跃电子血压计医用家用全自动高精...</p>
          <div class="flex-between">
            <p><span>单价：</span>￥99.00</p>
            <p><span>购买数量：</span>x2</p>
          </div>
        </div>
      </div>
      <div class="flex-between number cart">
        <p class="title">申请售后数量</p>
        <van-stepper class="flex" v-model="value"/>
      </div>
    </div>
    <div class="wrap">
      <div class="item flex-between">
        <p class="title">申请原因</p>
        <div class="right flex-center">
          <p>请选择申请原因</p>
          <van-icon name="arrow" /></div>
      </div>
      <div class="issue">
        <p class="title">问题描述</p>
        <textarea name="" id="" cols="30" rows="10" placeholder="请描述申请售后的具体原因，也可上传图片" ></textarea>
        <div class="img_list flex-center-y">
          <img src="@/assets/images/upload.png" alt="">
        </div>
      </div>
      <div class="button flex-center">提交</div>
    </div>

    <van-popup v-model="show" position="bottom">
      <div class="popup">
        <div class="title">申请售后原因<van-icon name="cross" class="cross" @click="show=false" /></div>
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="缺少物品" clickable @click="radio = '1'">
              <van-radio name="1" />
            </van-cell>
            <van-cell title="商品损坏" clickable @click="radio = '2'">
              <van-radio name="2" />
            </van-cell>
            <van-cell title="发错货" clickable @click="radio = '3'">
              <van-radio name="3" />
            </van-cell>
            <van-cell title="质量问题" clickable @click="radio = '4'">
              <van-radio name="4" />
            </van-cell>
            <van-cell title="商品与描述的不符" clickable @click="radio = '5'">
              <van-radio name="5" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <div class="submit flex-center">确认</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Stepper, Popup, CellGroup, Cell, RadioGroup, Radio } from 'vant';
export default {
  components: {
    'van-stepper': Stepper,
    'van-icon': Icon,
    'van-popup': Popup,
    'van-radio-group': RadioGroup,
    'van-radio': Radio,
    'van-cell-group': CellGroup,
    'van-cell': Cell
  },
  data() {
    return {
      show: true,
      radio: '1',
      value:2
    }
  }
}
</script>

<style scoped lang="scss">
.head {
  padding: 0 35px;
  background: #fff;
  .info {
    padding: 35px 0;
    border-bottom: 1px solid #eee;
    img {
      width: 120px;
      height: 120px;
      border-radius: 10px;
    }
    .flex_1 {
      margin-left: 20px;
      .title {
        font-size: 32px;
        margin-bottom: 40px;
      }
      p {
        span {
          color: #848484;
        }
      }
    }
  }
  .number {
    height: 120px;
    .title {
      font-size: 32px;
    }
  }
}
.wrap {
  background: #fff;
  margin-top: 30px;
  padding: 0 30px 30px 30px;
  overflow: hidden;
  .item {
    height: 120px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 32px;
    }
    .right {
      color: #898989;
      p {
        margin-right: 10px;
      }
    }
  }
  .issue {
    padding-top: 40px;
    .title {
      font-size: 32px;
      margin-bottom: 30px; 
    }
    textarea {
      width: 100%;
      height: 265px;
      background: #eee;
      border-radius: 16px;
      border: 0;
      resize: none;
      box-sizing: border-box;
      padding: 20px;
      &::-webkit-input-placeholder{
        color:#6F6F6F;
      }
    }
    .img_list {
      margin: 30px 0;
      img {
        width: 155px;
        height: 155px;
      }
    }
  }
}
.button {
  margin: 40px auto;
  background: linear-gradient(to bottom, #FF462D , #FF9E3F);
  color: #fff;
  height: 90px;
  border-radius: 60px;
  font-size: 38px;
  box-shadow: 0 4px 16px #b3edf6;
}
.popup {
  i{
    color:#EF2C10;
  }
  .title {
    text-align: center;
    margin: 35px 0;
    font-size: 32px;
    position: relative;
    .cross {
      position: absolute;
      right: 30px;
      font-size: 40px;
    }
  }
  .submit {
    height: 100px;
    background: #FF4C23;
    color: #fff;
    font-size: 36px;
    margin-top: 20px;
  }
}
</style>
