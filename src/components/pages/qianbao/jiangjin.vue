<template>
  <div class="myGold">
    
<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> style="margin-top:40pt;"vanNavBar:NavBar -->
    <div class="info">
      <div class="flex-between">
        <div class="left">
          <p class="text">我的奖金</p>
          <p class="num">2600.00</p>
        </div>
		<div class="right">
        	<router-link to="" class="button flex-center">充值</router-link>
			<router-link to="" class="button flex-center">提现</router-link>
		</div>
      </div>
      <div class="flex">
          <p>商城下单时可用奖金进行抵扣</p>
      </div>
    </div>
    <van-list>
      <div class="list">
        <div class="head">奖金明细</div>
        <div class="item flex-between">
          <div class="left">
            <p class="title">商城消费</p>
            <p class="time">2019-02-14 11:00</p>
          </div>
           <div class="right">-150</div><!--:class="item.type === 1 ? 'plus' : 'minus'" -->
        </div>
      </div>

    </van-list>
	<div class="more">查看更多</div>
  </div>
</template>

<script>
import { List, NavBar } from 'vant'
export default {
  components: {
    'van-list': List,
    vanNavBar:NavBar
  },
  data() {
    return {
      list: [],
      title: [],
      loading: false,
      page: 1,
      finished: false,
      data: {}
    }
  },
}
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData() {
//       let data = {
//         p: this.page,
//         type: 'all'
//       }
//       this.loading = true
//       this.$get('user/account_list', data).then((res) => {
//         this.loading = false
//         this.data = res.data
//         this.list = this.list.concat(res.data.list)
//         if (res.data.list.length < 10)  this.finished = true
//         this.page = ++this.page
//       })
//     }
//   }
// }
</script>

<style scoped lang="scss">
.myGold {
  background: #fff;
}
.more{
	width: 100%;
	font-size: 32px;
	color:#A4A4A4;
	text-align: center;
}
.right{
	display: flex;
	flex-direction: column;
	padding-top:30px;
}
.info {
  padding: 40px;
  background: linear-gradient(to right,#FF6123,#FF9F23);
  background-size: 100% 100%;
  margin: 40px;
  border-radius: 30px;
  color: #fff;
  .num {
    font-size: 70px;
    margin-top: 10px;
  }
  .button {
    width: 120px;
    height: 50px;
    border-radius: 60px;
    background: #fff;
    color: #f3bd3a;
	margin-bottom: 20px;
  }
  .flex {
    margin-top: 30px;
    .item:first-child {
      border-right: 1px solid #fff;
      margin-right: 40px;
    }
    p:first-child {
      margin-bottom: 10px;
    }
  }
}
.list {
  margin: 40px;
  .head{
	  font-weight: bold;
	  font-size: 35px;
  }
  .item {
    padding: 30px 0;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 32px;
    }
    .time {
      font-size: 26px;
      color: #a4a4a4;
      margin-top: 15px;
    }
    .right {
      font-size: 40px
    }
    .plus {
      color: #2194e6;
    }
    .minus {
      color: #ecae33;
    }
  }
}

//    .myGold /deep/ .van-nav-bar {
//   .van-icon{
//   	color: #999 !important;
//   }
//   .van-nav-bar__text{
//   	color: #999 !important;
//   }
// }
</style>
