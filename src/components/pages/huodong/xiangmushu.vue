<template>
	<div id="box">
		<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
		<img src="@/assets/images/组1@2x.png" alt="">
	</div>
</template>
<script>
// import { NavBar } from 'vant';
export default {
	components:{

	}
}
</script>
<style scoped lang="scss">
#box{
	height:100vh;
	overflow: hidden;
	img{
		width:100%;
	}
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