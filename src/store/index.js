import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoginShow: false,
    isRegisterShow: false,
    windowHeight: 0
  },
  mutations: {
    CHANGE_LOGIN_SHOW_STATUS(state, status) {
      state.isLoginShow = status
      state.isRegisterShow = false
    },
    CHANGE_REGISTER_SHOW_STATUS(state, status) {
      state.isRegisterShow = status
      state.isLoginShow = false
    },
    CHANGE_WINDOW_HEIGHT_STATUS(state, status) {
      state.windowHeight = status
    }
  },
  actions: {
    showLogin({ commit }, payload) {
      commit('CHANGE_LOGIN_SHOW_STATUS', payload)
    },
    showRegister({ commit }, payload) {
      commit('CHANGE_REGISTER_SHOW_STATUS', payload)
    },
    windowHeight({ commit }, payload) {
      commit('CHANGE_WINDOW_HEIGHT_STATUS', payload)
    }
  },
  modules: {
  }
})
