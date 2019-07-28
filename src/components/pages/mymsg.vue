<!--个人设置-->
<template>
  <div class="about">
    <div id="msg" v-for="(item,index) in data" :key="index">
			<h3>{{item.message_notice.message_title}}</h3>
	  	<div id="dd">
			  {{item.message_notice.message_content}}
	  	</div>
			<p>{{item.send_time_text}}</p>
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
			var date = new Date(res.data.create_time*1000);
      var dateTime = date.toLocaleString();
			console.log(res.data,dateTime);
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
	padding:20px;
	margin: 0 30px;
	color:#4A4A4A;
	border-bottom: 1px rgba(74, 74, 74, 0.4) solid;
		h3{
			margin: 20px 0 15px;
		}
  	#dd{
		// overflow:hidden; 
		// text-overflow:ellipsis;
		// display:-webkit-box; 
		// -webkit-box-orient:vertical;
		// -webkit-line-clamp:2;
		margin-bottom:5pt; 
  	}
  }
</style>