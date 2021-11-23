<template>
<div class="sign-up-container">
    <div class="sign-in" v-if="LOGIN_STATE">
        <p class="sign-in__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="sign-in-form__button" type="submit">Sign out</button>
    </div>

    <div class="sign-in" v-else>
    <h1 class="sign-in__title">Sign in</h1>
    <form @submit.prevent='loginUser' class="sign-in-form">
        <input class="sign-in-form__input" v-model="email" type="email" value="" placeholder="E-mail">
        <input class="sign-in-form__input" v-model="password" type="password" placeholder="Password">
        <button class="sign-in-form__button" type="submit">Sign in</button>
    </form>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import {saveUser} from '../mixins/saveUser';

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
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD0R1x2p5aszf2C-bFXYJ7FYxorHAnPwZ8', {
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