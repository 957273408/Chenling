import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    userInfo: ''
  },
  mutations: {
    userUpdate (state, value) {
      state.userInfo = value
    },
  }
})