<template>
  <div class="login">正在登录... </div>
</template>


<script>
import { Toast } from 'vant'
export default {
  created() {
    this.login()
  },
  methods: {
    login() {
      this.$store.commit('userUpdate', this.$route.query.code)
      this.$router.push({ path: '/' })
      // this.$post('login/index', {code: this.$route.query.code}).then((res) => {
      //   Toast('登录成功')
      //   this.$store.commit('userUpdate', res.data)
      //   this.$router.push({
      //     path: '/'
      //   })
      // })
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
