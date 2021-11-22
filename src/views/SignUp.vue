<template>
<div class="sign-up-container">

    <div class="sign-up" v-if="LOGIN_STATE">
        <p class="sign-up__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="sign-up-form__button" type="submit">Sign out</button>
    </div>

    <div class="sign-up" v-else>
        <h1 class="sign-up__title">Sign up</h1>
        <form @submit.prevent='registerUser' class="sign-up-form">
            <input class="sign-up-form__input" v-model="email" type="email" placeholder="E-mail">
            <input class="sign-up-form__input" v-model="password" type="password" placeholder="Password">
            <p class="sign-up-form__error" v-if="error">Password must be at least 6 characters</p>
            <button class="sign-up-form__button" type="submit">Sign up</button>
            </form>
    </div>

</div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            email: this.email,
            password: this.password,
            error: false,
            emailUser: ''
        }
    },
    computed: {
        ...mapGetters([
            'LOGIN_STATE',
        ])
    },
    methods: {
        registerUser() {
            if(this.password.length < 6){
                this.error = true
            }
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD0R1x2p5aszf2C-bFXYJ7FYxorHAnPwZ8', {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            }).then(res => {
                localStorage.setItem('user-token', res.data.idToken);
                localStorage.setItem('user-email', res.data.email);

                this.$store.commit('SIGN_IN')
                this.$store.dispatch('toggleSignIn')
                this.emailUser = res.data.email

            }).catch(error => {
                console.log(error);
            });
        },

        signOutUser() {
            localStorage.removeItem('user-token')
            localStorage.removeItem('user-email')

            this.$store.commit('LOG_OUT')
            this.$store.dispatch('isLogOut')
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