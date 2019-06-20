<!--个人设置-->
<template>
  <div class="about">
    <div id="msg" v-for="(item,index) in data" :key="index">
			<h3>{{item.message_title}}</h3>
	  	<div id="dd">
			  {{item.message}}
	  	</div>
			<p>{{item.create_time}}</p>
		</div>
  </div>
</template>
<script>
import { Button} from 'vant'
import { mymsg } from '@/axios/getData'

export default {
	data(){
		return{
			data:[]
		}
	},
  components:{
    "van-button": Button
	},
	created() {
    this.getdata();
		
	},
	methods:{
		async getdata(){
			var res = await mymsg();
			console.log(res.data);
			this.data=res.data;
		}
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