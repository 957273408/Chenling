<template>
    <div id="top">

        <!-- <div style="height:60pt;">
            <div v-show="index==0" class="height">
                <div class="bottom">
                    <span>支付宝账号</span>
                    <input type="text" placeholder="请输入支付宝账号">
                </div>
                <div class="bottom">
                    <span>收款人姓名</span>
                    <input type="text" placeholder="请输入收款人真实姓名">
                </div>
            </div>


            <div v-show="index==1" class="height">
                <div class="bottom">
                    <span>微信账户</span>
                    <input type="text" placeholder="请输入微信账户">
                </div>
                <div class="bottom">
                    <span>收款人姓名</span>
                    <input type="text" placeholder="请输入收款人真实姓名">
                </div>
            </div>


            <div id="top2" v-show="index==2">
                <span class="yinhang">中国工商银行</span>
                <span style="margin:10px 30px;">尾号0732卡</span>
            </div>
        </div> -->


        <div id="top3">
            <span class="tixian">充值额度(余额: <i>￥2800.00</i> )</span>
			<div class="edu">
				<div @click="index1=0" :class="{active1:index1==0}">100元</div>
				<div @click="index1=1" :class="{active1:index1==1}">200元</div>
				<div @click="index1=2" :class="{active1:index1==2}">500元</div>
				<div @click="index1=3" :class="{active1:index1==3}">800元</div>
				<div @click="index1=4" :class="{active1:index1==4}">900元</div>
				<div @click="index1=5" :class="{active1:index1==5}">1200元</div>
			</div>
            <input type="text" placeholder="手动输入金额(必须为100元以上)">
        </div>


		<div id="top1">
            <span>选择充值方式</span>
            <div @click="index=0" :class="{active:index==0}">
                <img src="@/assets/images/withdrawDeposit1.png" alt="">
                <span>支付宝</span>
            </div>
            <div @click="index=1" :class="{active:index==1}">
                <img src="@/assets/images/withdrawDeposit2.png" alt="">
                <span>微信</span>
            </div>
            <div @click="index=2" :class="{active:index==2}">
                <img src="@/assets/images/withdrawDeposit3.png" alt="">
                <span>银行卡</span>
            </div>
        </div>


		<div class="xieyi">
			<input type="radio" name="" id="">
			<span style="font-size:12pt;">阅读并同意《<span style="color:#197DCA;">亿长寿充值协议</span>》</span>
		</div>

        <div style="text-align:center;margin-top:30px;">
            <button>充值</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
			index:2,
			index1:4
        }
    }
}
</script>
<style  lang="scss" scoped>
#top{
	width:100%;
	.xieyi{
		display: flex;
		align-items: center;
		margin-left:30px;
		input{
			width:19pt;
			height:19pt;
		}
	}
    #top1 {
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-bottom: 50px;
        &>span{
            width:100%;
            display: block;
            margin:30px;
            color: #505050;
            font-size: 13pt;
        }
        div{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height:40pt;
            width:70pt;
            // line-height: 1.2rem;
            border:1px #E5E5E5 solid;
            padding:20px;
            // vertical-align:middle;
            // text-align:right;
            // padding-right:20px;
        }
        img{
            width:50px;
            height:50px;
        }
        .active{
            background: url(src/assets/images/选中11@2x.png) no-repeat;
            background-size:98% 100%;
            border:0;
        }
        // .item1{
        //     background:url() no-repeat 20px center;
        //     background-size:50px;
        // }
        // .item2{
        //     background:url(src/assets/images/withdrawDeposit2.png) no-repeat 20px center;
        //     background-size:50px;           
        // }
        // .item3{
        //     background:url(src/assets/images/withdrawDeposit3.png) no-repeat 20px center;
        //     background-size:50px;
        // }
    }
    #top2{
        background: url(src/assets/images/图层18@2x.png) no-repeat 80% center;
        display: flex;
        flex-direction: column;
        .yinhang{
            font-size: 26px;
            margin-left: 30px;
            font-weight: bold;
            color:#444444;
        }
    }
    #top3{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top:30px;
        padding: 0 30px;
		width:100%;
		.edu{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			&>div{
				width:30%;
				line-height:50pt;
				background: #EEEEEE;
				margin-top:30px;
				color:#444444;
				font-weight: bold;
				font-size: 17pt;
				vertical-align: middle;
				text-align: center;
			}
			.active1{
				color:#fff;
				background: #FF4C23;
			}
		}
        .tixian{
            width:100%;
            font-size: 13pt;
            font-weight: 600;
            color: #505050;
            i{
                color:red;
                font-style: normal; 
            }
        }
        input{
            margin-top:20px;
            line-height: 50px;
            width:100%;
            font-weight: 500;
            font-size: 16pt;
			border-bottom: 1px #2194E6 solid;
			padding:16pt 0;
            &::-webkit-input-placeholder{
				color: #A6A6A6;
				font-size: 16pt;
            }
        }
    }
    button{
       width:90%;
       line-height: 40pt;
       border-radius: 20pt;
       background: linear-gradient(to right,#FF462D,#FF9E3F);
       font-size: 14pt;
       color:#fff;
    }
    .bottom{
       margin: -30px 60px 60px 60px;
       display: flex;
       flex-direction: row;
       align-items: center;
       font-size: 8pt;
       border-bottom:1px solid rgba(166, 166, 166, 0.4);
       padding-bottom: 10pt;
       span{
           display: inline-block;
           width:20%;
           text-align: right;
       }
       input{
           padding-left:40px;
       }
   }
}
::-webkit-input-placeholder{
    color:#A6A6A6;
}
.height{
    margin:30pt 0 10px 0;
}
</style>