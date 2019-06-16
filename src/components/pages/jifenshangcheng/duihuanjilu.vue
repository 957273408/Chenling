


<!--兑换积分-->
<template>
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
</template>

<script>
import { List} from 'vant'
export default {
  components: {
    'van-list': List
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
</style>
