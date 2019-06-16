import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
import store from '../store/store'
import { promises } from 'fs'
import { resolve } from 'url'

let config = {
  timeout: 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
}
if (process.env.NODE_ENV == 'development') {
  config.baseURL = '/api/'
} else if (process.env.NODE_ENV == 'production') {
  config.baseURL = 'http://quhiclub.com/api/'
}
const _axios = axios.create(config)

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    store.state.loading = false
    if (response.data.code == 200) {
      return response.data
    } else if (response.data.code == 401) {
      this.$router.push({ path: '/login' })
      // resolve(response.data)
    } else if (response.data.code == 110) {
      Toast('请先选择默认收货地址')
      this.$router.push({ path: '/consignee' })
      // resolve(response.data)
    } else {
      Toast(response.data.msg)
      return Promise.reject(response.data)
    }
    return response
  },
  function(err) {
    store.state.loading = false
    Toast(err.msg)
    return Promise.reject(err)
  }
)

Plugin.install = function(Vue, options) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export const get = (url = '', data = {}) => {
  data.token = store.state.userInfo
    ? store.state.userInfo
    : '22_fhK1Xznuw_ZR-oLePd36XNDD-MFmG2UFQp_DtQKBLOPGUGrguD-DiD4S0AOMm'
  return _axios.get(url, { params: data })
}
export const post = (url = '', data = {}) => {
  data.token = store.state.userInfo
    ? store.state.userInfo
    : '22_fhK1Xznuw_ZR-oLePd36XNDD-MFmG2UFQp_DtQKBLOPGUGrguD-DiD4S0AOMm'
  return _axios.post(url, data)
}

export default _axios
