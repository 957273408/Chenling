<template>
	<div id="box">
		<van-steps direction="vertical" :active="0" active-color="red">
  			<van-step>
  			  <h3>商家寄出</h3>
			  <h4>商家已将商品寄出，请注意查收</h4>
  			  <p>2016-07-12 12:40</p>
  			</van-step>
  			<van-step>
  			  <h3>寄回商品</h3>
			  <h4>您的商品已寄回，请等候商家收货</h4>
  			  <p>2016-07-11 10:00</p>
  			</van-step>
  			<van-step>
  			  <h3>审核通过</h3>
			  <h4>请将商品寄到退货地址，然后填写快递单号</h4>
  			  <p>2016-07-10 09:30</p>
  			</van-step>
			<van-step>
  			  <h3>提交申请</h3>
			  <h4>您的售后申请已提交成功，耐心等候客服审核</h4>
  			  <p>2016-07-10 09:30</p>
  			</van-step>
		</van-steps>
	</div>
</template>
<script>
import {Steps,Step} from "vant";
export default {
	components:{
		"van-steps":Steps,
		"van-step":Step,
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
</style>
