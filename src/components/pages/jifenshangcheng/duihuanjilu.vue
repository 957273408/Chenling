


<!--兑换积分-->
<template>
  <div>
    <van-list>
      <div class="list">
        <div class="item flex">
          <img src="@/assets/images/图层90拷贝@2x.png">
          <div class="info flex_1">
            <p class="title">iPhone XS  256GB 金色</p>
            <p class="price">50000积分</p>
            <div class="button flex-center">查看详情</div>
          </div>
        </div>
	    <div class="item flex">
          <img src="@/assets/images/图层93拷贝@2x.png">
          <div class="info flex_1">
            <p class="title">DJI 大疆无人机 御Mavic 2</p>
            <p class="price">50000积分</p>
            <div class="button flex-center">查看详情</div>
          </div>
        </div>
      </div>
    </van-list>
    <van-popup v-model="popup">
      <div class="popup">
        <p class="title">兑换信息</p>
        <div class="info">
          <div>
            <div class="item1">兑换商品:</div>
            <div>iPhone XS  256GB 金色</div>
          </div>
          <div>
            <div class="item1">花费积分:</div>
            <div>50000积分</div>
          </div>
          <div>
            <div class="item1">收件人:</div>
            <div>林小七</div>
          </div>
          <div>
            <div class="item1">联系方式:</div>
            <div>18888888888</div>
          </div>
          <div>
            <div class="item3">收货地址:</div>
            <div>街道牛栏前大厦B1215广东省深圳市龙华新区民治广东省深圳市龙华新区民治广东省深圳市龙华新区民治</div>
          </div>
          <div>
            <div class="item1">发货状态:</div>
            <div>已发货<br><div>顺丰快递(8888888888888888888)</div></div>
          </div>
        </div>
        <div class="button">
          <div class="flex-center back" @click="popup=false">返回</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { List,Popup} from 'vant'
export default {
  data(){
    return{
      popup:true
    }
  },
  components: {
    'van-list': List,
    'van-popup':Popup
  },
}
//   data() {
//     return {
//       list: [],
//       loading: false,
//       page: 1,
//       finished: false
//     }
//   },
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData(clear) {
//       let index = this.active
//       if (clear) {
//         this.list = []
//         this.page =  1
//         this.finished = false
//       }
//       if (this.finished) return false
//       this.loading = true
//       let data = {
//         p: this.page,
//         level: this.active
//       }
//       this.$post('user/collect_list', data).then((res) => {
//         this.list = this.list.concat(res.data)
//         this.loading = false
//         if (res.data.length < 10)  this.finished = true
//         this.page = ++this.page
//       })
//     },
//     cancel(id) {
//       Dialog.confirm({
//         title: '提示',
//         message: '是否确认取消收藏！'
//       }).then(() => {
//         let data = {
//           collect_id: id
//         }
//         this.$post('user/cancel_collect', data).then((res) => {
//           this.getData('clear')
//         })
//       })
//     }
//   }
// }
</script>

<style scoped lang="scss">
.item {
  margin: 35px;
  background: #fff;
  padding: 25px;
  border-radius: 20px;
  img {
    width: 185px;
    height: 185px;
    border-radius: 10px;
  }
  .info {
    margin-left: 25px;
    overflow: hidden;
    .title {
      font-size: 34px;
    }
    .price {
      margin: 20px 0;
      font-size: 36px;
      font-weight: bold;
      color: #dc2121;
    }
    .button {
      width: 180px;
      height: 55px;
      background: #eee;
      border-radius: 30px;
      color: #a0a0a0;
    }
  }
}
.noData {
  text-align: center;
  margin-top: 30px;
}
.popup {
  width: 680px;
  border-radius: 80px;
  background: #fff;
  box-sizing: border-box;
  padding: 45px;
  .info{
    font-size: 10pt;
    &>div{
      width:100%;
      display: flex;
      margin-bottom: 10pt;
    }
    .item1{
      width:50pt;
      text-align: right;
    }
    .item2{
      padding-left:30px; 
    }
    .item3{
      width:145pt;
      text-align: right;
    }
    &>div>div:nth-child(2){
      margin-left:15pt;
    }
  }
  .button {
    padding: 0 10px;
    margin-top: 50px;
    div {
      width: 270px;
      height: 90px;
      border-radius: 90px;
      font-size: 32px;
    }
    .back {
      background: #cccccc;
      color: #000;
      margin: 0 auto;
    }
  }
  .title {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .item {
    margin: 35px 0;
    input {
      width: 100%;
      height: 90px;
      background: #eee;
      box-sizing: border-box;
      padding: 0 30px;
      border-radius: 10px;
      font-size: 32px;
      &::-webkit-input-placeholder{
        color:rgb(150, 150, 150);
      }
    }
  }
}
</style>
