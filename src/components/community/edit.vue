<template>
  <div>
    <van-field v-model="message"
               type="textarea"
               placeholder="快来分享你的经验吧！~~"
               :autosize='autosize' />
    <button @click="sumbit">提交</button>
  </div>

</template>


<script>
import { meMessage } from '@/axios/getData.js'
import { Field, Button, } from 'vant';

export default {
  components: {
    vanField: Field,
    vanButton: Button
  },
  data() {
    return {
      autosize: {
        minHeight: 276
      },
      message: ''
    }
  },
  methods: {
    async sumbit() {
      let res = await meMessage({ id: this.$route.query.id, content: this.message })
      this.$toast(res.data)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-field__control {
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
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
