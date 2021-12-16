<template>
  <div id="app">

    <div class="menu" @click="toggle">
      <input id="menu__toggle" type="checkbox">
      <label :class="[!isVisible ? 'menu__btn' : 'menu__btn-close']" for="menu__toggle">
        <span></span>
      </label>
      <nav :class="[!isVisible ? 'menu__box' : 'menu__box-open']">
        <ul v-for="item in linksMobile" :key='item.link'>
          <router-link :to="item.url">  <li class="menu__item">{{item.link}}</li>  </router-link>
        </ul>

        <div class="menu-user" v-if="LOGIN_STATE">
          <router-link to="/basket">
          <button class="header-auth__basket fas fa-shopping-basket"><div class="header-auth__basket-item" v-if="UPDATE_COUNT_BASKET">{{UPDATE_COUNT_BASKET}}</div></button>
          </router-link>
          <router-link to="/user">  <button class="fas fa-user-circle"></button>  </router-link>
        </div>

        <div class="menu-auth" v-else>
          <router-link to="/sign-in">  <button type="button" class="menu-auth__item-button">Sign In</button>  </router-link>
          <router-link to="/sign-up">  <button type="button" class="menu-auth__item-button">Sign Up</button>  </router-link>
        </div>
      </nav>
    </div>
    
    <header class="header">
      <div class="header-container">
        <router-link to="/">  <img class="header-container__logo" src="./image/logo.png" alt="logo LaslesVPN">  </router-link>
        <nav class="header-nav">
          <ul class="header-nav__list" v-for="link in links" :key='link'>
            <router-link :to="link">  <li class="header-nav__item">{{link}}</li>  </router-link>
          </ul>
        </nav>
        
        <div class="header-user" v-if="LOGIN_STATE">
          <router-link to="/basket">
          <button class="header-auth__basket fas fa-shopping-basket"><div class="header-auth__basket-item" v-if="UPDATE_COUNT_BASKET">{{UPDATE_COUNT_BASKET}}</div></button>
          </router-link>
          <router-link to="/user">  <div class="fas fa-user-circle"></div>  </router-link>
        </div>
        
        <div class="header-auth" v-else>
          <router-link to="/basket">  <button class="header-auth__basket fas fa-shopping-basket"></button>  </router-link>
          <router-link to="/sign-in">  <button class="header-auth__button-sign-in">Sign In</button>  </router-link>
          <router-link to="/sign-up">  <button class="header-auth__button-sign-up">Sign Up</button>  </router-link>
        </div>
        
        <div  class="header-locale">
          <a href="#" @click="setLocale('en')"> en </a>
          <a href="#" @click="setLocale('ru')"> ru </a>
        </div>
      </div>
    </header>
      
      <router-view />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      links: ['about', 'features', 'pricing', 'testimonials', 'help'],
      linksMobile: [
        {url: '/', link: 'main'},
        {url: 'about', link: 'about'},
        {url: 'features', link: 'features'},
        {url: 'pricing', link: 'pricing'},
        {url: 'testimonials', link: 'testimonials'},
        {url: 'help', link: 'help'}
      ],
      isVisible: false
    }
  },
  
  created() {
    this.$store.dispatch('getUser')
    this.$store.dispatch('getUsersBasket')
    if(this.$store.state.token) {
      this.$store.commit('SIGN_IN')
      this.$store.dispatch('toggleSignIn')
    } else {
      this.$store.commit('LOG_OUT')
      this.$store.dispatch('isLogOut')
    }
  },

  computed: {
    ...mapGetters([
      'LOGIN_STATE',
      'UPDATE_COUNT_BASKET'
    ])
  },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    },

    toggle(e) {
      if(e.target.id === "menu__toggle" || e.target.className === "menu__item" || e.target.nodeName === "BUTTON") {
        this.isVisible = !this.isVisible
      }
    }
  }

}
</script>