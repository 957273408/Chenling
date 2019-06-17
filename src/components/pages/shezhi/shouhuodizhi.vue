<template>
  <div>
    <div class="list">
      <div class="item flex-between" v-for="(item,index) in data" :key="index">
        <div class="left flex_1">
          <div class="column">
            <span class="name">{{item.consignee}}</span>
            <span class="phone">{{item.mobile}}</span>
            <span class="default" :style="{background:item.is_default==1?'#FF4C23':'#fff'}">默认</span>
          </div>
          <div class="address">{{item.province}} {{item.city}} {{item.twon}}</div>
        </div>
        <div class="right flex-between">
          <img src="@/assets/images/address_mdi.png" alt="" @click="$router.push({path: '/address',query:{data:item}})">
          <img src="@/assets/images/address_del.png" alt="" @click="del(item.address_id)">{{item.address_id }}
        </div>
      </div>
    </div>
	<div class="button flex-center" @click="$router.push({path: '/address'})"><span>+</span>新增地址</div>
  </div>
</template>

<script>
import { Icon, Dialog } from 'vant';
import { shouhuodizhi,del_address } from '@/axios/getData'
export default {
  components: {
    'van-icon': Icon
  },
  data() {
    return {
      data:[],
      is_default:true
    }
  },
  created(){
    // let res = await shouhuodizhi()
    // console.log(res.data);
    this.getdata();
  },
  methods:{
    async getdata( p = 1) {
      var id = this.$route.query.id;
      var res =  await shouhuodizhi({id,p})
      console.log(res.data);
      var data_=res.data;
      for(var i=0;i<data_.length;i++){
        if(data_[i].is_default){
          [data_[0],data_[i]]=[data_[i],data_[0]];
        }
      }
      this.data=data_;
    },
    del(id) {
      Dialog.confirm({
        title: '提示',
        message: '删除地址后不可恢复！'
      }).then(del_address({id:id}).then(()=>{
        
      }
      ))
      }
  // }
  },
  // created() {
  //   this.getData()
  // },
  // methods: {
  //   getData() {
  //     this.$post('user/address_list', {}).then((res) => {
  //       this.data = res.data
  //     })
  //   },
  //   del(id) {
  //     Dialog.confirm({
  //       title: '提示',
  //       message: '删除地址后不可恢复！'
  //     }).then(() => {
  //       this.$post('user/del_address', {id: id}).then((res) => {
  //         this.getData()
  //       })
  //     })
  //   }
  // }
}
</script>

<style scoped lang="scss">
*{margin:0;padding:0;}
.list {
  padding: 0 30px;
  background: #fff;
  margin-bottom: 150px;
  .item {
    padding: 40px 0;
    border-bottom: 1px solid #eee;
    .left {
      overflow: hidden;
      padding-right: 10px;
      .column {
		display: flex;
		align-items: center;
		// justify-content: space-around;
		height:50px;
        font-size: 32px;
        color: #201b18;
		font-weight: 700;
        .phone {
        margin: 5px 20px 0;
        }
        .default {
          font-size: 18px;
          padding: 2px 14px;
          border-radius: 30px;
          background:#FF4C23;
          color: #fff;
        //   margin-left: 6px;
        }
      }
      .address {
        margin-top: 20px;
        color: #404040;
      }
    }
    .right {
      width: 170px;
      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
.button {
  position: fixed;
  bottom: 30px;
  left: 4%;
  width: 92%;
  color: #f00;
  height: 90px;
  border-radius: 60px;
  font-size: 38px;
  box-shadow: 0 4px 16px #b3edf6;
  span {
    font-size: 60px;
    margin-right: 30px;
    font-weight: 100;
  }
}
</style>
