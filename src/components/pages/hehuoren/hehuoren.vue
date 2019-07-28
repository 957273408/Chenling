<template>
    <div id="box">
        <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
        <div class="head">
			<table></table>
			<div class="top">
				<ul class="zhongxian">
					<li>申请合伙人</li>
					<li>加入我们，迈出你人生成功的第一步</li>
				</ul>
			</div>
            <img src="@/assets/images/bg2拷贝@2x.png" alt="" class="img1">
		</div>
        <div v-show="status_sq">
            <div class="info mt-5">
            <van-cell-group>
                <van-field
                    v-model="name"
                    required
                    clearable
                    label="真实姓名"
                    placeholder="申请人真实姓名"/>
                <van-field
                    v-model="shenfenzheng_id"
                    type="text"
                    label="身份证号码"
                    placeholder="申请人身份证号码"
                    required/>
                <van-field
                    v-model="phone"
                    type="text"
                    label="手机号码"
                    placeholder="申请人手机号码"
                    required/>
                </van-cell-group>

            <div class="img">
                <van-uploader :after-read="onRead1" accept="image/*">
                    <img :src="img.sfz1" alt="" >
                </van-uploader>
                    <!-- <span>身份证反面照<i style="color:red;">* </i></span> -->
                <van-uploader :after-read="onRead2" accept="image/*">
                    <img :src="img.sfz2" alt="" >
                </van-uploader>
            </div>
            <div id="text_sfz">
                <span>身份证正面照<i style="color:red;">* </i></span>
                <span>身份证反面照<i style="color:red;">* </i></span>
            </div>
            <div style="text-align:center;"><button @click="submit">提交</button></div>
            </div>
            <div class="bottom">
            <h3>申请须知</h3>
            <p>1、独立的法人实体, 具有完全民事权利能力和民事行为能力，能够独立承担民事责任;</p>
            <p>2、提供法人代表身份证复印件、组织机构代码证复印件、公司简介，并愿意接受亿长寿平台审核;</p>
            <p>3、交纳加盟金，主要目的就是为了调动代理商全部的工作积极性，增强风险意识，让代理商压力变动力，让代理商全力一搏。</p>
            </div>
        </div>
        <div class="zhuangtai" v-show="status1==3"> <!-- 不通过状态 -->
            <img src="@/assets/images/成功拷贝@2x.png" alt="">
            <p style="font-size:17pt;">审核不通过</p>
            <p>不通过的原因如下：</p>
            <p style="color:red;" v-for="(item,index) in remark" :key="index">{{index+1}}、{{item}}</p>
            <div>
                <button style="background:#EEEEEE;" @click="$router.push({path:'/user'})">返回</button>
                <button style="color:#fff" @click="status1=0;status_sq=true">重新提交</button>
            </div>
        </div>
         <div class="zhuangtai" v-show="status1==1"> <!-- 已提交状态 -->
            <img src="@/assets/images/成功23@2x.png" alt="">
            <p style="font-size:17pt;">申请已提交</p>
            <p>您的申请资料已经提交 请耐心等候</p>
            <p>如有疑问可咨询客服</p>
            <div>
                <button style="background:#EEEEEE;" @click="$router.push({path:'/user'})">返回</button>
            </div>
        </div>
    </div>
</template>
<script>
import { Uploader, Toast, Field, CellGroup} from "vant";
import { hehuoren_1, shenqing_hhr } from "@/axios/getData";
export default {
    data(){
        return{
            fileList:[],
            img:{
                sfz1:"",
                sfz2:""
            },
            data1:null,
            data2:null,
            name:"",
            shenfenzheng_id:null,
            phone:null,
            img_a:'',
            img_b:'',
            status_sq:true,
            status1:0,
            remark:[],   //审核不通过的记录
        }
    },
    created(){
        console.log(this.$route.query.status)
        if(this.$route.query.status){
            this.status1=this.$route.query.status;
            this.status_sq=false;
            this.remark=this.$route.query.remark
            console.log(this.$route.query.status)
        };
    },
    methods:{
        onRead1(file){
            let data = new FormData()
            data.append('return_imgs', file.file)
            data.append('token',this.$store.state.userInfo.token)
            this.img.sfz1 = file.content;
            this.data1=data;
            console.log(data,file)
        },
        onRead2(file){
            let data = new FormData()
            data.append('return_imgs', file.file)
            data.append('token',this.$store.state.userInfo.token)
            this.img.sfz2 = file.content;
            this.data2=data;
            console.log(data)
        },
        submit(){
            console.log(55)
            if(this.shenfenzheng_id&&this.phone&&this.name&&this.data1&&this.data2){
                console.log(1)
                this.$upImg(this.data1).then((res) => {
                    console.log(res.data.imgpath,1)
                    let img = res.data.imgpath;
                    // img='/public'+img.split("public")[1]
                    this.img_a=img
                    this.$upImg(this.data2).then((res)=>{
                        console.log(res.data.imgpath,2)
                        let img = res.data.imgpath;
                        // img='/public'+img.split("public")[1]
                        this.img_b=img
                    }).then((res)=>{
                        console.log(3)
                        shenqing_hhr({true_name:this.name,card_num:this.shenfenzheng_id,mobile:this.phone,img_a:this.img_a,img_b:this.img_b}).then((res)=>{
                        console.log(res,3)
                        Toast("申请成功,请耐心等待!");
                        this.$router.push({path:'/user'})
                        });
                    })
                });
            }else{
                Toast("资料不完整,请认真核对!")
            }
        }
    },
    components:{
        vanUploader :Uploader,
        vanField:Field,
        vanCellGroup:CellGroup
    }
}
</script>
<style lang="scss" scoped>
   #box{
       .img1{
           position: absolute;
           top:0;
           z-index: -5;
       }
       	.head{
		// background: url(src/assets/images/bg2拷贝@2x.png) no-repeat;
		background-size: 100% 50%;
		height:150pt;
		    .top{
		    	display: flex;
		    	flex-direction: row;
		    	align-items: center;
		    	// margin-top:30px;
		    	justify-content: space-around;
		    	width:100%;
		    	color:#fff;
		    	ul{
                    padding-top:20pt;
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
       margin-top:-180px; 
       border-top-left-radius: 30px;
       border-top-right-radius: 30px;
       background: #fff;
       padding: 60px 10px 0 10px;
   }
   #box .info input{
       width:100%;
       border:0;
       font-size: 9pt;
   }
  ::-webkit-input-placeholder{
       color:#A8A8A8;
       text-align: right !important;
   }
   #box .info>div{
       display: flex;
       justify-content: space-between;
       flex-direction: column;
       flex-wrap: nowrap;
       padding-bottom: 10px;
    //    border-bottom: 0.2px solid #686868;
       margin-bottom:5px; 
   }
   #box .info>div:nth-child(2){
       flex-direction: row;
   }
   #box .img{
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       width: 100%;
       border: 0 !important;
       img{
           width:100%;
           height:100%;
       }
   }
   #box .img>div{
       background: url(src/assets/images/加10拷贝@2x.png) no-repeat;
       background-size:  100% 260px;
       width:46%;
       height:260px;
       text-align: center;
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
       margin-top:-180px; 
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
    .info /deep/ .van-cell__title{
        span{
            display: inline-block;
            width: 55pt;
            text-align: right;
        }
    }
    #text_sfz{
        display: flex;
        flex-direction: row !important;
        justify-content: center;
        margin-bottom:30px !important;
        span{
            display: inline-block;
            width: 46%;
            text-align: center;
        }
    }
</style>
    