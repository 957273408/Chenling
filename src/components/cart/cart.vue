<template>
  <div class="cart">
    <div class="head flex-between">
      <p class="allNum">共{{cartItem.length}}件商品</p>
      <div class="img">
        <i @click="delcart"
           class="iconfont icon-shanchu"></i>
      </div>
    </div>

    <div class="list">
      <van-checkbox-group v-model="checked"
                          ref="checkbox"
                          @change="select">
        <div class="item flex-center-y"
             v-for="(item, index) in cartItem"
             :key="index">
          <van-checkbox class="checkbox"
                        :ref="index"
                        checked-color="#2194e6"
                        :name="index"></van-checkbox>
          <div class="info flex flex_1">
            <img :src="item.original_img"
                 alt=""
                 class="item">
            <div class="introduce flex_1">
              <p class="title ellipsis">{{item.goods_name}}</p>
              <!-- <p class="text">{{item.}}</p> -->
              <div class="handle flex-between">
                <p class="price">￥{{item.member_goods_price}}</p>
                <van-stepper v-model="item.goods_num"
                             @change="goodsnumchange(item)"
                             class="flex" />
              </div>
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>

    <div class="balance flex-center-y">
      <div class="left flex_1 flex-between">
        <van-checkbox v-model="checkeds"
                      @click='allselect'
                      checked-color="#2194e6">全选</van-checkbox>
        <p class="total">合计：<span>￥{{countnum}}</span></p>
      </div>
      <div class="button"
           @click="submit">发起乐拼</div>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Stepper, Dialog, Toast } from 'vant';
import { cartList, del_cart, submit_order, changeCartNum } from '@/axios/getData'
export default {
  components: {
    vanCheckbox: Checkbox,
    vanCheckboxGroup: CheckboxGroup,
    vanStepper: Stepper,
  },
  data() {
    return {
      checked: [],
      cartItem: [],
      countnum: 0,
      checkeds: false,
    }
  },
  methods: {
    async goodsnumchange({ id, goods_num }) {
      let res = await changeCartNum({ cart_id: id, goods_num })
      console.log(res);
    },
    submit() {
      let ids = this.getids()
      if (!ids) {
        this.$toast('请选择商品')
        return
      }
      this.$router.push({
        path: '/uporder',
        query: {
          action: 'cart',
          ids
        }
      })
    },
    getids() {
      let arr = this.cartItem.filter((e, i) => {
        return this.checked.includes(i)
      })
      return arr.map(e => {
        return e.id
      }).join(',')
    },
    delcart() {
      Dialog.confirm({
        title: '删除',
        message: '确认删除选中商品?'
      }).then(async () => {
        // on confirm
        let ids = this.getids()

        let res = await del_cart({ cart_ids: ids })
        if (res.err) return
        this.$toast(res.data)
        this.getlist()
      }).catch(() => {
        // on cancel
      });
    },
    allselect(e) {
      if (!this.checkeds) {
        this.cartItem.forEach((e, i) => {
          this.checked = [...this.checked, i]
        })
      } else {
        this.checked = []
      }
    },
    async getlist() {
      let res = await cartList()
      if (res.err) return
      this.cartItem = res.data
    },
    select() {
      if (this.checked.length == this.cartItem.length) {
        this.checkeds = true
      } else {
        this.checkeds = false
      }
      let arr = []
      this.cartItem.forEach((e, i) => {
        if (this.checked.indexOf(i) != -1) {
          arr.push(e)
        }
      })
      this.countnum = arr.reduce((ar, { goods_price, goods_num }) => {
        ar = ar + (goods_price * goods_num)
        return ar
      }, 0)

    }
  },
  created() {
    this.getlist()
  },
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
    text-align: center;
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
