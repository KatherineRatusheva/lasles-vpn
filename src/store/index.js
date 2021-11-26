import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {apiUrls} from '../apiUrls.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token'),
    email: localStorage.getItem('user-email'),
    user: null,
    isLogin: false,
    reviews: [{}],
    requestUserModal: {}
  },

  getters: {
    LOGIN_STATE(state) {
      return state.isLogin
    },
    GET_REVIEWS(state) {
      return state.reviews
    },
    LOGIN_USER(state) {
      return state.user
    }
  },

  actions: {
    getUser({commit}) {
      if(this.state.token) {
        axios.post( apiUrls.getUser, {
          idToken: this.state.token,
        }).then(res => {
          commit('LOGIN_SUCSESS', res)
          commit('SIGN_IN')
        }).catch(error => {
          console.log(error);
        });
      }
    },

    getReviews({commit}) {
      axios.get( apiUrls.getReviews)
        .then(response => {
            commit('GET_REVIEWS', response.data)
        });
    },

    toggleSignIn({commit}) {
      commit('SIGN_IN')
    },
    isLogOut({commit}) {
      commit('LOG_OUT')
    },

    loginUser({commit}, user) {
      axios.post( apiUrls.signInUrl, {
          email: user.email,
          password: user.password,
          returnSecureToken: true
      }).then(res => {
        commit('LOGIN_SUCSESS', res.data)
        localStorage.setItem('user-token', res.data.idToken);
        localStorage.setItem('user-email', res.data.email)
        commit('SIGN_IN')

      }).catch(error => {
          console.log(error);
      })
    },

    registerUser({commit}, user) {
      axios.post( apiUrls.registerUrl, {
          email: user.email,
          password: user.password,
          returnSecureToken: true
      }).then(res => {
        commit('LOGIN_SUCSESS', res.data)
        localStorage.setItem('user-token', res.data.idToken);
        localStorage.setItem('user-email', res.data.email)
        commit('SIGN_IN')

      }).catch(error => {
          console.log(error);
      });
    },

    sendRequest({commit}, dataUserModal) {
      axios.post( apiUrls.sendRequest, {
        name: dataUserModal.name,
        phone: dataUserModal.phone,
        selectPlan: dataUserModal.selectPlan

        }).then(response => {
          commit('SEND_REQUEST', response)
          dataUserModal.name = '';
          dataUserModal.phone = '';

        }).catch(error => {
          console.log(error);
      })
    }
  },
  
  mutations: {
    SIGN_IN (state) {
      state.isLogin = true
    },
    LOG_OUT (state) {
      state.isLogin = false
    },
    GET_REVIEWS (state, payload) {
      state.reviews = payload
    },
    LOGIN_SUCSESS (state, payload){
      state.user = payload
    },
    SEND_REQUEST (state, payload){
      state.requestUserModal = payload
    },
  }
  
})