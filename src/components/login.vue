<template>
  <div class="login">正在登录... </div>
</template>


<script>
import { Toast } from 'vant'
import { login } from '@/axios/getData.js'
export default {
  created() {
    this.login()
  },
  methods: {
    async login() {
      let res = await login({ code: this.$route.query.code })
      this.$store.commit('userUpdate', res.data)
      this.$router.push({
        path: '/'
      })
    }
  },
  beforeCreate() {
    // document.getElementsByTagName("body")[0].className="join_buy";
  },
  beforeDestroy() {
    // document.body.removeAttribute("class","join_buy");
  }
}
</script>

<style lang="scss" scoped>
.login {
  font-size: 22px;
  height: 100vh;
  line-height: 80vh;
  text-align: center;
}
</style>
