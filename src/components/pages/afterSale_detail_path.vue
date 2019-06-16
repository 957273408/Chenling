<template>
  <div>
    <van-steps direction="vertical" :active="0" active-color="#ef2121">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p class="text">请将商品寄到退货地址，然后填写快递单号</p>
        <p class="time">2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p class="text">请将商品寄到退货地址，然后填写快递单号</p>
        <p class="time">2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p class="text">请将商品寄到退货地址，然后填写快递单号</p>
        <p class="time">2016-07-10 09:30</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import { Step, Steps } from 'vant';
export default {
  components: {
    'van-steps': Steps,
    'van-step': Step
  },
}
</script>

<style scoped lang="scss">
h3 {
  font-size: 36px;
  font-weight: 100;
  color: #181818;
}
.text {
  color: #181818;
  margin: 15px 0;
}
.time {
  font-size: 22px;
  color: #777;
}
</style>