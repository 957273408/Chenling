<!--个人设置-->
<template>
  <div class="about">
    <div class="date">
      <van-button round type="danger">2019-04-06</van-button>
    </div>
    <div id="msg">
			<h3>双十一期间物流说明</h3>
	  	<div id="dd">
			  描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息
	  	</div>
		</div>
		<div id="msg">
			<h3>双十一期间物流说明</h3>
	  	<div id="dd">
			  描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息
	  	</div>
		</div>
  </div>
</template>
<script>
import { Button} from 'vant'
import { mymsg } from '@/axios/getData'

export default {
  components:{
    "van-button": Button
	},
	async created() {
    let res = await mymsg()
		console.log(res.data);
	}
}
</script>
<style lang="scss" scoped>
  .about .date{
    text-align:center;
    margin: 30px 0px;
	button{
		color:#fff;
		background: #CCCCCC;
		border:none;
		height:27pt;
		line-height: 27pt;
		width:90pt;
	}
  }
  #msg{
	padding:30px;
	color:#4A4A4A;
		h3{
			margin: 30px 0;
		}
  	#dd{
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
  	}
  }
</style>