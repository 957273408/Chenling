<template>
    <div id="top">
        
<!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> style="margin-top:40pt;"vanNavBar:NavBar -->
        <div id="top1">
            <span>选择提现方式</span>
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

        <div style="height:60pt;">
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
        </div>


        <div id="top3">
            <span class="tixian">可提现金额( <i>￥2800.00</i> )</span>
            <input type="text" placeholder="金额必须为100元以上">
        </div>
        <div style="text-align:center;margin-top:30px;">
            <button>申请提现</button>
        </div>
    </div>
</template>
<script>
import { NavBar } from 'vant'
export default {
    data(){
        return{
            index:2
        }
    },
    components:{
        vanNavBar:NavBar
    }
}
</script>
<style  lang="scss" scoped>
#top{
    width:100%;
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
        padding-left: 30px;
        width:100%;
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
            width:90%;
            font-weight: 500;
            font-size: 26px;
            border-bottom: 1px #EF2C10 solid;
            &::-webkit-input-placeholder{
                color: #A6A6A6;
            }
        }
    }
    button{
       width:75%;
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
           width:30%;
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

//    #top /deep/ .van-nav-bar {
//   .van-icon{
//   	color: #999 !important;
//   }
//   .van-nav-bar__text{
//   	color: #999 !important;
//   }
// }
</style>