<template>
  <div>
    <div class="list">
      <div class="item flex-between" v-for="(item,index) in data" :key="index"  @click="$router.push({path: '/help_detali',query:{article_id:item.article_id}})">
        <div class="flex-center-y">
          <img src="@/assets/images/help_icon.png" alt="">
          <p class="ellipsis">{{item.title}}</p>
        </div>
        <van-icon name="arrow" class="arrow" />
      </div>
    </div>
    <div class="button flex-center-x">
      <div class="flex-center flex1" @click="$router.push({path:'/kefu'})"><img src="@/assets/images/help1.png" alt="">联系客服</div>
      <!-- <div class="flex-center flex_1" @click="$router.push({path: '/feedback'})"><img src="../../assets/images/help2.png" alt="">意见反馈</div> -->
    </div>

    <!--说明-->
    <!-- <van-popup v-model="show" position="bottom">
      <div class="explain">
        <div class="title">{{content.title}}</div>
        <div class="text" v-html="content.content"></div>
      </div>
    </van-popup> -->
  </div>
</template>

<script>
import { Icon, Popup } from 'vant';
import { helper } from '@/axios/getData';
export default {
  data(){
    return{
      data:[]
    }
  },
  components: {
    'van-icon': Icon,
    "van-popup": Popup
  },
  created() {
    this.getdata();
  },
  methods:{
    async getdata(){
      var res= await helper();
      console.log(res.data);
      this.data=res.data;
    }
  },
}
//   data() {
//     return {
//       data: [],
//       show: false,
//       content: {}
//     }
//   },
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData() {
//       this.$post('user/helper', {}).then((res) => {
//          this.data = res.data
//       })
//     },
//     set(item) {
//       this.show = true
//       item.content = item.content.replace(/&lt;/g,'<')
//       item.content = item.content.replace(/&gt;/g,'>')
//       item.content = item.content.replace(/&quot;/g,'"')
//       this.content = item
//     },
//     kefu() {
//       this.$post('https://api.weixin.qq.com/customservice/kfaccount/add', {access_token: this.$store.state.userInfo}).then((res) => {
       
//       })
//     }
//   }
// }
</script>

<style scoped lang="scss">
.list {
  padding: 30px;
  background: #fff;
  margin-bottom: 100px;
  .item {
    overflow: hidden;
    height: 100px;
    border-bottom: 1px solid #f2f2f2;
    font-size: 32px;
    img {
      width: 44px;
      margin-right: 15px;
    }
    .flex-center-y {
      overflow: hidden;
    }
  }
}
.button {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 100px;
  background: #fff;
  font-size: 34px;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  div:first-child {
    border-right: 1px solid #e5e5e5;
  }
}
.explain {
  padding: 20px 30px;
  height: 40vh
}
.explain .title {
  text-align: center;
  font-size: 34px;
  margin-bottom: 20px;
}
.flex1{
  display: flex;
  justify-content:center;
  margin-left:50%;
  transform:translateX(-50%);  
}
</style>
