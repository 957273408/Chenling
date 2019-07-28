<template>
  <div class="backCrad">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <div class="wrap" v-for="(item,index) in data" :key="index">
      <div class="con">
        <div class="flex-between">
          <div class="name">{{item.bankname}}</div>
          <div class="flex-center r">
            <div class="label flex-center">储蓄卡</div>
            <img src="@/assets/images/删除.png" alt="" class="del" @click="del(item.id,index)">
          </div>
        </div>
        <div class="number">{{item.banknum.slice(0,4)}}  ****  ****  {{item.banknum.slice(-4)}}</div>
      </div>
      <!--query:{data:item}-->
    </div>



    <div class="wrap" v-if="data.length==0">
      <div class="con disabled">
        <div class="flex-between">
          <div class="name">未添加银行卡</div>
        </div>
        <div class="number">****  ****  ****  ****</div>
      </div>
      <router-link to="/setCard" class="button flex-center">添加银行卡</router-link>
    </div>
    <div @click="$router.push({path: '/setCard'})" class="button flex-center">添加银行卡</div>
  </div>
</template>

<script>
import { Dialog, NavBar } from 'vant';
 import { bankList,bankedit, delBank } from '@/axios/getData';
export default {
  data() {
    return {
      data: []
    }
  },
  components:{
    vanNavBar:NavBar
  },
  created() {
    this.getData();
  },
  methods:{
    async getData(){
      var id = this.$route.query.id;
      var res = await bankList();
      if(res.data.length){
        this.data=res.data;
        console.log(this.data)
      }
    },
    del(id_,index){
      Dialog.confirm({
        title: '确认删除？',
        message: '删除后不可恢复'
      }).then(() => {
        delBank({id:id_})
        this.data.splice(index,1)
      })
    }
  }
}
//   methods: {
//     getData() {
//       this.$post('user/bankList', {}).then((res) => {
//         this.data = res.data
//       })
//     },
//     del(id) {
//       Dialog.confirm({
//         title: '确认删除？',
//         message: '删除后不可恢复'
//       }).then(() => {
//         this.$post('user/delBank', {id: id}).then((res) => {
//           this.getData()
//         })
//       })
//     }
//   }
// }
</script>

<style scoped lang="scss">
.backCrad {
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}
.con {
  width: 90%;
  height: 350px;
  margin: 50px auto;
  background: url('src/assets/images/形状34拷贝82@2x.png') no-repeat top;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 40px;
  color: #fff;
  .label {
    width: 100px;
    height: 40px;
    border-radius: 30px;
    background: #fff;
    color: #FF4C23;
    font-size: 22px;
  }
  .name {
    font-size: 32px;
  }
  .number {
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
}
.disabled {
  background: url('src/assets/images/backCrad_bg2.png') no-repeat top;
  background-size: 100% 100%;
}
.button {
  width: 90%;
  height: 90px;
  border-radius: 60px;
  color: #FF4C23;
  border: 2px solid #FF4C23;
  margin: 0 auto;
  font-size: 36px;
}
.r {
  position: relative;
}
.del {
  position: absolute;
  width: 30px;
  top: -30px;
}

// .backCrad /deep/ .van-nav-bar {
// 	.van-icon{
// 		color: #999 !important;
// 	}
// 	.van-nav-bar__text{
// 		color: #999 !important;
// 	}
// }
</style>
