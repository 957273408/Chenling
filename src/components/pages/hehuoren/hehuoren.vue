<template>
    <div id="box">
        <div class="head">
			<table></table>
			<div class="top">
				<ul class="zhongxian">
					<li>申请合伙人</li>
					<li>加入我们，迈出你人生成功的第一步</li>
				</ul>
			</div>
		</div>
        <div v-show="true">
            <div class="info">
            <div class="bottom">
                <span>真实姓名<i style="color:red;">* </i></span>
                <input type="text" placeholder="申请人真实姓名">
            </div>
            <div class="bottom">
                <span>真实姓名<i style="color:red;">* </i></span>
                <input type="text" placeholder="申请人身份证号码">
            </div>
            <div class="bottom">
                <span>真实姓名<i style="color:red;">* </i></span>
                <input type="text" placeholder="申请人手机号码">
            </div>
            <div class="img">
                <div>
                    <span>身份证正面照<i style="color:red;">* </i></span>
                </div>
                <div>
                    <span>身份证反面照<i style="color:red;">* </i></span>
                </div>
            </div>
            <div style="text-align:center;"><button>提交</button></div>
            </div>
            <div class="bottom">
            <h3>申请须知</h3>
            <p>1、独立的法人实体, 具有完全民事权利能力和民事行为能力，能够独立承担民事责任;</p>
            <p>2、提供法人代表身份证复印件、组织机构代码证复印件、公司简介，并愿意接受亿长寿平台审核;</p>
            <p>3、交纳加盟金，主要目的就是为了调动代理商全部的工作积极性，增强风险意识，让代理商压力变动力，让代理商全力一搏。</p>
            </div>
        </div>
        <div class="zhuangtai" v-show="false"> <!-- 不通过状态 -->
            <img src="@/assets/images/成功拷贝@2x.png" alt="">
            <p style="font-size:17pt;">审核不通过</p>
            <p>不通过的原因如下：</p>
            <p style="color:red;">1、手持身份证照片看不清身份证</p>
            <p style="color:red;">2、营业执照照片不清晰</p>
            <div>
                <button style="background:#EEEEEE;">返回</button>
                <button style="color:#fff">重新提交</button>
            </div>
        </div>
         <div class="zhuangtai" v-show="false"> <!-- 已提交状态 -->
            <img src="@/assets/images/成功23@2x.png" alt="">
            <p style="font-size:17pt;">申请已提交</p>
            <p>您的申请资料已经提交 请耐心等候</p>
            <p>如有疑问可咨询客服</p>
            <div>
                <button style="background:#EEEEEE;">返回</button>
            </div>
        </div>
    </div>
</template>
<script>
// import {Steps,Step} from "vant";
export default {
    
}
</script>
<style lang="scss" scoped>
   #box{
       	.head{
		background: url(src/assets/images/bg2拷贝@2x.png) no-repeat;
		background-size: 100% 50%;
		height:150pt;
		    .top{
		    	display: flex;
		    	flex-direction: row;
		    	align-items: center;
		    	margin-top:30px;
		    	justify-content: space-around;
		    	width:100%;
		    	color:#fff;
		    	ul{
		    		font-weight: 500;
		    		text-align: center;
		    		&>li:nth-child(1){
		    			font-size: 50px;
		    		}
		    	}
		    }
		}
   }
   #box .info{
       margin:60px;
       margin-top:-250px; 
       border-top-left-radius: 30px;
       border-top-right-radius: 30px;
       background: #fff;
       padding: 60px 60px 0 60px;
   }
   #box .info input{
       width:70%;
       border:0;
   }
   #box .info input::-webkit-input-placeholder{
       color:#A8A8A8;
       text-align: right;
   }
   #box .info>div{
       display: flex;
       justify-content: space-between;
       flex-direction: row;
       flex-wrap: nowrap;
       padding-bottom: 10px;
    //    border-bottom: 0.2px solid #686868;
       margin-bottom:30PX; 
   }
   #box .img{
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       width: 100%;
       border: 0 !important;
   }
   #box .img>div{
       box-sizing: border-box;
       background: url(src/assets/images/加10拷贝@2x.png) no-repeat;
       background-size:  100% 260px;
       width:46%;
       height:260px;
       text-align: center;
       padding-top:180px;
       color:#A8A8A8;
   }
   button{
       width:100%;
       border-radius:30px; 
       line-height: 60px;
       border:0;
       background: linear-gradient(to right,#FF462D,#FF9E3F);
   }
   .bottom{
       margin: -30px 60px 60px 60px;
       h3{
           font-size: 16pt;
           color: #333333;
           margin-bottom: 10pt;
       }
       p{
           font-size: 8pt;
       }
       &>p:nth-child(3){
           margin: 15px 0;
       }
   }
   .zhuangtai{
       margin:60px;
       margin-top:-250px; 
       border-top-left-radius: 30px;
       border-top-right-radius: 30px;
       background: #fff;
       padding: 60px 60px 0 60px;
       text-align: center;
       p{
           margin-bottom:15pt;
           font-size: 12pt;
       }
       img{
           width:75pt;
           height:75pt;
           margin: 10pt auto;
       }
       div{
           display: flex;
           flex-direction: row;
           justify-content: center;  //居中
           button{
               width:40%;
           }
       }
   }
</style>
    