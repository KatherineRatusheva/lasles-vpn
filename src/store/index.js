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
    reviews: [{}]
  },

  getters: {
    LOGIN_STATE(state) {
      return state.isLogin
    },
    GET_REVIEWS(state) {
      return state.reviews
    }
  },

  actions: {
    getUser({commit}) {
      if(this.state.token) {
        axios.post( apiUrls.getUser, {
          idToken: this.state.token,
        }).then(res => {
          commit('AUTH_SUCSESS', res)
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
    }
  },
  
  mutations: {
    AUTH_SUCCESS (state, payload){
      state.user = payload
    },
    SIGN_IN (state) {
      state.isLogin = true
    },
    LOG_OUT (state) {
      state.isLogin = false
    },
    GET_REVIEWS (state, payload) {
      state.reviews = payload
    }
  }
  
})