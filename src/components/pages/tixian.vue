<template>
    <div id="top">
        <div id="top1">
            <span>选择提现方式</span>
            <div class="item1">
                支付宝
            </div>
            <div class="item2">
                微信
            </div>
            <div class="item3">
                银行卡
            </div>
        </div>
        <div id="top2">
            <span class="yinhang">中国工商银行</span>
            <van-cell title="尾号0732卡" is-link url="//youzan.github.io/vant/mobile.html" style="padding-left:30px;font-size:12px;"/>
        </div>
        <div id="top3">
            <span class="tixian">提现金额( <i>￥2800.00</i> )</span>
            <input type="text" placeholder="金额必须为100元以上">
        </div>
        <van-button round type="danger" style="">申请提现</van-button>
    </div>
</template>
<script>
import {Cell,Button} from "vant";
export default {
    components: {
        "van-cell": Cell,
        "van-button": Button,
    }
}
</script>
<style  lang="scss" scoped>
    #top1 {
        display:flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-bottom: 50px;
        span{
            width:100%;
            display: block;
            margin:30px;
        }
        div{
            width:22%;
            line-height: 1.2rem;
            border:1px #E5E5E5 solid;
            vertical-align:middle;
            text-align:right;
            padding-right:20px;
        }
        .item1{
            background:url(src/assets/images/withdrawDeposit1.png) no-repeat 20px center;
            background-size:50px;
        }
        .item2{
            background:url(src/assets/images/withdrawDeposit2.png) no-repeat 20px center;
            background-size:50px;           
        }
        .item3{
            background:url(src/assets/images/withdrawDeposit3.png) no-repeat 20px center;
            background-size:50px;
        }
    }
    #top2{
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
        .tixian{
            width:100%;
            font-size: 12px;
            margin-left: 30px;
            font-weight: bold;
            color:#444444;
            i{
                color:red;
                font-style: normal; 
            }
        }
        input{
            margin:20px 0 0 30px;
            line-height: 50px;
            width:90%;
            font-weight: bold;
            font-size: 26px;
            border-bottom: 1px #EF2C10 solid;
            &::-webkit-input-placeholder{
                color: #A6A6A6;
            }
        }
    }
    button{
       width:75%;
       display: block;
       background: linear-gradient(to right,#FF462D,#FF9E3F);
       margin:50px auto;
    }
</style>