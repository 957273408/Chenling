<template>
  <div id="box">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <div class="top">
      <div class="inner">
        <span>可用积分</span>
        <span>{{data.pay_points?data.pay_points:0}}</span>
      </div>
      <span style="opacity:0.7">|</span>
      <div class="inner" @click="$router.push({path:'/duihuanjilu'})">
        <span>兑换记录</span>
        <span>查看兑换记录</span>
      </div>
    </div>
    <div id="nav">
			<a href="#" @click="nav_(-1,0)" :class="{active:index1==0}">全部商品</a>
			<a href="#" @click="nav_(index,item.id)" :class="{active:index1==(index+1)}" v-for="(item,index) in data.cate_list" :key="index">{{item.name}}</a>
		</div>
    <div id="list">
      <div class="info" v-for="(item,index) in data.goods_list" :key="index" @click="duihuan(index)">
        <img class="img" :src="item.original_img" alt="">
        <p class="p1">{{item.goods_name}}</p>
        <p class="p2">{{item.intergral}}积分</p>
        <p class="p3">市场价：¥{{item.market_price}}</p>
      </div>  
    </div>
    <div class="button_more">
        <van-button round @click="more" :class="{jinyong:data.count==data.goods_list.length}">{{data.count==data.goods_list.length?"没有更多数据了":"加载更多"}}</van-button>
    </div>
    <van-popup v-model="popup">
      <div class="popup">
        <p class="title">兑换商品</p>
        <p class="center" style="margin-bottom:10px;">您要兑换的商品:<span>{{duihuan_.goods_name}}</span></p>
        <p class="center">所需积分:<span>{{duihuan_.intergral}}积分</span> 确定要兑换吗?</p>
        <div class="item">
          收件人<span style="color:red">*</span><input type="text" placeholder="收件人" v-model="submit.consignee">
        </div>
        <div class="item">
          联系方式<span style="color:red">*</span><input type="text" placeholder="联系方式" v-model="submit.mobile">
        </div>
        <div class="item">
          收货地址<span style="color:red">*</span><input type="text" placeholder="收货地址" v-model="submit.address">
        </div>
        <p class="red">请仔细填写收货信息,提交成功后不可更改</p>
        <div class="button flex-between">
          <div class="flex-center back" @click="popup=false">取消</div>
          <div class="flex-center submit" @click="duihuan_sub">兑换</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {Cell,Popup, Button, Toast, Dialog } from 'vant';
import {jifen_store, shangpin_duihuan} from '@/axios/getData';
// import util from '@/utils/utils.js'
export default {
  components: {
    "van-cell":Cell,
    "van-popup":Popup,
    "van-button":Button
  },
  data() {
    return {
      index1:0,
      popup:false,
      data:{
        goods_list:[]
      },
      id_:0,
      data1:{},
      duihuan_:{},
      submit:{   //兑换积分与商品id   duihuan_.intergral和duihuan_.goods_id  是一样的
        mobile:null,
        consignee:null,//收件人
        address:null
      }
    }
  },
  created(){
    this.getdata();
  },
  methods:{
    async getdata(id_=0){
      var res = await jifen_store({id:id_});
      this.data=res.data;
      console.log(res.data)
    },
    async nav_(a,b){
      this.index1=a+1
      this.id_=b
      var res = await jifen_store({id:b});
      this.data=res.data
      console.log(res.data)
    },
    async more(){
      if(this.data.count!=this.data.goods_list.length){
        // console.log(464646)
        this.data.p+=1;
        var res = await jifen_store({id:this.id_,p:this.data.p});
        this.data.goods_list.push.apply(this.data.goods_list,res.data.goods_list)  //数组拼接
      }
    },
    duihuan(index){
      this.popup=true;
      this.duihuan_=this.data.goods_list[index];
      console.log(this.duihuan_);
    },
    duihuan_sub(){
      if(this.data.pay_points>=this.duihuan_.intergral){
        if(this.submit.mobile&&this.submit.consignee&&this.submit.address){
          this.submit.intergral=this.duihuan_.intergral
          this.submit.goods_id=this.duihuan_.goods_id
          Dialog.confirm({
            title: '提示',
            message: '兑换会扣除相应积分,请再次确认是否兑换'
          }).then((res) => {
            shangpin_duihuan(this.submit).then((res)=>{
              Toast(`兑换成功`)
              this.data.pay_points-=this.duihuan_.intergral;
              this.popup=false;
              this.submit={}
            })
          })
        }else{
          Toast(`请仔细填写收货信息`)
        }
      }else{
        Toast(`积分不足`)  //,兑换需要${this.duihuan_.intergral}积分,您的积分为${this.data.pay_points}
      }
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
        overflow: hidden;
        // border:1px solid #cccccc;
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
    .button_more{
      text-align: center;
      margin:10pt;
      .van-button{
        background: linear-gradient(to right,#FE5900,#FF8500);
        height:30pt;
        color:#fff;
        line-height:30pt;
      }
    }
  }
.jinyong{
  background: #ccc !important;
}
//    #box /deep/ .van-nav-bar {
//   .van-icon{
//   	color: #999 !important;
//   }
//   .van-nav-bar__text{
//   	color: #999 !important;
//   }
// }
</style>
