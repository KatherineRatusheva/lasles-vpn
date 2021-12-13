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
    requestUserModal: {},
    error: '',
    mapMarkers: [{}],
    dataUserId: localStorage.getItem('data-id'),
    itemBasket: null
  },

  getters: {
    LOGIN_STATE(state) {
      return state.isLogin
    },
    GET_REVIEWS(state) {
      return state.reviews
    },
    GET_MARKERS(state) {
      return state.mapMarkers
    },
    LOGIN_USER(state) {
      return state.user
    },
    ERROR(state) {
      return state.error
    },
    DATA_USER(state) {
      return state.dataUserId
    },
    UPDATE_BASKET(state) {
      return state.itemBasket
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
    getMarkersMap({commit}) {
      axios.get( apiUrls.getMarker )
        .then(response => {
            commit('GET_MARKERS', response.data)
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
        window.location.href = '/user'

      }).catch(error => {
        commit('ERROR_MESSAGE', error.response.data.error.message)
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
        window.location.href = '/user'

      }).catch(error => {
          console.log(error);
      });

      // add user in database
      axios.post( apiUrls.addUserData, {
        email: user.email,
      }).then(res => {
        localStorage.setItem('data-id', res.data.name);
      })

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
    },

    addBasket({commit}, item) {
      axios.patch(`https://laslesvpn-97c54-default-rtdb.firebaseio.com/users/${this.state.dataUserId}.json`, {
        basket: item
      }).then(response => {
        commit('ADD_BASKET', response.data.basket)
      }).catch(error => {
        console.log(error);
      })
    }

  },
  
  mutations: {
    SIGN_IN (state) {
      state.isLogin = true
      state.error = ''
    },
    LOG_OUT (state) {
      state.isLogin = false
    },
    GET_REVIEWS (state, payload) {
      state.reviews = payload
    },
    GET_MARKERS (state, payload) {
      state.mapMarkers = payload
    },
    LOGIN_SUCSESS (state, payload){
      state.user = payload
    },
    SEND_REQUEST (state, payload){
      state.requestUserModal = payload
    },
    ERROR_MESSAGE (state, payload){
      state.isLogin = false
      state.error = payload
    },
    ADD_BASKET (state, payload) {
      state.itemBasket = payload
    }
  }
  
})