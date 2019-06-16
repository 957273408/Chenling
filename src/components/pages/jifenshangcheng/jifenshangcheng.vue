<template>
  <div id="box">
    <div class="top">
      <div class="inner">
        <span>可用积分</span>
        <span>199999</span>
      </div>
      <span style="opacity:0.7">|</span>
      <div class="inner">
        <span>兑换记录</span>
        <span>查看兑换记录</span>
      </div>
    </div>
    <div id="nav">
			<a href="#" @click="index=0" :class="{active:index==0}">全部商品</a>
			<a href="#" @click="index=1" :class="{active:index==1}">数码产品</a>
			<a href="#" @click="index=2" :class="{active:index==2}">服饰箱包</a>
			<a href="#" @click="index=3" :class="{active:index==3}">日用百货</a>
		</div>
    <div id="list">
      <div class="info">
        <img class="img" src="@/assets/images/图层90拷贝@2x.png" alt="">
        <p class="p1">iPhone XS  256GB 金色</p>
        <p class="p2">9990积分</p>
        <p class="p3">市场价：¥9999.00</p>
      </div>
      <div class="info">
        <img class="img" src="@/assets/images/图层90拷贝@2x.png" alt="">
        <p class="p1">iPhone XS  256GB 金色</p>
        <p class="p2">9990积分</p>
        <p class="p3">市场价：¥9999.00</p>
      </div>
      <div class="info">
        <img class="img" src="@/assets/images/图层90拷贝@2x.png" alt="">
        <p class="p1">iPhone XS  256GB 金色</p>
        <p class="p2">9990积分</p>
        <p class="p3">市场价：¥9999.00</p>
      </div>
      <div class="info">
        <img class="img" src="@/assets/images/图层90拷贝@2x.png" alt="">
        <p class="p1">iPhone XS  256GB 金色</p>
        <p class="p2">9990积分</p>
        <p class="p3">市场价：¥9999.00</p>
      </div>
    </div>
    <van-popup v-model="popup">
      <div class="popup">
        <p class="title">兑换商品</p>
        <p class="center" style="margin-bottom:10px;">您要兑换的商品:<span>iPhone XS  256GB 金色</span></p>
        <p class="center">所需积分:<span>9990积分</span> 确定要兑换吗?</p>
        <div class="item">
          收件人<span style="color:red">*</span><input type="text" placeholder="收件人">
        </div>
        <div class="item">
          联系方式<span style="color:red">*</span><input type="text" placeholder="联系方式">
        </div>
        <div class="item">
          收货地址<span style="color:red">*</span><input type="text" placeholder="收货地址">
        </div>
        <p class="red">请仔细填写收货信息,提交成功后不可更改</p>
        <div class="button flex-between">
          <div class="flex-center back" @click="popup=false">取消</div>
          <div class="flex-center submit" @click="popup=false">兑换</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {Cell,Popup} from 'vant';
// import util from '@/utils/utils.js'
export default {
  components: {
    "van-cell":Cell,
    "van-popup":Popup
  },
  data() {
    return {
      index:0,
      popup:true
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
    #nav{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin: 50px 0;
			a{
				color:#000; 
			}
			.active{
				position: relative;
				color:#FF4C23;
			}
			.active::after{
    			position: absolute;
    			content: "";
    			width: 70%;
    			height: 0.066667rem;
    			background: #FF4C23;
    			left: 15%;
    			bottom: -20px;
			}
		}
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
        padding-left:90px;
        // align-items: center;
        background: url(src/assets/images/积分@2x.png) no-repeat 0 center;
        background-size: 50px;
        &>span:first-child{
          font-size: 30px;
        }
      }
      &>div:nth-child(3){
        background: url(src/assets/images/浏览记录@2x.png) no-repeat 0 center;
        background-size: 45px;
      }
    }
    #list{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      .info{
        display: flex;
        flex-direction: column;
        width:40%;
        margin-bottom: 30px;
        .img{
          width:125pt;
          height:143pt;
        }
        .p1{
          font-size:10pt;
          font-weight: 600; 
        }
        .p2{
          color:#EE241E;
          font-weight: 600; 
          margin:5pt 0;
        }
        .p3{
          color: #7B7B7B;
          font-size: 8pt;
        }
      }
    }
    .popup {
      width: 680px;
      border-radius: 30px;
      background: #fff;
      box-sizing: border-box;
      padding: 45px;
      .red{
        text-align: center;
        color:red;
      }
      .center{
        text-align: center;
        &>span{
          color:#f00;
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
          background: #fff;
          border:2px solid #FF9E3F;
          color: #FF9E3F;
        }
        .submit {
          background: linear-gradient(to right, #FF462D , #FF9E3F);
          color: #fff;
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
  }
</style>
