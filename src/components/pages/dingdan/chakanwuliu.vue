<template>
	<div id="box">
		<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
		<van-steps direction="vertical" :active="0" active-color="red">
  			<van-step>
  			  <h3>已签收</h3>
			  <h4>快递已签收 签收人：林</h4>
  			  <p>2016-07-12 12:40</p>
  			</van-step>
  			<van-step>
  			  <h3>派送中</h3>
			  <h4>您的商品已开始拍摄，请准备收货</h4>
  			  <p>2016-07-11 10:00</p>
  			</van-step>
  			<van-step>
  			  <h3>运输中</h3>
			  <h4>广东省 深圳市 已收入</h4>
  			  <p>2016-07-10 09:30</p>
  			</van-step>
			<van-step>
  			  <h3>已揽件</h3>
			  <h4>江苏省苏州市太仓市公司 已收件</h4>
  			  <p>2016-07-10 09:30</p>
  			</van-step>
		</van-steps>
	</div>
</template>
<script>
import {Steps,Step, NavBar} from "vant";
import { express } from "@/axios/getData"
export default {
	data(){
		return{

		}
	},
	created(){
		var id=this.$route.query.id_;
		console.log(this.$route.query.id_)
		this.getdata(id);
	},
	components:{
		"van-steps":Steps,
		"van-step":Step,
		vanNavBar:NavBar
	},
	methods:{
		async getdata(id){
			var res= await express({order_id:id});
			console.log(res.data);
		}
	}
}
</script>
<style lang="scss" scoped>
	#box{
		padding-left:20px;
		h3,h4{color:#181818;}
		h3{
			font-size: 36px;
		}
		h4{
			font-size: 28px;
			margin:16px 0;
		}
		p{
			color:#777777;
		}
		.van-hairline{
			margin:50px 0;
		}
		.van-icon-checked{
			color:red !important;
		}
	}
// 	#box /deep/ .van-nav-bar {
//   .van-icon{
//   	color: #999 !important;
//   }
//   .van-nav-bar__text{
//   	color: #999 !important;
//   }
// }
</style>
