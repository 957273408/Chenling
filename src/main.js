// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './axios/index'
import router from './router'
import 'lib-flexible'
import store from './store/store'
import axios from './axios/index'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import './assets/css/index.css'
require('es6-promise').polyfill()
Es6Promise.polyfill()
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // if (to.query.authtoken && to.query.authuid) {
  //   localStorage.setItem('authtoken', to.query.authtoken)
  //   localStorage.setItem('authuid', to.query.authuid)
  // }
  // if (store.state.userInfo === null) {
  //   if(to.path == '/login' || to.path == '/reset' || to.path == '/register'){
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // } else {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // }
})

/* eslint-disable no-new */
const vue= new Vue({
  el: '#app',
  store,
  router,
  axios,
  components: { App },
  template: '<App/>'
})

export default vue.$store