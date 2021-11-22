import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token'),
    email: localStorage.getItem('user-email'),
    user: null,
    isLogin: false
  },

  getters: {
    LOGIN_STATE(state) {
      return state.isLogin
    }
  },

  actions: {
    getUser({commit}) {
      if(this.state.token) {
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyD0R1x2p5aszf2C-bFXYJ7FYxorHAnPwZ8', {
          idToken: this.state.token,
        }).then(res => {
          commit('AUTH_SUCSESS', res)
          commit('SIGN_IN')
        }).catch(error => {
          console.log(error);
        });
      }
    },

    toggleSignIn({commit}) {
      commit('SIGN_IN')
    },
    isLogOut({commit}) {
      commit('LOG_OUT')
    }
  },
  
  mutations: {
    AUTH_SUCSESS (state, payload){
      state.user = payload
    },
    SIGN_IN (state) {
      state.isLogin = true
    },
    LOG_OUT (state) {
      state.isLogin = false
    }
  }
  
})