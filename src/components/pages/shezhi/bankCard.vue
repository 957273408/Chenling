<template>
  <div class="backCrad">
    <div class="wrap">
      <div class="con">
        <div class="flex-between">
          <div class="name">中国工商银行</div>
          <div class="flex-center r">
            <div class="label flex-center">储蓄卡</div>
            <!-- <img src="@/assets/images/形状34拷贝82@2x.png" alt="" class="del"> -->
          </div>
        </div>
        <div class="number">6222  ****  ****  0732</div>
      </div>
      <router-link to="backCradInput" class="button flex-center">更换银行卡</router-link>
    </div>
    <div class="wrap">
      <div class="con disabled">
        <div class="flex-between">
          <div class="name">未添加银行卡</div>
        </div>
        <div class="number">****  ****  ****  ****</div>
      </div>
      <router-link to="backCradInput" class="button flex-center">添加银行卡</router-link>
    </div>
  </div>
</template>

<script>
// import { Dialog } from 'vant';
export default {
  data() {
    return {
      data: []
    }
  },
}
//   created() {
//     this.getData()
//   },
//   methods: {
//     getData() {
//       this.$post('user/bankList', {}).then((res) => {
//         this.data = res.data
//       })
//     },
//     del(id) {
//       Dialog.confirm({
//         title: '确认删除？',
//         message: '删除后不可恢复'
//       }).then(() => {
//         this.$post('user/delBank', {id: id}).then((res) => {
//           this.getData()
//         })
//       })
//     }
//   }
// }
</script>

<style scoped lang="scss">
.backCrad {
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}
.con {
  width: 90%;
  height: 350px;
  margin: 50px auto;
  background: url('src/assets/images/形状34拷贝82@2x.png') no-repeat top;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 40px;
  color: #fff;
  .label {
    width: 100px;
    height: 40px;
    border-radius: 30px;
    background: #fff;
    color: #FF4C23;
    font-size: 22px;
  }
  .name {
    font-size: 32px;
  }
  .number {
    font-size: 60px;
    text-align: center;
    margin-top: 50px;
  }
}
.disabled {
  background: url('src/assets/images/backCrad_bg2.png') no-repeat top;
  background-size: 100% 100%;
}
.button {
  width: 90%;
  height: 90px;
  border-radius: 60px;
  color: #FF4C23;
  border: 2px solid #FF4C23;
  margin: 0 auto;
  font-size: 36px;
}
.r {
  position: relative;
}
.del {
  position: absolute;
  width: 30px;
  right: -30px;
  top: -30px;
}
</style>
