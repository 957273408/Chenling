<template>
  <div class="wrap mod_address">
    <div class="item flex-center-y">
      <div class="title">收货地址：</div>
      <input type="text" placeholder="点击选择" readonly :value="data.province + ' ' + data.city + ' ' + data.district"  @click="show=true">
      <van-icon name="arrow" class="arrow"/>
    </div>
    <div class="item flex-center-y">
      <div class="title">门牌号：</div>
      <input type="text" placeholder="详细地址，例：16号楼5层501室" v-model="data.address">
    </div>
    <div class="item flex-center-y">
      <div class="title">联系人：</div>
      <input type="text" placeholder="请填写收货人的姓名" v-model="data.name">
    </div>
    <div class="item flex-center-y">
      <div class="title"></div>

      <div class="flex1" style="color:#000;">
        <van-radio-group v-model="data.famale" class="flex">
          <van-radio name="1" checked-color="#EF2C10">先生</van-radio>
          <van-radio name="2" class="radio" checked-color="#EF2C10">女士</van-radio>
        </van-radio-group>
      </div>


    </div>
    <div class="item flex-center-y">
      <div class="title">手机号：</div>
      <input type="number" placeholder="请填写收货人的手机号码" v-model="data.mobile">
    </div>
    <!-- <div class="checkbox_wrap">
      <van-checkbox v-model="data.is_default" checked-color="#EF2C10" @click="default_()">设置为默认地址</van-checkbox>
    </div> -->
    <div id='dizhi'  @click="default_()">
      <span class="radio" :class="{active:data.is_default==1}"> </span>
      <span>设置为默认地址</span>
    </div>
    <div class="button flex-center" @click="sub()"> {{this.$route.query.data?"修改":"添加"}}</div>

    <van-popup v-model="show" position="bottom">
      <van-area :area-list="site" @cancel="show=false" @confirm="changeAddress"/>
    </van-popup>
  </div>
</template>

<script>
import { Icon, RadioGroup, Radio, Checkbox, Area, Popup, Toast } from 'vant';
import { add_address, edit_address} from '@/axios/getData'
import util from '../../utils/utils.js'

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
        // name: '',
        // province: '',
        // city: '',
        // district: '',
        // address: '',
        // mobile: '',
        famale: 1,
        city: "",
        name: "",
        country: 0,
        district: "",
        is_default: 0,
        mobile: "",
        province: "",
        twon: "",
      },
      is_default: 1,
      address: [],
      site: util.site,
      show: false,
      changed:false
    }
  },
  created() {
    console.log(this.$route.query.data);
    if(this.$route.query.data.province==null){
      this.$route.query.data.province="";
    }
    this.data = {
      address_id: this.$route.query.data.address_id,
      name: this.$route.query.data.consignee,
      province: this.$route.query.data.province,
      city: this.$route.query.data.city,
      district: this.$route.query.data.district,
      address: this.$route.query.data.address,
      mobile: this.$route.query.data.mobile,
      is_default: this.$route.query.data.is_default,
      famale: String(this.$route.query.data.famale)
    }
    console.log(this.data)
    // this.data=this.$route.query.data;
    // if (this.$route.query.id) {
    //   this.getData()
    // }
  },
  watch:{
    data(){
      this.changed=true
      console.log(this.data)
    }
  },
  methods: {
    default_(){
      this.data.is_default=this.data.is_default==1?0:1;
      console.log(this.data)
    },
    getData() {
      this.$get('user/edit_address', {address_id: this.$route.query.id}).then((res) => {
        this.data = {
          address_id: this.$route.query.id,
          name: res.data.consignee,
          province: res.data.province,
          city: res.data.city,
          district: res.data.district,
          address: res.data.address,
          mobile: res.data.mobile,
          famale: '1'
        }
        this.is_default = res.data.is_default ? true : false
      })
    },
     // 地址变动
    changeAddress(val) {
      this.data.province = val[0].name
      this.data.city = val[1].name
      this.data.district = val[2].name
      this.show = false
    },
    // 保存
    // submit() {
    //   console.log(this.data);
    //   for(let i in this.data) {
    //     if(this.data[i] == '') {
    //       Toast('请信息检查是否填写完整')
    //       return false
    //     }
    //   }
    //   this.data.is_default = this.is_default ? '1' : '0'
    //   if (this.$route.query.id) {
    //     this.$post('api/user/edit_address', this.data).then((res) => {
    //       Toast('保存成功')
    //       this.$router.go(-1)
    //     })
    //   } else {
    //     this.$post('api/user/receiving_address', this.data).then((res) => {
    //       Toast('保存成功')
    //       this.$router.go(-1)
    //     })
    //   }
    // },
    sub(){
      if(!this.data.province&&!this.data.mobile&&!this.data.consignee){
        Toast('请输入完整的收货地址')
      }else if(!(/^1[3456789]\d{9}$/.test(this.data.mobile))){
        Toast('手机号码格式错误')
      }else{
        if(this.$route.query.data&&this.changed){
          edit_address(this.data).then((res) => {
            Toast('修改成功')
            this.$router.go(-1)
          })
        }else if(!this.$route.query.data){
          add_address(this.data).then((res) => {
            Toast('保存成功')
            this.$router.go(-1)
          })
        }else{
          Toast('修改成功')
          this.$router.go(-1)
        }
      }
    }
  }
}
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
  .flex_1 {
    span{
      color: #000 !important;
    }
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
.flex1{
  display: flex;
}
input::-webkit-input-placeholder{
  color:#999999;
}
#dizhi{
  display: flex;
  align-items: center;
  font-size: 0.48rem;
  color:#323233;
  .radio{
    display: inline-block;
    // vertical-align: middle;
    height: 13pt;
    width: 13pt;
    border:2px solid #323233;
    border-radius: 50%;
    margin-right: 10pt;
  }
  .active{
    background: url(src/assets/images/success_fill@2x.png) no-repeat;
    background-size: 100%;
    border-color:#fff !important;
  }
}
</style>
