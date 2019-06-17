<template>
  <van-list>
    <div class="list">
      <div class="item flex">
        <img src="@/assets/images/yf7.png">
        <div class="info flex_1">
          <p class="title">善存 多维元素片100片/瓶</p>
          <p class="price">￥105.00</p>
          <div class="button flex-center">取消收藏</div>
        </div>
      </div>
	  <div class="item flex">
        <img src="@/assets/images/yf7.png">
        <div class="info flex_1">
          <p class="title">善存 多维元素片100片/瓶</p>
          <p class="price">￥105.00</p>
          <div class="button flex-center">取消收藏</div>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
import { List} from 'vant'
import { getshoucang } from '@/axios/getData'
export default {
  components: {
    'van-list': List
  },
  data() {
    return {
      // banner: [],
      // category_eight: [],
      // category_seven: [],
      // fuwu: [],
      // healthy: [],
      // hot_product: [],
      // img: [{ ad_code: '' }, { ad_code: '' }, { ad_code: '' }, { ad_code: '' }, { ad_code: '' }],
      // yuyue: [],
    }
  },
  created(){

  },
  async getdata() {
    // var id = this.$route.query.id;
    var res =  await shouhuodizhi({id,p})
    console.log(res.data);
    var data_=res.data;
    for(var i=0;i<data_.length;i++){
      if(data_[i].is_default){
        [data_[0],data_[i]]=[data_[i],data_[0]];
      }
    }
    this.data=data_;
  },

    
    // this.banner = res.data.banner
    // this.category_eight = res.data.category_eight
    // this.category_seven = res.data.category_seven
    // this.fuwu = res.data.fuwu
    // this.healthy = res.data.healthy
    // this.hot_product = res.data.hot_product
    // this.img = res.data.img
    // this.yuyue = res.data.yuyue
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
