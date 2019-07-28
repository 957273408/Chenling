<template>
  <div id="app">
    <router-view />
    <van-loading type="spinner" color="white" v-show="$store.state.loading"/>
  </div>
</template>

<script>
import { Loading } from 'vant';
export default {
  name: 'App',
  components: {
    'van-loading': Loading
  },
  created () {
    // console.log(this.$store.state.loading)
  }
}
</script>
<style>
#app {
  width:100% !important;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app .van-nav-bar .van-icon {
}
#app .van-nav-bar {
  height: 100px;
  line-height: 100px;
  background-color: #15181d;
  letter-spacing: 2px;
}
#app .van-loading {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5);
}

::-ms-input-placeholder {
  color: #fff;
}
::-webkit-input-placeholder {
  color: #fff;
}
::-moz-placeholder {
  color: #fff;
}
#app .van-hairline--bottom::after {
  border: none;
}
#app .van-hairline--top-bottom::after {
  border: none;
}
.my_deal .van-tab {
  background: #2c4062;
  color: #fff;
}
.my_deal .van-tab--active {
  color: #f44;
}
.wallet .van-tab {
  background: #394b6d;
  color: #fff;
}
/*适配iphone5 320px */
@media screen and (max-width: 320px) {
    .fs-5{font-size: 8pt !important;}
    .pd-5{padding:0 20pt !important;}
    .flex-5{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      /* justify-content: space-between */
    }
    .p-5{
      display: inline-block;
      margin: 3pt 0;
    }
    .mt-5{margin-top:-260px !important;}
}
@keyframes myfirst{
	0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
}
</style>
