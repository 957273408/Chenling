<template>
  <div>
    <van-search shape='round'
                background='none'
                placeholder="搜索亿长寿精选好物"
                v-model="value" />
    <div class="hotsearch">
      <div class="tip">热门搜索</div>
      <ul>
        <li>感冒发烧</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Search, } from 'vant';
export default {
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem,
    'van-search': Search,
  },
}
</script>

<style lang="scss" scoped>
/deep/ .van-search {
  background: rgba(242, 242, 242, 1);
  border-radius: 40px;
}
.hotsearch {
  width: 690px;
  margin: auto;
  .tip {
    font-size: 28px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
    li {
      margin-top: 20px;
      margin-right: 20px;
      width: 190px;
      height: 63px;
      background: rgba(246, 246, 246, 1);
      border-radius: 32px;
      font-size:26px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:63px;
      text-align: center;
    }
  }
}
</style>
<style >
.van-search .van-cell {
  background-color: #f2f2f2;
  height: 80px;
  align-items: center;
}
</style>
