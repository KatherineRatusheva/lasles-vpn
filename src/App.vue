<template>
  <div id="app">

    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox">
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <nav class="menu__box">
        <ul v-for="link in links" :key='link'>
          <router-link v-bind:to="link">  <li class="menu__item">{{link}}</li>  </router-link>
        </ul>
        <router-link to="/sign-in">  <button type="button" class="menu__item-button">Sign In</button>  </router-link>
        <router-link to="/sign-up">  <button type="button" class="menu__item-button">Sign Up</button>  </router-link>
      </nav>
    </div>
    
    <header class="header">
      <div class="header-container">
        <router-link to="/">  <img class="header-container__logo" src="./image/Logo.png" alt="Logo">  </router-link>

        <nav class="header-nav">
          <ul class="header-nav__list" v-for="link in links" :key='link'>
            <router-link v-bind:to="link">  <li class="header-nav__item">{{link}}</li>  </router-link>
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
  data() {
    return {
      links: ['about', 'features', 'pricing', 'testimonials', 'help'],
    }
  },
  
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