<template>
	<div id="box">
		<div class="head">
			<table></table>
			<div class="top">
				<ul class="zhongxian">
					<li>2480.00</li>
					<li>我的佣金</li>
				</ul>
				|
				<ul>
					<li>233.00</li>
					<li>结算中佣金</li>
				</ul>
			</div>
		</div>
		<div class="info">
			<div class="list">
				<span class="title bg1">合伙人收入佣金</span>
				<div>
					<span>74120.00</span>
					<span>总计</span>
				</div>
				<div>
					<span>120.00</span>
					<span>结算中</span>
				</div>
				<div>
					<span>100</span>
					<span>完成订单</span>
				</div>
				<div>
					<span>23</span>
					<span>交易中订单</span>
				</div>
			</div>
			<div class="list">
				<span class="title bg2">团队收入佣金</span>
				<div>
					<span>74120.00</span>
					<span>总计</span>
				</div>
				<div>
					<span>120.00</span>
					<span>结算中</span>
				</div>
				<div>
					<span>100</span>
					<span>完成订单</span>
				</div>
				<div>
					<span>23</span>
					<span>交易中订单</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="scss" scoped>
	#box{
		.head{
			background: url(src/assets/images/bg2拷贝@2x.png) no-repeat;
			background-size: 100% 50%;
			height:150pt;
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
			margin:-250px 60px;
			background: #fff;
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
</style>
