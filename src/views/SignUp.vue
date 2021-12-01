<template>
<div class="sign-container">
    
    <div class="sign">
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
import { isPasswordLength, isPasswordRepeat, isEmailValid } from "../helpers/validate";

export default {
    name: 'SignUp',
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
        }
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
            
            if(this.$store.getters.LOGIN_STATE) {
                this.$router.push('/user')
            }
        }

    }
}
</script>