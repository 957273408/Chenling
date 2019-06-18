<template>
  <van-list>
    <div class="list">
      <div class="item flex" v-for="(item,index) in data" :key="index">
        <img src="item.original_img" v-if="item.original_img">
        <div class="info flex_1">
          <p class="title">{{item.goods_name}}</p>
          <p class="price">{{item.shop_price}}</p>
          <div class="button flex-center" @click="del(item.collect_id,index)"  v-if="item.original_img">取消收藏</div>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script>
import { List, Toast, Dialog} from 'vant'
import { getshoucang,del_shoucang } from '@/axios/getData'
export default {
  components: {
    'van-list': List
  },
  data() {
    return {
      data:[
        {
          add_time: 1560843148,
          cat_id: 34,
          collect_id: 108,
          goods_id: 237,
          goods_name: "",
          is_on_sale: 1,
          is_virtual: 0,
          original_img: "",
          shop_price: "",
          store_count: 65531
        }
      ]
    }
  },
  created(){
    this.getdata();
  },
  methods:{
     async getdata() {
      var id = this.$route.query.id;
      var res = await getshoucang({id})
      console.log(res);
      this.data=res.data;
      console.log(this.data)
    },
    del(id,index){
      var user_id = this.$route.query.id;
      Dialog.confirm({
        title: '提示',
        message: '删除地址后不可恢复！'
      }).then(async()=>{
        await del_shoucang({user_id,collect_id:id}).then((res)=>{
        Toast("已取消收藏");
        this.data.splice(index,1);
        })
      })
    }
  }
}
    
    // this.banner = res.data.banner
    // this.category_eight = res.data.category_eight
    // this.category_seven = res.data.category_seven
    // this.fuwu = res.data.fuwu
    // this.healthy = res.data.healthy
    // this.hot_product = res.data.hot_product
    // this.img = res.data.img
    // this.yuyue = res.data.yuyue
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
