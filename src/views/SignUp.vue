<template>
<div class="sign-container">

    <div class="sign" v-if="LOGIN_STATE">
        <p class="sign__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="sign-form__button" type="submit">Sign out</button>
    </div>

    <div class="sign" v-else>
        <h1 class="sign__title"> {{ $t('signUpTitle') }} </h1>
        <form @submit.prevent='registerUser' class="sign-form">
            <input :class="[!errorEmail ? 'sign-form__active' : 'sign-form__error']" v-model="user.email" type="text" placeholder="E-mail" required>
            <p class="sign-form__error-text" v-if="errorEmail">  {{ $t('emailError') }}  </p>
            
            <input :class="[!error ? 'sign-form__active' : 'sign-form__error']" v-model="user.password" type="password" placeholder="Password" required>
            <p class="sign-form__error-text" v-if="error">  {{ $t('passwordError') }}  </p>

            <input :class="[!errorPassword ? 'sign-form__active' : 'sign-form__error']" v-model="user.repeatedPassword" type="password" placeholder="Repeat password" required>
            <p class="sign-form__error-text" v-if="errorPassword">  {{ $t('passwordNotMatch') }}  </p>

            <button class="sign-form__button" type="submit">Sign up</button>
        </form>
    </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {saveUser} from '../mixins/saveUser';
import { isPasswordLength, isPasswordRepeat, isEmailValid } from "../helpers/validate";

export default {
    name: 'SignUp',
    mixins: [saveUser],
    data() {
        return {
            user: {
                email: this.email,
                password: this.password,
                repeatedPassword: this.repeatedPassword
            },
            error: false,
            errorPassword: false,
            errorEmail: false,
            emailUser: this.$store.state.email
        }
    },
    computed: {
        ...mapGetters([
            'LOGIN_STATE',
        ])
    },
    methods: {
        registerUser() {
            this.error = isPasswordLength(this.user.password.length)
            this.errorPassword = isPasswordRepeat(this.user.password, this.user.repeatedPassword)
            this.errorEmail = isEmailValid(this.user.email)

            if(this.errorEmail === false) {
                if(this.error === false) {
                    if(this.errorPassword === false) {
                        this.$store.dispatch('registerUser', this.user)
                        this.emailUser = this.user.email
                    }
                }
            }
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
        }
    }

}
</script>