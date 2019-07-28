<template>
	<div id="box">
		<div id="nav">
			<span @click="submit(1)" :class="{active:index1==1}">未使用</span>
			<span @click="submit(2)" :class="{active:index1==2}">已使用</span>
			<span @click="submit(3)" :class="{active:index1==3}">已过期</span>
		</div>
		<div id="quan" v-for="(item,index) in data" :key="index" :class="{guoqi:index1!=1}">
			<div class="card">
				<div class="inner left">
					<h1>￥{{item.money}}</h1>
					<span>满{{item.condition}}可用</span>
				</div>
				<div class="inner middle" style="width:30%;">
					<h2 class="fs-5-1">{{item.name}}</h2>
				</div>
				<van-button round type="danger" class="wd5">{{index1==1?"去使用":index1==2?"已使用":"未使用"}}</van-button>
			</div>
			<span class="shijian">有效期至[{{item.send_time}}]</span>
		</div>
	</div>
</template>
<script>
import {Button} from "vant";
import { youhuiquan_list } from '@/axios/getData';
export default {
	data(){
		return{
			index1:1,
			data:[]
		}
	},
	components:{
		"van-button":Button
	},
	created(){
		this.submit(1);
	},
	methods:{
		async submit(id){
			switch(id){
				case 1:
					var res = await youhuiquan_list({type:0})
					this.data=res.data;
					this.index1=1
					console.log(this.data)
					break;
				case 2:
					this.index1=2;
					this.data=[];
					var res = await youhuiquan_list({type:1})
					this.data=res.data;
					console.log(this.data)
					break;
				case 3:
					this.index1=3;
					this.data=[];
					var res = await youhuiquan_list({type:2})
					this.data=res.data;
					console.log(this.data)
					break;
				default:
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 320px) {
    .fs-5-1{font-size: 12pt !important;}
	.wd5{width:30% !important;}
}
	#box{
		#nav{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin: 50px 0;
			span{
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
			border-bottom: 1px solid #ccc;
			padding-top:5pt;
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