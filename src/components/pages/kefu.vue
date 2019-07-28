<template>
	<div id="box" :style="'height:'+height_+'px'">
		<div class="msg_list">
			<div :class="class_s[i]" v-for="(item,index) in content" :key="index">
				<img src="@/assets/images/522.png" alt="" class="img1">
				<div class="cont">
					<p>{{item}}</p>
				</div>
			</div>
		</div>
		<div class="bottom">
			<textarea class="inp" v-model="notedata"></textarea>
			<div class="r_">
				<div @click="fasong" class="fsong">发送</div>
				<div class="r_b">
					<img src="@/assets/images/加@2x.png" alt="" class="icon">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return{
			class_s:['item','item1'],
			i:1,
			height_:null,
			content:["您好，欢迎光临亿长寿，请问有什么能帮到您的?"],
			notedata:''
		}
	},
	methods:{
		fasong(){
			this.content.push(this.notedata)
		}
	},
	mounted: function () {            
    var width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var height=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		this.height_=height;
	}	
}
</script>
<style lang="scss" scoped>
	#box{
		font-size: 12pt;
		width:100%;
		background: #EDEDED;
		overflow: scroll;
		.msg_list{
			padding:7pt;
			height:80%;
			overflow: scroll;
			.item{
				display: flex;
				margin-bottom: 10pt;
				.img1{
					width:44pt;
					height:44pt;
					margin-right:10pt; 
				}
				.cont{
					position: relative;
					width:78%;
					background-color: #fff;
					border-radius: 6pt;
					display: flex;
					align-items: center;
					padding:7pt;					
					color: #303030;
					&::before{
						content:"";
						position: absolute;
						top:20pt;
						left:-30px;
 						width: 0; 
 						height: 0;
 						border-width: 15px;
 						border-style: solid;
 						border-color: transparent #fff transparent transparent;
					}
				}
			}
			.item1{
				display: flex;
				flex-direction: row-reverse;
				margin-bottom: 10pt;
				.img1{
					width:44pt;
					height:44pt;
					margin-left:10pt; 
				}
				.cont{
					position: relative;
					width:78%;
					background-color: #fff;
					border-radius: 6pt;
					display: flex;
					align-items: center;
					padding:7pt;					
					color: #303030;
					&::before{
						content:"";
						position: absolute;
						top:20pt;
						right:-30px;
 						width: 0; 
 						height: 0;
 						border-width: 15px;
 						border-style: solid;
 						border-color: transparent  transparent transparent #fff;
					}
				}
			}
		}
		.bottom{
			position: fixed;
			display: flex;
			align-items: center;
			bottom:0;
			height:20%;
			left:0;
			width: 100%;
			background-color: #F7F7F7;
			.r_{
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: column;
				width:30%;
				height:100%;
				.fsong{
					width:70%;
					line-height:30pt;
					text-align: center;
					background: linear-gradient(to right, #FF462D , #FF9E3F);
					color:#fff;
					border-radius: 3pt;
				}
				.icon{
					width:20pt;
					height:20pt;
				}
				.r_b{
					border:3pt solid rgba(69, 69, 69, 0.9);
					padding:5pt;
					border-radius: 50%;
				}
			}
			.inp{
				height:80%;
				width:70%;
				background: #fff;
				word-wrap: break-word;
				border:0;
				margin-left:5pt;
				padding:3pt;
				border: 1px solid #FF462D;
			}
		}
	}
	.row_reverse{
		flex-direction: row-reverse !important;
	}
</style>
