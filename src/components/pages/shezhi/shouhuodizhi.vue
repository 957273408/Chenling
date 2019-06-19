<template>
  <div>
    <div class="list">
      <div class="item flex-between"
           v-for="(item,index) in data"
           :key="index">
        <div class="left flex_1"
             @click="emitItem(item)">
          <div id="column">
            <span class="name">{{item.consignee}}</span>
            <span class="phone">{{item.mobile}}</span>
            <span class="default"
                  :style="{background:item.is_default==1?'#FF4C23':'#cccccc'}"
                  @click="default_(item.address_id)">默认</span>
          </div>
          <div class="address">{{item.province}} {{item.city}} {{item.twon}}</div>
        </div>
        <div class="right flex-between">
          <img src="@/assets/images/address_mdi.png"
               alt=""
               @click="$router.push({path: '/address',query:{data:item}})">
          <img src="@/assets/images/address_del.png"
               alt=""
               @click="del(item.address_id)">
        </div>
      </div>
    </div>
    <div class="button flex-center"
         @click="$router.push({path: '/address'})"><span>+</span>新增地址</div>
  </div>
</template>

<script>
import { Icon, Dialog, Toast } from 'vant';
import { shouhuodizhi, del_address, set_default } from '@/axios/getData'
export default {
  components: {
    'van-icon': Icon
  },
  data() {
    return {
      data: [],
      is_default: true
    }
  },
  created() {
    // let res = await shouhuodizhi()
    // console.log(res.data);
    this.getdata();
  },
  methods: {
    emitItem(e) {
      console.log(22);
      console.log(e);
      this.$emit('tochange', e)
    },
    async getdata(p = 1) {
      var id = this.$route.query.id;
      var res = await shouhuodizhi({ id, p })
      if(res.err) return
      var data_ = res.data;
      for (var i = 0; i < data_.length; i++) {
        if (data_[i].is_default) {
          [data_[0], data_[i]] = [data_[i], data_[0]];
        }
      }
      this.data = data_;
    },
    del(id) {
      Dialog.confirm({
        title: '提示',
        message: '删除地址后不可恢复！'
      }).then(() => {
        del_address({ id: id })
        var data_ = this.data;
        for (var i = 0; i < data_.length; i++) {
          if (data_[i].address_id == id) {
            data_.splice(i, 1);
          }
        }
      })
    },
    default_(id) {
      set_default({ id: id }).then(() => {
        Toast('默认地址设置成功');
        for (var i = 0; i < this.data.length; i++) {
          if (this.data[i].address_id == id) {
            var arr = this.data.splice(i, 1);
            this.data.unshift(arr[0]);
            this.data[0].is_default = 1;
            this.data[1].is_default = 0;
            //console.log(this.data)
          }
        }
      })
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
* {
  margin: 0;
  padding: 0;
}
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
      #column {
        display: flex;
        align-items: center;
        justify-content: unset !important;
        height: 50px;
        font-size: 32px;
        color: #201b18 !important;
        font-weight: 700;
        .phone {
          margin: 5px 20px 0;
          color: #201b18 !important;
        }
        .name {
          color: #201b18 !important;
        }
        .default {
          font-size: 18px;
          padding: 2px 14px;
          border-radius: 30px;
          background: #ff4c23;
          color: #fff;
          //   margin-left: 6px;
        }
      }
      .address {
        margin-top: 20px;
        color: #404040;
      }
    }
    .flex_1 {
      align-items: unset !important;
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
