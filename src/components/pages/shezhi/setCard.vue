<template>
  <div class="bindSettings">
    <div class="list">
      
      <div class="item flex-center-y">
        <div class="title">选择银行：</div>
         <input type="text" placeholder="点击选择"> <!--v-model="data.bankname" readonly @click="show = true" -->
        <van-icon name="arrow" class="arrow" />
      </div>
      
      <div class="item flex-center-y">
        <div class="title">银行卡号：</div>
         <input type="text" placeholder="请输入银行卡号"> <!-- v-model="data.banknum" -->
      </div>
      <div class="item flex-center-y">
        <div class="title">确认卡号：</div>
        <input type="text" placeholder="请再次输入银行卡号">
      </div>
      <div class="item flex-center-y">
        <div class="title">开户所在地：</div>
         <input type="text" placeholder="点击选择">  <!-- readonly v-model="data.place" -->
         <van-icon name="arrow" class="arrow" />
      </div>
      <div class="item flex-center-y">
        <div class="title">开户行：</div>
        <input type="text" placeholder="请输入开户支行"> <!--   v-model="data.place" -->
      </div>
      <div class="button flex-center" @click="submit">添加</div>
      <div class="button flex-center disabled">删除</div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker :columns="columns" show-toolbar  @confirm="confirm" @cancel="cancel"/>
    </van-popup>
  </div>
</template>

<script>
import { Icon, Picker, Popup, Toast } from 'vant';
export default {
  components: {
    'van-icon': Icon,
    'van-picker': Picker,
    'van-popup': Popup
  },
  data() {
    return {
      show: false,
      columns: [
        {
          text: '工商银行'
        },
        {
          text: '建设银行'
        },
        {
          text: '中国银行'
        },
        {
          text: '交通银行'
        },
        {
          text: '农业银行'
        },
        {
          text: '招商银行'
        },
        {
          text: '平安银行'
        },
        {
          text: '浦发银行'
        },
        {
          text: '邮政储蓄银行'
        }
      ],
      data: {
        banknum: ''
      }
    }
  },
  methods: {
    submit() {
      this.$post('user/bankadd', this.data).then((res) => {
        Toast('添加成功')
        this.$router.back()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  padding: 30px 40px;
}
.item {
  height: 100px;
  border-bottom: 1px solid #ebebeb;
  font-size: 32px;
  .title {
    width: 200px;;
  }
  input {
    flex: 1;
  }
  .code {
    width: 170px;
    height: 50px;
    background: linear-gradient(to right, #21cce6 , #2194e6);
    font-size: 22px;
    border-radius: 60px;
    color: #fff;
  }
  .arrow {
    color: #afafaf;
  }
}
.button {
  margin: 40px auto;
  background: linear-gradient(to right, #FF462D , #FF9E3F);
  color: #fff;
  height: 90px;
  border-radius: 60px;
  font-size: 38px;
  box-shadow: 0 4px 16px #b3edf6;
}
.disabled {
  background: #eee;
  color: #333;
  box-shadow: 0 4px 16px #eee;
}
</style>
