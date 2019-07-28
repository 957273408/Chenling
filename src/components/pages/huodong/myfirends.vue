<template>
  <div id="box">
    <!-- <van-nav-bar left-text="返 回" @click-left="$router.go(-1)" left-arrow style="background:#fff;height:40pt;border-bottom:1px solid #ccc;" fixed></van-nav-bar> -->
    <div class="top">
      <div class="inner">
        <span>{{count0}}</span>
        <span>全部朋友</span>
      </div>
      <span style="opacity:0.7">|</span>
      <div class="inner">
        <span>{{count1}}</span>
        <span>合伙人</span>
      </div>
    </div>
    <div class="collapse">
      <van-cell :title="user" is-link arrow-direction="down" @click="isshow1=true;submit(1)" />
      <van-cell :title="dengji" is-link arrow-direction="down" @click="isshow2=true;submit(2)"/>
    </div>
      
      <!-- <div id="list" v-for="(item,index) in list" :key="index">
        <div>
          <img :src="item.head_pic" alt="" style="width:40pt;height:40pt;border-radius:50%">
        </div>
        <div class="inner">
          <span>昵称：{{item.nickname}}</span>
          <span>级别：{{item.level_name}}</span>
        </div>
        <div class="inner">
          <span>地区：{{item.address}}</span>
          <span>时间：{{item.reg_time}}</span>
        </div>
      </div> -->
      <van-list v-model="loading" :finished="finished" @load="onLoad" :loading-text="load_text">
        <div id="list" v-for="(item,index) in list" :key="index">
          <div>
            <img :src="item.head_pic" alt="" style="width:40pt;height:40pt;border-radius:50%">
          </div>
          <div class="inner">
            <span class="ellipsis">昵称：{{item.nickname}}</span>
            <span>级别：{{item.level_name}}</span>
          </div>
          <div class="inner">
            <span>地区：{{item.address==" "?"未登记":item.address}}</span>
            <span>时间：{{item.reg_time}}</span>
          </div>
        </div>
      </van-list>

      <van-popup v-model="isshow1" position="left" style="height:100%;display:flex;flex-direction: column;padding-top:25%;width:30%;">
         <div class="left"> <!-- 左侧 -->
          <ul v-for="(item,index) in dengji_list" :key="index">
            <li style="height:30pt;text-align: center;line-height:30pt;" @click="getdata1(item.level_id,dengji_id,item.level_name);isshow1=false"><span :class="index1==item.level_id?'active':''">{{item.level_name}}</span></li>
          </ul>
        </div>
      </van-popup>
      <van-popup v-model="isshow2" position="right" style="height:100%;display:flex;flex-direction: column;padding-top:25%;width:30%;">
         <div class="left"> <!-- 右侧 -->
          <ul v-for="(item,index) in jibie" :key="index">
            <li style="height:30pt;text-align: center;line-height:30pt;" @click="getdata2(user_id,index);isshow2=false"><span :class="index_right==index?'active':''">{{item}}</span></li>
          </ul>
        </div>
      </van-popup>
  </div>
</template>

<script>
import {Cell, Button, List, Popup } from 'vant';
import { myfirends, count_ } from "@/axios/getData"
export default {
  components: {
    "van-cell":Cell,
    "van-button":Button,
    "van-list":List,
    "van-popup":Popup,
  },
  data() {
    return {
      load_text:"加载中...",
      user:"全部用户",
      dengji:"全部等级",
      dengji_list:[{level_id:0,level_name:"全部用户"}],//等级列表
      count0:0,    //全部朋友
      count1:0,    //合伙人
      p:1,         //页码
      list:[],
      loading: false,
      finished: false,
      page:null,
      level_:0,
      value1: 0,
      value2: 'a',
      isshow1:false,  //左侧
      isshow2:false,  //右侧
      dengji_id:0,
      user_id:0,
      index1:0,
      jibie:["全部等级","一级","二级"],
      index_right:0
    }
  },
  created(){
    this.getdata();
    this.count_1();
  },
  methods:{
    async getdata(level_id=this.user_id,level=this.dengji_id,p=this.p){
      if(p==1){
        this.dengji_list=[{level_id:0,level_name:"全部用户"}];
      }
      var res = await myfirends({level:level,level_id:level_id,p:p});
      if(res.data.count==0){
        this.load_text="";
        this.finished=true;
      }
      this.dengji_list=this.dengji_list.concat(res.data.grade);
      // this.count0 = res.data.count0
      this.count1 = res.data.count1
      // this.list=res.data.list
      console.log(res.data)
    },
    submit(level_){
      this.level_=level_;
    },
    async onLoad(){  //大药房上拉刷新
      let id = this.$route.query.id
      if(this.loading){
        myfirends({level:this.dengji_id,level_id:this.user_id,p:this.p}).then((res)=>{
          console.log(res.data)
          var list=res.data.list
          this.loading=false;
          this.list=this.list.concat(list)
          console.log(this.list,88888)
          // console.log(this.goods.length,res.data.count)
           this.p +=1;
           console.log(this.p)
          if(this.list.length>=res.data.count||res.data.list.length==0){
            console.log(12)
            this.finished=true;
          }
        })
      }
    },
    async getdata1(level_id,level,user){
      this.dengji_list=[{level_id:0,level_name:"全部用户"}];
      this.list=[];
      var res = await myfirends({level:level,level_id:level_id,p:1});
      this.dengji_list=this.dengji_list.concat(res.data.grade);
      this.p=2;
      this.user_id=level_id;
      this.list=this.list.concat(res.data.list);
      console.log(res.data)
      this.finished=false;
      this.user=user;
      this.index1=level_id;
    },
    async getdata2(level_id,level){
      this.dengji_list=[{level_id:0,level_name:"全部用户"}];
      this.list=[];
      var res = await myfirends({level:level,level_id:level_id,p:1});
      this.dengji_list=this.dengji_list.concat(res.data.grade);
      this.p=2;
      this.user_id=level_id;
      this.list=this.list.concat(res.data.list);
      console.log(res.data)
      this.finished=false;
      this.dengji_id=level;
      this.dengji=this.jibie[level];
      this.index_right=level;
    },
    async count_1(){
      var res = await count_();
      if(res.data.count==0){
        this.load_text="";
        this.finished=true;
      }
      console.log(res.data,4654)
      this.count0=res.data
    }
  }
}
</script>
<style lang="scss" scoped>
  #box{
    .top{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height:60pt;
      width:100%;
      background: linear-gradient(to right,#FE5900,#FF8500);
      color:#fff;
      .inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100pt;
        &>span:first-child{
          font-size: 30px;
          font-weight: 600;
        }
      }
    }
    .collapse{
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      margin:10pt 0;
      // background: linear-gradient(to right,#FE5900,#FF8500);
      &>div{
        width:40%;
        color:#313131;
        font-weight: 500;
      }
    }
    #list{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 20pt;
      .inner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width:30%;
      }
      span:last-child{
        margin-top: 10px;
      }
    }
  }
  .active{
    background: linear-gradient(to right,#FE5900,#FF8500);
    color:#fff !important;
    font-weight: 500;
    border:none !important;
    // border-radius: 15pt;
  }
  .left{
    ul{
      li{
        padding:5px 0;
        span{
          border:1px solid #999;
          display: inline-block;
          width:80%;
        }
      }
    }
  }
.van-loading{
  background: transparent !important;
}
</style>