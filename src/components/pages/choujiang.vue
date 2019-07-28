<template>
    <div id="box" v-if="data.info.thumb">
		<table></table>		
		<img :src="data.info.thumb" alt="" class="img">
		<button style="width:50pt;height:20pt;border-top-right-radius:10pt;border-bottom-right-radius:10pt;color:#fff;background:linear-gradient(to right,#FF462D,#FF9E3F);" @click="guize">{{data.info.title}}</button>
        <div class="choujiang">
			<table></table>
			<div class="title">您今日还有 <span> {{data.lottery_number}} </span> 次抽奖机会</div>
			<table></table>
			<div class="table">
				<div class="cell" v-for="(award,index) in awards" :key="index" :class="{'active':active_==award.id,'kaishi':index==4}">
					<ul>
						<li>{{award.name}}</li>
					</ul>					
				</div>
				<img src="@/assets/images/kaishi@2x.png" alt="" class="img" @click='start(index)'>
			</div>
			<img src="@/assets/images/coin拷贝@2x.png" alt="" class="img_table">
		</div>
		<van-popup v-model="show" position="bottom">
			<div style="padding:20pt;">
				<h3>{{data.info.title}}</h3>
				<div v-html="unescapeHTML(data.info.content)">
					{{data.info.content}}
				</div>
			</div>
		</van-popup>
		<van-popup v-model="result_" id="resu">
			<div style="padding:20pt;" id="res_choujiang">
				<img src="@/assets/images/bg_choujiang_res.png" alt="" class="img11">
				<div class="cont_0">
					<img src="@/assets/images/gold.png" alt="" class="img13">
				</div>
				<div class="cont_1">
					<img src="@/assets/images/色相饱和度2拷贝@2x.png" alt="" class="img12">
					
					
					<div class="cont_2">
						<p v-show="content_!='谢谢参与'" class="title" >恭喜你,抽到</p>
						<p class="cont11" :class="{fs:content_=='谢谢参与'}">{{content_}}</p>
					</div>
				</div>
			</div>
		</van-popup>
    </div>
</template>
<script>
import { choujiang, luck_draw} from "@/axios/getData";
import { Toast, Popup} from 'vant';
export default{
  data() {
        return {
						reslut:{},
						content_:"",
						result_:true,
            current: 0,
            awards: [
                { id: 0, name: '' },
                { id: 1, name: '' },
                { id: 2, name: '' },
                { id: 7, name: '' },
                { id: 4, name: '' },
                { id: 3, name: '' },
                { id: 6, name: '' },
                { id: 5, name: '' },
                { id: 8, name: '' }
						],
						jiangpin:"",  //抽奖的奖品
            speed: 200,
            diff: 15,
						award: {},
						data:{
							info:{
								thumb:""
							}
						},   //抽奖奖品列表
						time: 0,
						index: -1,// 当前转动到哪个位置，起点位置 
						count: 8,//总共有多少位置 
						timer: 0,//每次转动定时器 
						speed: 100,//初始转动速度 
						times: 0,// 转动次数 
						cycle: 3,//转动基数：至少需要转动多少次再进入抽奖环节 
						prize: 5,//中奖位置
						active_:0,//抽奖初始位置
						kaishi_:true, //抽奖开关
						count:20,
						show:false
    		}
	}, 
	async created(){
		var res = await choujiang();
		this.data=res.data;
		console.log(res.data)
		let leng=res.data.list.length
		for(var i=0;i<leng;i++){
			this.awards[i].name=res.data.list[i].name
		}
		[this.awards[4],this.awards[8]]=[this.awards[8],this.awards[4]] //交换两个下标的值
	},
	components:{
		vanPopup:Popup
	},
	methods:{
		async start(index) {
			if(this.data.lottery_number){
			luck_draw().then((res)=>{
				console.log(55,res.data);
				let result=res.data.name;
				this.content_=res.data.name;
				for(var i=0;i<this.data.list.length;i++){
					if(result==this.data.list[i].name){
						this.count=this.awards[i].id+80;
						console.log(this.count)
						break;
					}
				}				
				if(this.kaishi_){
				var that=this;
				that.kaishi_=false;
				that.active_=0;		
				var timer=setInterval(()=>{
					that.count-=1;
					that.active_+=1;
					if(that.active_==8){that.active_=0}					
					if(that.count==20){that.speed=150}
					if(that.count==7){that.speed=200}
					if(that.count==0){
						clearInterval(timer)
						that.kaishi_=true
						that.count=20;
						that.speed=100;
						that.data.lottery_number-=1;
						that.result_=true;
					}
				},that.speed);
				}
				})
			}else{
				Toast("抽奖次数用完了")
			}
		},
		guize(){
			this.show=!this.show
		},
		unescapeHTML(a){
      a = "" + a;
      return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
    }	
	
		// // 开始抽奖
		// startRoll:function(){ 
		// 	this.times+=1//转动次数 
		// 	this.oneRoll()// 转动过程调用的每一次转动方法，这里是第一次调用初始化 
		// 	this.usePrize()
		// }, // 转动的方法 
		// oneRoll:function(){ 
		// 	let index = this.index //当前转动到的位置 
		// 	const count = 8 //总共的位置 
		// 	index += 1 
		// 	if(index >count - 1){ 
		// 		index = 0 
		// 	} 
		// 	this.index = index 
		// }, 
		// usePrize:function(){ // 判断是否达到转动次数要求且转到的位置是中奖位置 
		// 	if(this.times > this.cycle + 10 && this.prize === this.index) { 
		// 		clearTimeout(this.timer) //清除定时器，转动停止 
		// 		this.times = 0 
		// 		this.giftopen = true //显示开奖界面 // 
		// 	}else { //否则继续转动 
		// 		if(this.times<this.cycle){ 
		// 			this.speed-=5 
		// 		} 
		// 		this.timer = setTimeout(this.startRoll, this.speed) 
		// 	} 
		// } 
	}
}
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: none;
    }
	#box{
		width:100%;
		height: 500pt;
		background-size: 100% 500pt;
		padding-top: 150pt;
		.img{
			position: absolute;
			top: 0;
			z-index: -10;
			height:500pt;
		}
		.choujiang{
			// background: url(src/assets/images/coin拷贝@2x.png) no-repeat;
			width:95%;
			height: 309pt;
			background-size: 100% 309pt;
			margin: 0 auto;
			position: relative;
			.title{
				text-align: center;
				margin-top:20pt; 
				font-size: 13pt;
				color:#fff;
				span{
					color:#FFF000;
				}
			}
			.table{
				width:87%;
				margin:0 auto;
				margin-top:18.5pt; 
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				position: relative;
				.cell{
					width:33%;
					height:73pt;				
					color:#A5750F;
					font-weight: bold;
					font-size: 13pt;
					background: url(src/assets/images/normal拷贝@2x.png) no-repeat;
					background-size: 100% 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					li{
						text-align: center;
					}
				}
				&>div:nth-child(5){
					background: none;
				}
				.img{
					position: absolute;
					top: 50%;
					left:50%;
					transform: translateX(-50%) translateY(-50%);
					width:33.33%;
					height:73pt;
					z-index: 1;
				}
				// .kaishi{
				// 	background: url(src/assets/images/kaishi@2x.png) no-repeat;
				// 	background-size: 100% 100%;
				// }
				.active{
					background: url(src/assets/images/select@2x.png) no-repeat !important;
					background-size: 100% 100% !important;
				}
			}
			.img_table{
				position: absolute;
				top: 0;
				left:0;
				// transform: translateX(-50%);
				width:100%;
				height:100%;
				z-index: -1;
			}
		}
	}
    #rotary_table {
        width: 340px;
        height: 349px;
        position: relative;
        margin: auto;
        background-color: antiquewhite;
        .award {
            width: 90px;
            height: 96px;
            line-height: 96px;
            text-align: center;
            float: left;
            position: absolute;
            overflow: hidden;
            background-color: aquamarine;
            &.active {
                background-color: darkgoldenrod;
            }
            &.award0 {
                top: 21px;
                left: 21px;
            }
            &.award1 {
                top: 21px;
                left: 125px;
            }
            &.award2 {
                top: 21px;
                right: 22px;
            }
            &.award3 {
                top: 126px;
                right: 22px;
            }
            &.award4 {
                bottom: 22.5px;
                right: 22px;
            }
            &.award5 {
                bottom: 22.5px;
                right: 125.5px;
            }
            &.award6 {
                bottom: 22.5px;
                left: 21px;
            }
            &.award7 {
                top: 126px;
                left: 21px;
            }
        }
        #start-btn {
            position: absolute;
            top: 125px;
            left: 124px;
            width: 90px;
            height: 96px;
            line-height: 90px;
            text-align: center;
            background-color: coral;
        }
    }
		#resu{
			width:80%;
			border-radius: 10pt;
			#res_choujiang{
				position: relative;
				background: rgba(0,0,0,0.1);
				padding:0 !important;
				width:100%;
				.img11{
					width:100%;
				}
				.img13{
					width:100%;
					transform: translate3d(-50%,-50%,0);
					z-index: 9;
					transform-origin:50% 50%;
					animation: myfirst 4s linear infinite;
				}
				.cont_0{
					position: absolute;
					width:100%;
					top:50%;
					left:50%;
					transform: translate3d(-50%,-50%,0);
					z-index: 8;
				}
				.cont_1{
					position: absolute;
					top:50%;
					left:50%;
					transform: translate3d(-50%,-50%,0);
					z-index: 10;
				}
				.cont_2{
					width:70%;
					position: absolute;
					top:50%;
					left:50%;
					transform: translate3d(-50%,-50%,0);
					z-index: 10;
					.title{
						color:#fff;
						font-size: 12pt;
						text-align: center;
					}
					.cont11{
						width:100%;
						color:yellow;
						font-size: 8pt;
						text-align: center;
					}
					.fs{
						font-size: 14pt;
					}
				}

			}
		}

</style>
