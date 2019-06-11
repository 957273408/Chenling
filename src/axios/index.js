import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'


axios.defaults.baseURL = 'http://quhiclub.com/api/'
// axios.defaults.baseURL = 'http://qh.thirmen.com/api/'
// axios.defaults.baseURL = '/api/'
Vue.prototype.axios = axios
// axios.defaults.baseURL = Vue.prototype.HOST
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8; '
export function get (url, params = {}, loading = true) {
  return new Promise((resolve, reject) => {
    if (loading) {
      this.$store.state.loading = true
    }
    axios.get(url, {
      params: params
    }).then(response => {
      this.$store.state.loading = false
      if (response.data.code == 200) {
        resolve(response.data)
      } else if (response.data.code == 401) {
        this.$router.push({path: '/login'})
        // resolve(response.data)
      } else if (response.data.code == 110) {
        Toast('请先选择默认收货地址')
        this.$router.push({path: '/consignee'})
        // resolve(response.data)
      } else {
        Toast(response.data.msg)
        reject(response.data)
      }
    }).catch(err => {
      this.$store.state.loading = false
      Toast(err.msg)
      reject(err)
    })
  })
}

export function post (url, data = {}, headers = {}, loading = true) {
  return new Promise((resolve, reject) => {
    if (loading) {
      this.$store.state.loading = true
    }
    headers['Content-Type'] = 'application/json; charset=UTF-8'
    axios({
      url: url,
      method: 'post',
      data: data,
      headers: headers
    }).then(response => {
      this.$store.state.loading = false
      if (response.data.code == 200) {
        resolve(response.data)
      } else if (response.data.code == 401) {
        Toast('请先登录')
        // this.$router.push({path: '/login'})
        // resolve(response.data)
      } else {
        Toast(response.data.msg)
        reject(response)
      }
    }, err => {
      this.$store.state.loading = false
      Toast(err.msg)
      reject(err)
    })
  })
}

export function upImg (data = {}, headers = {}, loading = true) {
  return new Promise((resolve, reject) => {
    if (loading) {
      this.$store.state.loading = true
    }
    headers['Content-Type'] = 'multipart/form-data'
    axios({
      url: 'upload',
      method: 'post',
      data: data,
      headers: headers
    }).then(response => {
      this.$store.state.loading = false
      if (response.data.code == 200) {
        resolve(response.data)
      } else if (response.data.code == 408) {
        // Toast('请先登录')
        // this.$router.push({path: '/login'})
        window.location.href = response.data.msg

        // resolve(response.data)
      } else {
        Toast(response.data.msg)
        reject(response)
      }
    }, err => {
      this.$store.state.loading = false
      Toast(err.msg)
      reject(err)
    })
  })
}

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$upImg = upImg
export default {}