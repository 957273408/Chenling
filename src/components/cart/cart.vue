<template>
  <div class="cart">
    <div class="head flex-between">
      <p class="allNum">共 {{cartItem.length}} 件商品</p>
      <van-button @click="getlist(0)"
                  type="info"
                  :class="{bg_color:isgroup==0}">商城</van-button>
      <van-button @click="getlist(1)"
                  type="info"
                  :class="{bg_color:isgroup==1}">乐拼</van-button>
      <div class="img">
        <i @click="delcart"
           class="iconfont icon-shanchu"></i>
      </div>
    </div>

    <div class="list">
      <div class="item flex-center-y"
           v-for="(item, index) in cartItem"
           :key="index">
        <div class="round"
             :class="{select_bg:checked[index]}"><input type="checkbox"
                 class="checkbox"
                 :checked="checked[index]"
                 @click="select(index)"></div>
        <div class="info flex flex_1">
          <img :src="item.original_img"
               alt=""
               class="item">
          <div class="introduce flex_1">
            <p class="title ellipsis">{{item.goods_name}}</p>
            <!-- <p class="text">{{item.}}</p> -->
            <div class="handle flex-between flex-5">
              <p class="price p-5">￥{{item.member_goods_price}}</p>
              <van-stepper v-model="item.goods_num"
                           @minus="goodsnumchange(item.id,-1)"
                           @plus='goodsnumchange1(item.id,1)'
                           class="flex" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="balance flex-center-y">
      <div class="left flex_1 flex-between">
        <div id="all">
          <div class="round"
               :class="{select_bg:checkeds}"><input type="checkbox"
                   :checked="checkeds"
                   @change='allselect'
                   checked-color="#2194e6"></div>全选
        </div>
        <p class="total">合计：<span>￥{{countnum}}</span></p>
      </div>
      <div class="button"
           @click="submit">{{isgroup==1?'参加乐拼':'购买'}}</div>
    </div>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Stepper, Dialog, Toast, Button } from 'vant';
import { cartList, del_cart, submit_order, changeCartNum } from '@/axios/getData'
export default {
  components: {
    vanCheckbox: Checkbox,
    vanCheckboxGroup: CheckboxGroup,
    vanStepper: Stepper,
    vanButton: Button
  },
  data() {
    return {
      checked: [],
      cartItem: [],
      countnum: 0,
      checkeds: false,
      color_active: "#1989fa",
      isgroup: 0
    }
  },
  created() {
    if (this.$route.query.isgroup == 6) {
      this.getlist(1);
      this.isgroup = 1
    } else {
      this.getlist(0)
    }
  },
  methods: {
    submit_(aa) {
      console.log(aa)
    },
    async goodsnumchange(id, aa) {
      console.log(id, aa);
      let res = await changeCartNum({ cart_id: id, goods_num: aa });
      var count = 0;
      for (var j = 0; j <= this.checked.length; j++) {
        if (this.checked[j] > 0) {
          count += this.cartItem[this.checked[j] - 1].goods_num * this.cartItem[this.checked[j] - 1].member_goods_price
        }
      };
      this.countnum = count;
      console.log(res);
    },
    async goodsnumchange1(id, aa) {
      console.log(id, aa);
      let res = await changeCartNum({ cart_id: id, goods_num: aa });
      var count = 0;
      for (var j = 0; j <= this.checked.length; j++) {
        if (this.checked[j] > 0) {
          count += this.cartItem[this.checked[j] - 1].goods_num * this.cartItem[this.checked[j] - 1].member_goods_price
        }
      };
      this.countnum = count;
      console.log(res);
    },
    submit() {
      var goodsId = [];
      for (var i = 0; i <= this.checked.length; i++) {
        if (this.checked[i] > 0) {
          goodsId.push(this.cartItem[this.checked[i] - 1].id)
        }
      }
      let ids = goodsId.join(",")
      console.log(ids)
      if (!ids) {
        this.$toast('请选择商品')
        return
      }
      let isgroup;
      if (this.isgroup) {
        isgroup = 6;
      } else {
        isgroup = 0
      }
      this.$router.push({
        path: '/uporder',
        query: {
          action: 'cart',
          ids,
          isgroup
        }
      })
    },
    // getids() {
    //   let arr = this.cartItem.filter((e, i) => {
    //     return this.checked.includes(i)
    //   })
    //   return arr.map(e => {
    //     return e.id
    //   }).join(',')
    // },
    delcart() {
      console.log(13454)
      Dialog.confirm({
        title: '删除',
        message: '确认删除选中商品?'
      }).then(async () => {
        // on confirm
        var goodsId = [];
        for (var i = 0; i <= this.checked.length; i++) {
          if (this.checked[i] > 0) {
            goodsId.push(this.cartItem[this.checked[i] - 1].id)
          }
        }
        let ids = goodsId.join(",")
        console.log(ids)
        let res = await del_cart({ cart_ids: ids })
        if (res.err) return
        this.$toast(res.data)
        this.getlist(this.isgroup)
        this.checked = [];
        this.countnum = 0;
        this.checkeds = false;
      }).catch(() => {
        // on cancel
      });
    },
    allselect() {
      console.log(555)
      this.checkeds = !this.checkeds;   //将全选按钮开关设置为 反向
      if (this.checkeds) {
        this.checked = []
        for (var i = 0; i < this.cartItem.length; i++) {
          this.checked.push(i + 1)
        }
        console.log(this.checked)
      } else {
        this.checked = []
      }
      var count = 0
      for (var j = 0; j <= this.checked.length; j++) {
        if (this.checked[j] > 0) {
          count += this.cartItem[this.checked[j] - 1].goods_num * this.cartItem[this.checked[j] - 1].member_goods_price
        }
      }
      this.countnum = count;
    },

    async getlist(isgroup_) {
      this.cartItem = [];
      this.countnum = 0;
      this.checked = [];
      this.isgroup = isgroup_;
      let res = await cartList({ isgroup: isgroup_ })
      // console.log(5644)
      if (res.err) return
      this.cartItem = res.data
      console.log(res.data)
      console.log(5644)
    },



    select(index) {
      // this.$set(this.arr,1,"loveing")    修改数组的值
      if (this.checked[index]) {
        this.checked[index] = 0
      } else {
        this.checked[index] = index + 1
      }
      console.log(this.checked)
      var sum1 = 0;
      var sum2 = 0;
      for (var i = 0; i <= this.cartItem.length; i++) {
        sum1 += i
      }
      for (var i = 0; i < this.checked.length; i++) {
        sum2 += this.checked[i]
      }
      console.log(sum1, sum2)
      if (this.checked.length == this.cartItem.length && sum1 == sum2) {
        this.checkeds = true
      } else {
        this.checkeds = false
      }
      var count = 0
      for (var j = 0; j <= this.checked.length; j++) {
        if (this.checked[j] > 0) {
          count += this.cartItem[this.checked[j] - 1].goods_num * this.cartItem[this.checked[j] - 1].member_goods_price
        }
      }
      this.countnum = count;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.cart {
  width: 100%;
  @include bis("src/assets/icon/bg123@2x.png");
  background-size: 100% 40%;
  padding-top: 30px;
}
.head {
  padding: 20px 35px;
  font-size: 36px;
  button {
    color: #fff;
    border-radius: 10%;
    background: #ccc;
  }
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
  margin: 40px 35px 110px 35px;
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
#all {
  display: flex;
  align-items: center;
}
.bg_color {
  background-color: rgb(25, 137, 250) !important;
}
input[type="checkbox"] {
  width: 20pt;
  height: 20pt;
}
.round {
  width: 15pt;
  height: 15pt;
  border-radius: 50%;
  border: 2px solid #000;
  margin: 0 20pt 0 5pt;
  input {
    opacity: 0;
  }
}
.select_bg {
  background: url(src/assets/images/success_fill@2x.png);
  background-size: contain;
  border: 0 !important;
}
</style>
