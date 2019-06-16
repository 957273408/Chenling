<template>
  <div id="box">
    <div class="top">
      <div class="inner">
        <span>9527</span>
        <span>全部朋友</span>
      </div>
      <span style="opacity:0.7">|</span>
      <div class="inner">
        <span>168</span>
        <span>合伙人</span>
      </div>
    </div>
    <div class="collapse">
      <van-cell title="全部等级" is-link arrow-direction="down" />
      <van-cell title="全部级别" is-link arrow-direction="down" />
    </div>
    <div id="list">
      <img src="@/assets/images/522.png" alt="">
      <div class="inner">
        <span>昵称：爱的故事上集</span>
        <span>级别：二级</span>
      </div>
      <div class="inner">
        <span>地区：广东深圳</span>
        <span>时间：2019-02-20</span>
      </div>
    </div>
  </div>
</template>

<script>
import {Cell} from 'vant';
// import util from '@/utils/utils.js'
export default {
  components: {
    "van-cell":Cell
  },
  data() {
    return {

    }
  },
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
        &>div{
          width:40%;
          color:#313131;
          font-weight: 500;
        }
    }
    #list{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      span:last-child{
        margin-top: 10px;
      }
    }
  }
</style>
