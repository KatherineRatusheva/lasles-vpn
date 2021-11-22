<template>
  <div id="app">

    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox">
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul class="menu__box">
        <router-link to="/">  <li class="menu__item">Main</li>  </router-link>
        <router-link to="/about">  <li class="menu__item">About</li>  </router-link>
        <router-link to="/features">  <li class="menu__item">Features</li>  </router-link>
        <router-link to="/pricing">  <li class="menu__item">Pricing</li>  </router-link>
        <router-link to="/testimonials">  <li class="menu__item">Testimonials</li>  </router-link>
        <router-link to="/help">  <li class="menu__item">Help</li>  </router-link>
        <router-link to="/sign-in">  <button type="button" class="menu__item-button">Sign In</button>  </router-link>
        <router-link to="/sign-up">  <button type="button" class="menu__item-button">Sign Up</button>  </router-link>
      </ul>
    </div>
    
    <header class="header">
      <div class="header-container">
        <router-link to="/">  <img class="header-container__logo" src="./image/Logo.png" alt="Logo">  </router-link>

        <nav class="header-nav">
          <ul class="header-nav__list">
            <router-link to="/about">  <li class="header-nav__item">About</li>  </router-link>
            <router-link to="/features">  <li class="header-nav__item">Features</li>  </router-link>
            <router-link to="/pricing">  <li class="header-nav__item">Pricing</li>  </router-link>
            <router-link to="/testimonials">  <li class="header-nav__item">Testimonials</li>  </router-link>
            <router-link to="/help">  <li class="header-nav__item">Help</li>  </router-link>
          </ul>
        </nav>
        <router-link to="/sign-in" v-if="LOGIN_STATE"><div class="header-auth-user"></div>  </router-link>
        
        <div class="header-auth" v-else>
          <router-link to="/sign-in">  <button class="header-auth__button-sign-in">Sign In</button>  </router-link>
          <router-link to="/sign-up">  <button class="header-auth__button-sign-up">Sign Up</button>  </router-link>
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
  
  created() {
    this.$store.dispatch('getUser')
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
    ])
  }

}
</script>