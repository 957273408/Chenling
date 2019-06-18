<template>
    <div id="box">
        <div class="choujiang">
			<table></table>
			<div class="title">您今日还有 <span> 1 </span> 次抽奖机会</div>
			<table></table>
			<div class="table">
				<div class="cell" v-for="(award,index) in awards" :key="index" :class="{'active':active_==award.id,'kaishi':index==4}" @click='start(index)'>
					<ul>
						<li>{{award.name=="谢谢参与"?"":award.name}}</li>
						<li>{{award.id==7?"谢谢参与":(award.id==8?"":"积分")}}</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- <div>
			<h2>活动说明</h2>
			<p>一、</p>
			<p>二、</p>
			<p>三、</p>
			<p>四、</p>
		</div> -->
    </div>
</template>
<script>
export default{
    data() {
        return {
            current: 0,
            awards: [
                { id: 0, name: 1000 },
                { id: 1, name: 88 },
                { id: 2, name: 666 },
                { id: 7, name: '谢谢参与' },
                { id: 8, name: "" },
                { id: 3, name: 8888 },
                { id: 6, name: 100 },
                { id: 5, name: 20 },
                { id: 4, name: 10 }
            ],
            speed: 200,
            diff: 15,
            award: {},
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
			count:36,
    	}
	}, 
	methods:{ 
		start(index) {
			if(index==4&&this.kaishi_){
				//console.log("开始抽奖");
				var that=this;
				that.kaishi_=false;
				var timer=setTimeout(()=>{
					that.count-=1;
					that.active_+=1;
					if(that.active_==8){that.active_=0}					
					if(that.count==20){that.speed=150}
					if(that.count==7){that.speed=200}
					if(that.count!=0){
						that.kaishi_=true;
						that.start(4)
					}
					if(that.count==0){
						//随机数 32-40
						let num=31+Math.ceil(Math.random()*8);
						console.log(num);
						that.count=num;
						that.speed=100;
						that.kaishi_=true;
						clearTimeout(timer)
					}
				},that.speed);

			}
		},	
		// 开始抽奖
		startRoll:function(){ 
			this.times+=1//转动次数 
			this.oneRoll()// 转动过程调用的每一次转动方法，这里是第一次调用初始化 
			this.usePrize()
		}, // 转动的方法 
		oneRoll:function(){ 
			let index = this.index //当前转动到的位置 
			const count = 8 //总共的位置 
			index += 1 
			if(index >count - 1){ 
				index = 0 
			} 
			this.index = index 
		}, 
		//判断是否转到中奖位置，如果是，停止，如果不是，继续转动 
		usePrize:function(){ // 判断是否达到转动次数要求且转到的位置是中奖位置 
			if(this.times > this.cycle + 10 && this.prize === this.index) { 
				clearTimeout(this.timer) //清除定时器，转动停止 
				this.times = 0 
				this.giftopen = true //显示开奖界面 // 
			}else { //否则继续转动 
				if(this.times<this.cycle){ 
					this.speed-=5 
				} 
				this.timer = setTimeout(this.startRoll, this.speed) 
			} 
		} 
	}
}
        //     start(){
        //         // 开始抽奖
        //         this.drawAward();
        //         this.time = Date.now();
        //         this.speed = 200;
        //         this.diff = 15;
        //     },
        //     drawAward(){
        //         // 请求接口, 这里我就模拟请求后的数据(请求时间为2s)
        //         setTimeout( () => {
        //             this.award = {
        //                 id: '4',
        //                 name: '笨驴',
        //             };
        //         }, 1000 );
        //         this.move();
        //     },
        //     move(){
        //         window.timeout = setTimeout( () => {
        //             this.current++;
        //             if ( this.current > 7 ) {
        //                 this.current = 0;
        //             }
        //             if ( this.award.id && ( Date.now() - this.time ) / 1000 > 2 ) {
        //                 this.speed += this.diff;
        //                 if ( ( Date.now() - this.time ) / 1000 > 4 && this.award.id == this.awards[ this.current ].id ) {
        //                     clearTimeout( window.timeout );
        //                     setTimeout( () => {
        //                         alert( '恭喜你，抽中了' + this.award.name );
        //                     }, 0 );
        //                     return;
        //                 }
        //             } else {
        //                 this.speed -= this.diff;
        //             }
        //             console.log( this.speed );
        //             this.move();
        //         }, this.speed );
        //     }
        // }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: none;
    }
	#box{
		background: url(src/assets/images/choujiangbg.png) no-repeat;
		width:100%;
		height: 500pt;
		background-size: 100% 500pt;
		padding-top:150pt;
		.choujiang{
			background: url(src/assets/images/coin拷贝@2x.png) no-repeat;
			width:95%;
			height: 309pt;
			background-size: 100% 309pt;
			margin: 0 auto;
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
				.kaishi{
					background: url(src/assets/images/开始按钮拷贝@2x.png) no-repeat;
					background-size: 100% 100%;
				}
				.active{
					background: url(src/assets/images/select@2x.png) no-repeat !important;
					background-size: 100% 100% !important;
				}
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
</style>
