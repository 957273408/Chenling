<template>
  <div>
    <van-field v-model="message"
               type="textarea"
               placeholder="快来分享你的经验吧！~~"
               :autosize='autosize' />
    <button>提交</button>
  </div>

</template>


<script>
import { Field, Button } from 'vant';
export default {
  components: {
    vanField: Field,
    vanButton: Button
  },
  data() {
    return {
      autosize: {
        minHeight: 276
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-field__control {
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  line-height: 25px;
}
button {
  display: block;
  margin: auto;
  width: 680px;
  height: 90px;
  background: rgba(33, 162, 230, 1);
  border-radius: 45px;
  font-size: 28px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
