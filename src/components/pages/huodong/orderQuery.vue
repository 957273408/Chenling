<template>
	<div id="box">
		<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
		<div class="nav">
			<a href="#" @click="index=0" :class="{active:index==0}">全部</a>
			<a href="#" @click="index=1" :class="{active:index==1}">未付款</a>
			<a href="#" @click="index=2" :class="{active:index==2}">已付款</a>
			<a href="#" @click="index=3" :class="{active:index==3}">已完成</a>
			<a href="#" @click="index=4" :class="{active:index==4}">已结算</a>
			<a href="#" @click="index=5" :class="{active:index==5}">无效</a>
		</div>
		<div class="list s1">
			<div class="top">
				<span>订单号：2019113025481</span>
				<div>
					<span>下单：2019-04-03 15:40:20</span>
					<span>完成：2019-04-09 11:08:3</span>
				</div>
			</div>
			<div class="card">
				<img src="@/assets/images/图层602拷贝.png" alt="">
				<div class="right">
					<span>善存 多维元素片100片/瓶 ...</span>
					<span>瓶</span>
					<div>
						<span>￥49.00</span>
						<span>X2</span>
					</div>
				</div>
			</div>
			<div class="bottom">
				<ul>
					<li>订单金额</li>
					<li>￥210.00</li>
				</ul>
				<ul>
					<li>佣金比例</li>
					<li>5.00%</li>
				</ul>
				<ul>
					<li>获得佣金</li>
					<li>10.50</li>
				</ul>
			</div>
			<div class="s1"></div>
		</div>
		<div class="list s2">
			<div class="top">
				<span>订单号：2019113025481</span>
				<div>
					<span>下单：2019-04-03 15:40:20</span>
					<span>完成：2019-04-09 11:08:3</span>
				</div>
			</div>
			<div class="card">
				<img src="@/assets/images/图层602拷贝.png" alt="">
				<div class="right">
					<span>善存 多维元素片100片/瓶 ...</span>
					<span>瓶</span>
					<div>
						<span>￥49.00</span>
						<span>X2</span>
					</div>
				</div>
			</div>
			<div class="bottom">
				<ul>
					<li>订单金额</li>
					<li>￥210.00</li>
				</ul>
				<ul>
					<li>佣金比例</li>
					<li>5.00%</li>
				</ul>
				<ul>
					<li>获得佣金</li>
					<li>￥10.50</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import { Tab, Tabs,Card } from 'vant';
export default {
	data(){
		return{
			index:0
		}
	},
	components:{
		"van-tab":Tab,
		"van-tabs":Tabs,
		"van-card":Card
	}
}
</script>
<style lang="scss" scoped>
	#box{
		.nav{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 50px;
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
    			width: 100%;
    			height: 0.066667rem;
    			background: #FF4C23;
    			left: 0;
    			bottom: -20px;
			}
		}
		.list{
			padding:0 50px 50px;
			.top{
				span{
					display: inline-block;
					margin: 0 30px 10px 0;
				}
			}
			.card{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				img{
					width:60pt;
					height:60pt;
				}
				.right{
					display: flex;
					flex-direction: column;
					height:100px;
					div>span{
						display: inline;
						margin-right:50px;
					}
				}
			}
			.bottom{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				ul{
					float: left;
					li{
						font-weight: 700;
						margin-top:10px;
						text-align: center;
					}
					li:nth-child(2){
						color: #EF1818;
					}
					li:nth-child(1){
						color: #636363;
					}
				}
			}
		}
		.s1{
			background: url(src/assets/images/状态拷贝@2x.png) no-repeat 100% 0;
			background-size: 100px;
		}
		.s2{
			background: url(src/assets/images/状态拷贝2@2x.png) no-repeat 100% 0;
			background-size: 100px;
		}
		.s3{
			background: url(src/assets/images/状态拷贝3@2x.png) no-repeat 100% 0;
			background-size: 100px;
		}
		.s4{
			background: url(src/assets/images/状态拷贝4@2x.png) no-repeat 100% 0;
			background-size: 100px;
		}
		.s5{
			background: url(src/assets/images/状态拷贝5@2x.png) no-repeat 100% 0;
			background-size: 100px;
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
