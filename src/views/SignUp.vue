<template>
<div class="signUp-container">

    <div class="signUp" v-if="LOGIN_STATE">
        <p class="signUp__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="signUp-form__button" type="submit">Sign out</button>
    </div>

    <div class="signUp" v-else>
        <h1 class="signUp__title">Sign up</h1>
        <form @submit.prevent='registerUser' class="signUp-form">
            <input class="signUp-form__input" v-model="email" type="email" placeholder="E-mail">
            <input class="signUp-form__input" v-model="password" type="password" placeholder="Password">
            <p class="signUp-form__error" v-if="error">Password must be at least 6 characters</p>
            <button class="signUp-form__button" type="submit">Sign up</button>
        </form>
    </div>

</div>
</template>

<script>
import axios from 'axios';
import {mapGetters} from 'vuex';
import {saveUser} from '../mixins/saveUser';
import {apiUrls} from '../apiUrls.js';

export default {
    name: 'SignUp',
    mixins: [saveUser],
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
            axios.post( apiUrls.registerUrl, {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            }).then(res => {
                this.emailUser = res.data.email
                this.saveRegisterUser(res)

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