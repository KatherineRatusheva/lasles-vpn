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
    userId: localStorage.getItem('user-id'),
    userBasket: [],
    countBusket: 0
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
      return state.userId
    },
    UPDATE_BASKET(state) {
      if(state.userBasket === null) {
        return state.userBasket = []
      } else return state.userBasket
    },
    UPDATE_COUNT_BASKET(state) {
      return state.countBusket
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
        localStorage.setItem('user-id', res.data.localId)
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
        localStorage.setItem('user-token', res.data.idToken)
        localStorage.setItem('user-email', res.data.email)
        localStorage.setItem('user-id', res.data.localId)
        commit('SIGN_IN')
        window.location.href = '/user'

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
    },

    addItemBasket({commit}, item) {
      axios.patch(`https://laslesvpn-97c54-default-rtdb.firebaseio.com/users/${this.state.userId}.json`, {
        selectPlan: [...this.state.userBasket, item]
      }).then(response => {
        commit('ADD_BASKET', response.data.selectPlan)
      }).catch(error => {
        console.log(error);
      })
    },

    getUsersBasket({commit}) {
      axios.get(`https://laslesvpn-97c54-default-rtdb.firebaseio.com/users/${this.state.userId}.json`
      ).then(response => {
        commit('GET_USERS_BASKET', response.data.selectPlan)
      }).catch(error => {
        console.log(error);
      })
    },

    deleteItemBasket({commit}, newBasket) {
      axios.patch(`https://laslesvpn-97c54-default-rtdb.firebaseio.com/users/${this.state.userId}.json`, {
        selectPlan: newBasket
      }).then(response => {
        commit('REMOVE_BASKET', response.data.selectPlan)
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
    GET_USERS_BASKET (state, payload) {
      state.userBasket = payload
      state.countBusket = payload.length
    },
    ADD_BASKET (state, payload) {
      state.userBasket = payload
      state.countBusket ++
    },
    REMOVE_BASKET (state, payload) {
      state.userBasket = payload
      state.countBusket --
    },
  }
  
})