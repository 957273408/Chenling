<template>
  <div class="wrap mod_address">
    <div class="item flex-center-y">
      <div class="title">收货地址：</div>
      <input type="text" placeholder="点击选择">
       <!-- readonly :value="data.province !== '' ? data.province + ' ' + data.city + ' ' + data.district : ''"  @click="show=true" -->
      <van-icon name="arrow" class="arrow"/>
    </div>
    <div class="item flex-center-y">
      <div class="title">门牌号：</div>
      <input type="text" placeholder="详细地址，例：16号楼5层501室" >
      <!-- v-model="data.address" -->
    </div>
    <div class="item flex-center-y">
      <div class="title">联系人：</div>
      <input type="text" placeholder="请填写收货人的姓名" >
      <!-- v-model="data.name" -->
    </div>
    <div class="item flex-center-y">
      <div class="title"></div>
      <div class="flex_1">
        <van-radio-group class="flex" v-model="data.famale">
          <van-radio name="1" checked-color="#EF2C10">先生</van-radio>
          <van-radio name="2" class="radio" checked-color="#EF2C10">女士</van-radio>
        </van-radio-group>
      </div>
    </div>
    <div class="item flex-center-y">
      <div class="title">手机号：</div>
      <input type="number" placeholder="请填写收货人的手机号码">
       <!-- v-model="data.mobile" -->
    </div>
    <div class="checkbox_wrap">
      <van-checkbox checked-color="#EF2C10" v-model="is_default">设置为默认地址</van-checkbox>
       <!--  -->
    </div>
    <div class="button flex-center">添加</div>
 <!-- @click="submit" -->
    <van-popup position="bottom">
       <!-- v-model="show" -->
      <van-area/>
       <!-- @cancel="show=false" @confirm="changeAddress"     :area-list="site"-->
    </van-popup>
  </div>
</template>

<script>
import { Icon, RadioGroup, Radio, Checkbox, Area, Popup, Toast } from 'vant';
import { address } from '@/axios/getData'

// import util from '../utils/utils.js'
export default {
  components: {
    'van-icon': Icon,
    'van-radio-group': RadioGroup,
    'van-radio': Radio,
    'van-checkbox': Checkbox,
    'van-area': Area,
    'van-popup': Popup
  },
  data() {
    return {
      checked: false,
      data: {
        name: '',
        province: '',
        city: '',
        district: '',
        address: '',
        mobile: '',
        famale: '1'
      },
      is_default: 0,
      address: [],
      // site: util.site,
      show: false
    }
  },
  async created() {
    let res = await address()
		console.log(res.data);
  }
}

//   created() {
//     if (this.$route.query.id) {
//       this.getData()
//     }
//   },
//   methods: {
//     getData() {
//       this.$get('user/edit_address', {address_id: this.$route.query.id}).then((res) => {
//         this.data = {
//           address_id: this.$route.query.id,
//           name: res.data.consignee,
//           province: res.data.province,
//           city: res.data.city,
//           district: res.data.district,
//           address: res.data.address,
//           mobile: res.data.mobile,
//           famale: '1'
//         }
//         this.is_default = res.data.is_default ? true : false
//       })
//     },
//      // 地址变动
//     changeAddress(val) {
//       this.data.province = val[0].name
//       this.data.city = val[1].name
//       this.data.district = val[2].name
//       this.show = false
//     },
//     // 保存
//     submit() {
//       for(let i in this.data) {
//         if(this.data[i] == '') {
//           Toast('请信息检查是否填写完整')
//           return false
//         }
//       }
//       this.data.is_default = this.is_default ? '1' : '0'
//       if (this.$route.query.id) {
//         this.$post('user/edit_address', this.data).then((res) => {
//           Toast('保存成功')
//           this.$router.go(-1)
//         })
//       } else {
//         this.$post('user/receiving_address', this.data).then((res) => {
//           Toast('保存成功')
//           this.$router.go(-1)
//         })
//       }
//     }
//   }
// }
</script>

<style scoped lang="scss">
.wrap {
  min-height: 100vh;
  background: #fff;
  padding: 0 35px;
}
.item {
  height: 110px;
  border-bottom: 1px solid #e1e1e1;
  font-size: 32px;
  .title {
    width: 180px;
  }
  input {
    flex: 1;
  }
  .radio {
    margin-left: 50px;
  }
}
.checkbox_wrap {
  margin: 30px 10px;
  font-size: 36px;
}
.button {
  margin: 44px auto;
  background: linear-gradient(to right, #FF462D , #FF9E3F);
  color: #fff;
  height: 90px;
  border-radius: 60px;
  font-size: 38px;
  box-shadow: 0 4px 16px #b3edf6;
}
input::-webkit-input-placeholder{
  color:#A0A0A0;
}
</style>
