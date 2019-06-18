import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    userInfo: {
      user_id: '3726',
      token: '22_fhK1Xznuw_ZR-oLePd36XNDD-MFmG2UFQp_DtQKBLOPGUGrguD-DiD4S0AOMm'
    }
  },
  mutations: {
    userUpdate(state, value) {
      state.userInfo = value
    }
  }
})
