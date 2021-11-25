<template>
<div class="signUp-container">
    <div class="signIn" v-if="LOGIN_STATE">
        <p class="signIn__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="signIn-form__button" type="submit">Sign out</button>
    </div>

    <div class="signIn" v-else>
    <h1 class="signIn__title">Sign in</h1>
    <form @submit.prevent='loginUser' class="signIn-form">
        <input class="signIn-form__input" v-model="email" type="email" value="" placeholder="E-mail">
        <input class="signIn-form__input" v-model="password" type="password" placeholder="Password">
        <button class="signIn-form__button" type="submit">Sign in</button>
    </form>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import {saveUser} from '../mixins/saveUser';
import {apiUrls} from '../apiUrls.js';

export default {
    name: 'SignIn',
    mixins: [saveUser],
    data() {
        return {
            email: this.email,
            password: this.password,
            emailUser: ''
        }
    },
    computed: {
        ...mapGetters([
            'LOGIN_STATE',
        ])
    },
    methods: {
        loginUser() {
            axios.post( apiUrls.signInUrl, {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            }).then(res => {
                this.saveRegisterUser(res)
                this.emailUser = res.data.email
                
            }).catch(error => {
                console.log(error);
            });
        },

        signOutUser() {
            this.deleteUser()
        }
    },
    
    created() {
        this.$store.dispatch('getUser')
        if(this.$store.state.token) {
            this.$store.commit('SIGN_IN')
            this.$store.dispatch('toggleSignIn')
            this.emailUser = this.$store.state.email
        }
    }
}
</script>