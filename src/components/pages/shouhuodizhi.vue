<template>
  <div>
    <div class="list">
      <div class="item flex-between">
        <div class="left flex_1">
          <div class="column">
            <span class="name">林小七</span>
            <span class="phone">18888888888</span>
            <span class="default" v-if="is_default">默认</span>
          </div>
          <div class="address">广东省 深圳市 龙华新区 民治街道 塘水围二区53-1栋</div>
        </div>
        <div class="right flex-between">
          <img src="../../assets/images/address_mdi.png" alt="">
          <img src="../../assets/images/address_del.png" alt="">
        </div>
      </div>
    </div>
	<div class="button flex-center" @click="$router.push({path: '/mod_address'})"><span>+</span>新增地址</div>
  </div>
</template>

<script>
import { Icon, Dialog } from 'vant';
export default {
  components: {
    'van-icon': Icon
  },
  data() {
    return {
      is_default:true
    }
  },
}
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData() {
//       this.$post('user/address_list', {}).then((res) => {
//         this.data = res.data
//       })
//     },
//     del(id) {
//       Dialog.confirm({
//         title: '提示',
//         message: '删除地址后不可恢复！'
//       }).then(() => {
//         this.$post('user/del_address', {id: id}).then((res) => {
//           this.getData()
//         })
//       })
//     }
//   }
// }
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
      padding-right: 100px;
      .column {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height:50px;
        font-size: 32px;
        color: #201b18;
		font-weight: 700;
        .phone {
        margin-top: 5px;
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
