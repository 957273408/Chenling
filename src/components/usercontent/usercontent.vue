<template>
  <div class="container user">
    <div class="head">
      <div class="info flex-center-y">
        <router-link to="user_info"
                     class="portrait flex-center">
          <img :src="data.head_pic"
               alt="">
        </router-link>
        <div class="order">
          <div class="flex-center-y">
            <p class="name">{{data.nickname}}</p>
            <p class="identity">{{data.level_name}}</p>
          </div>
          <p class="id">ID:{{data.user_no}}</p>
        </div>
        <div class="order myicon">
          <div class="flex-center-y"
               style='float:right'>
            <router-link to="/mymsg">
              <van-icon name="chat" />
            </router-link>
            <router-link to="/myset">
              <van-icon name="setting-o" />
            </router-link>
          </div>
        </div>
        <div>

        </div>
      </div>

    </div>
    <div class="jfqd flex22 " style="width:100%;padding:0 30pt;">   
      <div id="hee" style="color:#5E402B;font-size:11pt"><img src="@/assets/icon/等级图标@2x.png" style="margin-right:5pt;" alt=""> 已为您赠送积分 <span style="margin-left:10pt;color:#E61F1F;font-weight:bold;font-size:11pt;">4862</span></div>
      <router-link to="/wodeqiandao" tag="button" style="width:70pt;line-height:18pt; border-radius:9pt;background:linear-gradient(to right,#FF462D,#FF9E3F);color:#fff;">
        马上签到
      </router-link>
    </div>
    <div class="block flex column1"><!--跳转我的订单-->
      <router-link :to="{path: '/wodedingdan',query:{index:1}}"
                   class="item">
        <img src="@/assets/images/待付款.png"
             alt="">
        <p>待付款</p>
      </router-link>
      <router-link :to="{path: '/wodedingdan',query:{index:2}}"
                   class="item">
        <img src="@/assets/images/待发货.png"
             alt="">
        <p>待发货</p>
      </router-link>
      <router-link :to="{path: '/wodedingdan',query:{index:3}}"
                   class="item">
        <img src="@/assets/icon/已发货(1)@2x.png"
             alt="">
        <p>已发货</p>
      </router-link>
      <router-link :to="{path: '/wodedingdan',query:{index:4}}"
                   class="item">
        <img src="@/assets/icon/已完成(1)@2x.png"
             alt="">
        <p>已完成</p>
      </router-link>
      <router-link :to="{path: '/wodedingdan',query:{index:0}}"
                   class="item">
        <img src="@/assets/images/我的订单.png"
             alt="">
        <p>我的订单</p>
      </router-link>
    </div>
    <div class="banner">
      <router-link to="/news"><img src="@/assets/icon/海报1拷贝@2x.png" alt=""></router-link>
    </div>
    <van-tabs v-model="active"
              title-active-color='#FF4C23'
              line-width='55'>
      <van-tab title="会员中心">
        <div slot="title">
          <i class="iconfont icon-yonghu"></i> 会员中心
        </div>
        <div class="block flex-wrap column2">
          <router-link to="/nowhapply"
                       class="item">
            <img src="@/assets/images/乐拼.png"
                 alt="">
            <p>乐拼</p>
          </router-link>
          <router-link to="/myfirends"
                       class="item">
            <img src="@/assets/images/我的朋友.png"
                 alt="">
            <p>我的朋友</p>
          </router-link>
          <router-link to="cellularState"
                       class="item">
            <img src="@/assets/images/邀请朋友.png"
                 alt="">
            <p>邀请朋友</p>
          </router-link>
          <router-link to="/shujuzhongxin"
                       class="item">
            <img src="@/assets/images/数据中心.png"
                 alt="">
            <p>数据中心</p>
          </router-link>
          <router-link to="/shouhuodizhi"
                       class="item">
            <img src="@/assets/images/地址管理.png"
                 alt="">
            <p>地址管理</p>
          </router-link>
          <router-link to="/youhuiquan"
                       class="item">
            <img src="@/assets/images/我的优惠券.png"
                 alt="">
            <p>我的优惠券</p>
          </router-link>
          <router-link to="/jiangyongjifen"
                       class="item">
            <img src="@/assets/images/奖金明细.png"
                 alt="">
            <p>奖金明细</p>
          </router-link>
          <router-link to="/xiangmushu"
                       class="item">
            <img src="@/assets/images/项目书.png"
                 alt="">
            <p>项目书</p>
          </router-link>
        </div>
        <div class="banner">
          <router-link to="/news"><img src="@/assets/icon/海报2拷贝@2x.png" alt=""></router-link>
        </div>
        <div class="block flex-wrap column2">
          <router-link to="/choujiang"
                       class="item">
            <img src="@/assets/images/抽奖活动.png"
                 alt="">
            <p>抽奖活动</p>
          </router-link>
          <router-link to="/jifenshangcheng"
                       class="item">
            <img src="@/assets/images/积分商城.png"
                 alt="">
            <p>积分商城</p>
          </router-link>
          <router-link to="/user_info"
                       class="item">
            <img src="@/assets/images/修改资料.png"
                 alt="">
            <p>修改资料</p>
          </router-link>
          <router-link to="orderList"
                       class="item">
            <img src="@/assets/images/联系客服.png"
                 alt="">
            <p>联系客服</p>
          </router-link>
          <router-link to="/shoucang"
                       class="item">
            <img src="@/assets/images/我的收藏.png"
                 alt="">
            <p>我的收藏</p>
          </router-link>
          <router-link to="/help"
                       class="item">
            <img src="@/assets/images/帮助中心.png"
                 alt="">
            <p>帮助中心</p>
          </router-link>

        </div>
      </van-tab>
      <van-tab title="合伙人中心">
        <div slot="title">
          <i class="iconfont icon-tianchongxing-"></i> 合伙人中心
        </div>
        <div class="block flex-wrap column2" v-show="true">
          <router-link to="orderList"
                       class="item">
            <img src="@/assets/images/乐拼.png"
                 alt="">
            <p>乐拼</p>
          </router-link>
          <router-link to="cellularState"
                       class="item">
            <img src="@/assets/images/订单查询.png"
                 alt="">
            <p>乐拼订单查询</p>
          </router-link>
          <router-link to="cellularState"
                       class="item">
            <img src="@/assets/images/我的朋友.png"
                 alt="">
            <p>会员管理</p>
          </router-link>
          <router-link to="cellularState"
                       class="item">
            <img src="@/assets/images/合伙人.png"
                 alt="">
            <p>合伙人管理</p>
          </router-link>
          <router-link to="cellularState"
                       class="item">
            <img src="@/assets/images/抽奖.png"
                 alt="">
            <p>抽奖活动</p>
          </router-link>
          <router-link to="cellularState"
                       class="item">
            <img src="@/assets/images/佣金.png"
                 alt="">
            <p>我的佣金</p>
          </router-link>
          <router-link to="cellularState"
                       class="item">
            <img src="@/assets/images/名片.png"
                 alt="">
            <p>我的名片</p>
          </router-link>
        </div>
		<div v-show="true" class="flex_1">
          <img src="@/assets/images/哭.png" alt=""/>
          <p class="p1">抱歉，您还不是代理商</p>
          <p><span>3个月</span>内累计实际消费满<span>8000元</span>，才可</p>
          <p class="p2">申请成为代理商</p>
        </div>
		<div v-show="true" class="flex_2">
          <img src="@/assets/images/笑.png" alt=""/>
          <p class="p1">恭喜，您已满足条件</p>
          <p>您已满足申请代理商的条件，</p>
          <p class="p2">赶快去申请吧！</p>
		  <button @click="$router.push({path:'/hehuoren'})">马上申请</button>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { Icon, Tab, Tabs } from 'vant';
export default {
  components: {
    'van-icon': Icon,
    vanTab: Tab,
    vanTabs: Tabs,
  },
  data() {
    return {
      data: {},
      active: 0,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // async getData() {
    //   var id = this.$route.query.id;
    //   var res= await userinfo({id})
    //   console.log(res.data)
    //   this.data=res.data
    //   }
  }
}
</script>

<style scoped lang="scss">
.jfqd {
  height: 104px;
  width: 640px;
  margin: auto;
  align-items: center;
  img {
    width: 34px;
    height: 34px;
  }
}
.user {
  background: url("src/assets/images/user_bg.png") no-repeat top;
  background-size: 100% auto;
  overflow: hidden;
}
.head {
  margin: 35px 40px;
  margin-top: 105px;
  position: relative;
  .portrait {
    padding: 5px;
    background: #64c6f7;
    border-radius: 50%;
    img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
    }
  }
  .order {
    color: #fff;
    margin-left: 25px;
    .name {
      font-size: 40px;
    }
    .identity {
      font-size: 26px;
      padding: 2px 14px;
      background: #fff;
      border-radius: 30px;
      color: #2194e6;
      margin-left: 14px;
    }
    .id {
      margin-top: 10px;
      font-size: 28px;
    }
  }
  .setup {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
  .signIn {
    position: absolute;
    right: -38px;
    top: 74px;
    height: 56px;
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    font-size: 28px;
    padding-left: 30px;
    padding-right: 10px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border: 2px solid #6db6ff;
    border-right: 0;
    img {
      width: 29px;
    }
    p {
      margin: 0 4px 0 12px;
    }
    .arrow {
      font-size: 22px;
    }
  }
}
.block {
  margin: 25px 40px;
  background: #fff;
  border-radius: 30px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0 4px 20px #e6e6e6;
  .wallet {
    margin: 30px 0;
    // &:first-child {
    //   border-right: 1px solid #eee;
    // }
    img {
      width: 80px;
    }
    .text {
      margin-left: 25px;
      .num {
        font-size: 34px;
        font-weight: bold;
      }
      .txt {
        color: #939393;
        font-size: 24px;
      }
    }
  }
}
.column1 {
  .item {
    margin: 30px 0;
    text-align: center;
    flex: 1;
    img {
      width: 54px;
      height: 48px;
      margin: auto;
      margin-bottom: 10px;
    }
  }
}
.column2 {
  padding-top: 25px;
  padding-bottom: 25px;
  .item {
    width: 25%;
    margin: 25px 0;
    text-align: center;
    img {
      width: 45px;
      height: 50px;
      margin: auto;
      margin-bottom: 10px;
    }
  }
}
.banner {
  padding: 0 35px;
}
p {
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 25px;
}
</style>

<style lang="scss" >
.myicon {
  position: absolute;
  right: 0px;
  a {
    padding: 0 10px;
    font-size: 45px;
    color: #fff;
  }
}
.van-tabs__content {
  min-height: auto;
}
div /deep/ .van-tab--active {
  font-weight: 500;
  color: #ff4c23 !important;
}
.flex_1{  
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  img{
    width:50pt;
    height:50pt;
  }
  p{
	font-size: 13pt;
  }
  span{
	  color:#f00;
  }
  .p1{
    margin:15pt 0;
    font-size: 15pt;
  }
  .p2{
	margin:15pt 0;
  }
}
.flex_2{  
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  img{
    width:50pt;
    height:50pt;
  }
  p{
	font-size: 13pt;
  }
  .p1{
    margin:15pt 0;
    font-size: 15pt;
  }
  .p2{
	margin:15pt 0;
  }
  button{
	background:linear-gradient(to right,#FF462D,#FF9E3F);
	display: inline-block;
	width:50% !important;
	height:50pt;
	border-radius: 25pt !important;
  }
}
#hee{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flex22{
  display: flex;
  justify-content: space-between
}
</style>