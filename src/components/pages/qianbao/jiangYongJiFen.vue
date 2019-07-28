<template>
  <div id="box">
<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> style="margin-top:40pt;"vanNavBar:NavBar -->
    <div class="collapse">
      <van-cell title="2019年2月" is-link arrow-direction="down" @click="timeShow = true"/>
      <van-cell title="全部类型" is-link arrow-direction="down" />
    </div>
    <div>
      <van-list>
        <div class="list">
          <div class="item flex-between">
            <div class="left">
              <p class="title">商城消费</p>
              <p class="time">2019-02-14 11:00</p>
            </div>
             <div class="right">-150</div><!--:class="item.type === 1 ? 'plus' : 'minus'" -->
          </div>
          <div class="item flex-between">
            <div class="left">
              <p class="title">商城消费</p>
              <p class="time">2019-02-14 11:00</p>
            </div>
             <div class="right">-150</div><!--:class="item.type === 1 ? 'plus' : 'minus'" -->
          </div>
        </div>
      </van-list>
    </div>
    <!-- 时间筛选 -->
    <van-popup v-model="timeShow" position="bottom"  style="width:100%">
      <van-datetime-picker v-model="currentDate" type="date" :min-date="new Date(1900, 1, 1)" :max-date="new Date()" @cancel="timeShow=false" @confirm="onConfirm"/>
    </van-popup>
  </div>
</template>

<script>
import {Cell,List, NavBar,DatetimePicker,Popup} from 'vant';
import util from '../../utils/utils.js'
export default {
  components: {
    "van-cell":Cell,
    "van-list":List,
    vanNavBar:NavBar,
    "van-datetime-picker":DatetimePicker,
    "van-popup":Popup
  },
  data() {
    return {
      timeShow:false,
      currentDate:new Date()
    }
  },
  methods:{
    onConfirm(){
      var date = new Date(e.getTime());
      var dateTime = date.toLocaleString();
      var time = dateTime.split(" ")[0].replace(/\//g,"-");     
    }
  }
}
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData() {
//       let index = this.active
//       if (this.tabList[index].finished) return false
//       this.tabList[index].loading = true
//       let data = {
//         p: this.tabList[index].page,
//         level: this.active
//       }
//       this.$post('user/lower_list', data).then((res) => {
//         this.tabList[index].list = this.tabList[index].list.concat(res.data.list)
//         this.tabList[0].count = res.data.count0
//         this.tabList[1].count = res.data.count1
//         this.tabList[2].count = res.data.count2
//         this.tabList[index].loading = false
//         if (res.data.list.length < 10)  this.tabList[index].finished = true
//         this.tabList[index].page = ++this.tabList[index].page
//       })
//     }
//   },
//   filters: {
//     date(val) {
//       if (val) {
//         let date = util.format(val*1000, 'YYYY-MM-DD')
//         return date
//       }
//     }
//   }
// }
</script>

<style lang="scss" scoped>
  #box{
    .top{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height:100px;
      background: linear-gradient(to right,#FE5900,#FF8500);
      color:#fff;
      .inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &>span:first-child{
          font-size: 30px;
          font-weight: 600;
        }
      }
    }
    .collapse{
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        margin-top:30px;
        &>div{
          width:40%;
          color:#313131;
          font-weight: 500;
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
          color: #3A3A3A;
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
  }
</style>
