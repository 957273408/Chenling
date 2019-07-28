import Vue from 'vue'
import axios from 'axios'
import { Toast } from 'vant'
import store from '../main'
import { promises } from 'fs'
import { resolve } from 'url'

let config = {
  timeout: 60 * 1000 // Timeout
  // withCredentials: true // Check cross-site Access-Control
}
if (process.env.NODE_ENV == 'development') {
  config.baseURL = '/api/'
} else if (process.env.NODE_ENV == 'production') {
  config.baseURL = 'http://ycs.rujiezhineng.net/'
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8;'
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
      Toast('请先登录')
      // alert(response.data.return_url)
      window.location.href = response.data.data.return_url
      // resolve(response.data)
    } else if (response.data.code == 110) {
      Toast('请先选择默认收货地址')
      this.$router.push({ path: '/consignee' })
      // resolve(response.data)
    } else {
      Toast(response.data.msg)
      response.data.err = true
      return response.data
    }
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
  data.token =
    store.state.userInfo.token ||
    '22_fhK1Xznuw_ZR-oLePd36XNDD-MFmG2UFQp_DtQKBLOPGUGrguD-DiD4S0AOMm'

  return _axios.get(url, { params: data })
}
export const post = (url = '', data = {}) => {
  // store.state.userInfo.token ||
  data.token =
    store.state.userInfo.token ||
    '22_fhK1Xznuw_ZR-oLePd36XNDD-MFmG2UFQp_DtQKBLOPGUGrguD-DiD4S0AOMm'

  return _axios.post(url, data)
}

// function upImg(data={}){
//   data.token =
//     store.state.userInfo.token ||
//     '22_fhK1Xznuw_ZR-oLePd36XNDD-MFmG2UFQp_DtQKBLOPGUGrguD-DiD4S0AOMm'
//   // return _axios.post({
//   //   url:'api/upload/uploadImg',
//   // })

// }

Vue.prototype.$toast = Toast
 function upImg (data = {}, headers = {}, loading = true) {
  return new Promise((resolve, reject) => {
    data.token =
    store.state.userInfo.token ||
    '22_fhK1Xznuw_ZR-oLePd36XNDD-MFmG2UFQp_DtQKBLOPGUGrguD-DiD4S0AOMm'  
    headers['Content-Type'] = 'multipart/form-data'
    axios({
      url: 'http://ycs.rujiezhineng.net/api/upload/uploadImg',
      method: 'post',
      data: data,
      headers: headers
    }).then(response => {
      if (response.data.code == 200) {
        resolve(response.data)
      } else if (response.data.code == 408) {
        // Toast('请先登录')
        // this.$router.push({path: '/login'})
        window.location.href = response.data.msg

        // resolve(response.data)
      }else if(response.data.code == 401){
        resolve(response) 
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
// Vue.prototype.$post = post_
Vue.prototype.$upImg = upImg
export default _axios



