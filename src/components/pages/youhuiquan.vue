<template>
	<div id="box">
		<div id="nav">
			<a href="#" @click="index=1" :class="{active:index==1}">未使用</a>
			<a href="#" @click="index=2" :class="{active:index==2}">已使用</a>
			<a href="#" @click="index=3" :class="{active:index==3}">已过期</a>
		</div>
		<div id="quan">
			<div class="card">
				<div class="inner left">
					<h1>￥30</h1>
					<span>满168可用</span>
				</div>
				<div class="inner middle">
					<h2>新用户首单优惠券</h2>
					<span>部分特殊商品不可使用</span>
				</div>
				<van-button round type="danger">去使用</van-button>
			</div>
			<span class="shijian">有效期至[2019-04-24]</span>
		</div>
		<div id="quan">
			<div class="card">
				<div class="inner left">
					<h1>￥30</h1>
					<span>满168可用</span>
				</div>
				<div class="inner middle">
					<h2>新用户首单优惠券</h2>
					<span>部分特殊商品不可使用</span>
				</div>
				<van-button round type="danger">去使用</van-button>
			</div>
			<span class="shijian">有效期至[2019-04-24]</span>
		</div>
		<div id="quan" class="guoqi">
			<div class="card">
				<div class="inner left">
					<h1>￥30</h1>
					<span>满168可用</span>
				</div>
				<div class="inner middle">
					<h2>新用户首单优惠券</h2>
					<span>部分特殊商品不可使用</span>
				</div>
				<van-button round type="danger">已过期</van-button>
			</div>
			<span class="shijian">有效期至[2019-04-24]</span>
		</div>
				<div id="quan" class="guoqi">
			<div class="card">
				<div class="inner left">
					<h1>￥30</h1>
					<span>满168可用</span>
				</div>
				<div class="inner middle">
					<h2>新用户首单优惠券</h2>
					<span>部分特殊商品不可使用</span>
				</div>
				<van-button round type="danger">已使用</van-button>
			</div>
			<span class="shijian">有效期至[2019-04-24]</span>
		</div>
	</div>
</template>
<script>
import {Button} from "vant";
import { youhuiquan_list } from '@/axios/getData';

export default {
	data(){
		return{
			index:1
		}
	},
	components:{
		"van-button":Button
	},
	created(){
		this.getData()
	},
	methods:{
		async getData(){
			var id = this.$route.query.id;
			var res = await youhuiquan_list({id,type:1})
        	console.log(res.data)
		}
	}
}
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
		#quan{
			.shijian{
				display: inline-block;
				margin:45px 25px;
				color: #A9A9A9;
			}
			.card{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				    button{
       				width:20%;
       				display: block;
       				background: linear-gradient(to right,#FF462D,#FF9E3F);
    			}
				.inner{
					display: flex;
					flex-direction: column;
					h1{
						color:red;
					}
				}
				.left{
					padding-top: 15px;
					align-items: center;
					color:#A9A9A9;
				}
				.middle{
					align-items: right;
					span{
						margin: 10px 0;
						color: #A9A9A9;
					}
				}
			}
		}
		.guoqi{
			color: #A9A9A9 !important;
			h1{
				color: #A9A9A9 !important;
			}
			button{
				background: #A9A9A9 !important;
				border:none;
			}
		}
	}
</style>