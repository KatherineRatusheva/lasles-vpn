import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import './styles/style.scss';
import {i18n} from './helpers/i18n'
import { initializeApp } from "firebase/app";
import vClickOutside from 'v-click-outside'
import 'leaflet/dist/leaflet.css';

Vue.use(VueRouter, VueAxios, axios, vClickOutside)
Vue.config.productionTip = false

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD0R1x2p5aszf2C-bFXYJ7FYxorHAnPwZ8",
  authDomain: "laslesvpn-97c54.firebaseapp.com",
  databaseURL: "https://laslesvpn-97c54-default-rtdb.firebaseio.com",
  projectId: "laslesvpn-97c54",
  storageBucket: "laslesvpn-97c54.appspot.com",
  messagingSenderId: "1001301090465",
  appId: "1:1001301090465:web:aaba4668812d1b6411d0e0"
});

new Vue({
  firebaseApp,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')