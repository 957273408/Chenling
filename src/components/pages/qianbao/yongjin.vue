<template>
  <div class="myGold">
    <div class="info">
      <div class="flex-between">
        <div class="left">
          <p class="text">佣金余额</p>
          <p class="num">3840.00</p>
        </div>
        <router-link to="/withdrawDeposit" class="button flex-center">提现</router-link>
      </div>
      <div class="flex">
        <div class="item flex_1">
          <p>可提现</p>
          <p>1840.00</p>
        </div>
        <div class="item flex_1">
          <p>结算中</p>
          <p>3000.00</p>
        </div>
      </div>
    </div>
    <van-list>
      <div class="list">
        <div class="head">佣金明细</div>
        <div class="item flex-between">
          <div class="left">
            <p class="title">提现</p>
            <p class="time">2019-02-14 11:00</p>
          </div>
          <div class="right">-150</div>
        </div>
      </div>
    </van-list>
	<div class="more">查看更多</div>
  </div>
</template>

<script>
import { List } from 'vant'
export default {
  components: {
    'van-list': List
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
	font-size: 32px;
	color:#A4A4A4;
	text-align: center;
}
.info {
  padding: 40px;
  background: url('src/assets/images/gold_bg.png') no-repeat center center;
  background-size: 100% 100%;
  margin: 40px;
  margin-right: 24px;
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
</style>
