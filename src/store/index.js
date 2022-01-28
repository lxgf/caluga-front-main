import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoginShow: false,
    isRegisterShow: false,
    isLogin: false,
    name: '',
    surname: ''
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
    CHANGE_LOGIN_STATUS(state, status) {
      state.isLogin = status
    },
    CHANGE_NAME(state, name) {
      state.name = name
    },
    CHANGE_SURNAME(state, surname) {
      state.surname = surname
    },
  },
  actions: {
    showLogin({ commit }, payload) {
      commit('CHANGE_LOGIN_SHOW_STATUS', payload)
    },
    showRegister({ commit }, payload) {
      commit('CHANGE_REGISTER_SHOW_STATUS', payload)
    },
    login({ commit }, payload){
      commit('CHANGE_LOGIN_STATUS', payload)
    },
    changeName({ commit }, payload){
      commit('CHANGE_NAME', payload)
    },
    changeSurname({ commit }, payload){
      commit('CHANGE_SURNAME', payload)
    },
  },
  modules: {
  }
})
