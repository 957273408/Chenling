<template>
	<div id="box">
		<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;color:#999" fixed></van-nav-bar> -->
		<div class="head">
			<table></table>
			<img class="img1" src="@/assets/images/bg2拷贝@2x.png" alt="">
			<div class="top">
				<ul class="zhongxian">
					<li>{{Number(data.total).toFixed(2)}}</li>
					<li>我的佣金</li>
				</ul>
				|
				<ul>
					<li>{{Number(data.money).toFixed(2)}}</li>
					<li>结算中{{data.level>2?"佣金":"奖金"}}</li>
				</ul>
			</div>
		</div>
		<div class="info">
			<div class="list">
				<span class="title bg1">我的收入奖金</span>
				<div>
					<span>{{Number(data.totaluser).toFixed(2)}}</span>
					<span>总计</span>
				</div>
				<div>
					<span>{{Number(data.moneyuser).toFixed(2)}}</span>
					<span>结算中</span>
				</div>
				<div>
					<span>{{data.orderenduser}}</span>
					<span>完成订单</span>
				</div>
				<div>
					<span>{{Number(data.orderstartuser)}}</span>
					<span>交易中订单</span>
				</div>
			</div>
			<div class="list">
				<span class="title bg2">团队收入佣金</span>
				<div>
					<span>{{Number(data.totaldistribut).toFixed(2)}}</span>
					<span>总计</span>
				</div>
				<div>
					<span>{{Number(data.moneydistribut).toFixed(2)}}</span>
					<span>结算中</span>
				</div>
				<div>
					<span>{{data.orderenddistribut}}</span>
					<span>完成订单</span>
				</div>
				<div>
					<span>{{Number(data.orderstartdistribut)}}</span>
					<span>交易中订单</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
// import { NavBar } from "vant";
import { shuju } from "@/axios/getData";
export default {
	data(){
		return{
			data:{}
		}
	},
	created(){
		this.getdata();
	},
	methods:{
		async getdata(){
			var res = await shuju();
			this.data = res.data
			console.log(res.data);
		}
	},
	components:{
		// vanNavBar:NavBar
	}
}
</script>
<style lang="scss" scoped>
	#box{
		.head{
			// background: url(src/assets/images/bg2拷贝@2x.png) no-repeat;
			// background-size: 100% 50%;
			// height:150pt;
			.top{
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-top:30px;
				justify-content: space-around;
				width:100%;
				color:#fff;
				ul{
					font-weight: 500;
					text-align: center;
					&>li:nth-child(1){
						font-size: 50px;
					}
				}
			}
		}
		.info{
			margin: 30px 60px;
			background: #fff;
			border-top-left-radius:20px; 
			border-top-right-radius:20px; 
			.bg1{
				background: url(src/assets/images/会员6@2x.png) no-repeat 10% center;
				background-size: 50px;
			}
			.bg2{
				background: url(src/assets/images/vip2@2x.png) no-repeat 10% center;
				background-size: 50px;
			}
			.title{
				padding:20px 0;
				width:100%;
				text-align: center;
				color: #454545;
				font-size: 16pt;
			}
			.list{
				margin-top:20px;
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				// align-items: center;
				// justify-content: space-between;
				width:100%;
				// color:#fff;
				 div{
					display: flex;
					flex-direction: column;
				 	font-weight: 500;
				 	text-align: center;
					width: 50%;
					margin-bottom: 50px;
					span{
						display: inline-block;
						margin-top: 20px;
						font-size: 10pt;
					}
					&>span:nth-child(1){
						color:#EE241E;
						font-size: 11pt;
					}

				 }
			}
		}
	}
	.img1{
		position: absolute;
		z-index: -5;
	}
	// #box /deep/ .van-nav-bar {
	// 	.van-icon{
	// 		color: #999 !important;
	// 	}
	// 	.van-nav-bar__text{
	// 		color: #999 !important;
	// 	}
	// }
</style>
