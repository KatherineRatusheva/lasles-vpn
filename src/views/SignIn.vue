<template>
<div class="sign-container">

    <div class="sign">
        <h1 class="sign__title"> {{ $t('signInTitle') }} </h1>
        <form @submit.prevent='loginUser' class="sign-form">
            <input :class="[ERROR !== ErrorStatus.ERROR_EMAIL ? 'sign-form__active' : 'sign-form__error']" v-model="user.email" type="email" value="" placeholder="E-mail" required>
            <p class="sign-form__error-text" v-if="ERROR === ErrorStatus.ERROR_EMAIL">  {{ $t('authorizationErrorEmail') }}  </p>
            
            <input :class="[ERROR !== ErrorStatus.ERROR_PASSWORD ? 'sign-form__active' : 'sign-form__error']" v-model="user.password" type="password" placeholder="Password" required>
            <p class="sign-form__error-text" v-if="ERROR === ErrorStatus.ERROR_PASSWORD">  {{ $t('authorizationErrorPassword') }}  </p>
            <p class="sign-form__error-text" v-if="ERROR === ErrorStatus.ERROR_DISABLED">  {{ $t('authorizationErrorDisabled') }}  </p>
            
            <button class="sign-form__button" type="submit">Sign in</button>
        </form>
    </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'

const ErrorStatus = {
    ERROR_EMAIL: 'EMAIL_NOT_FOUND',
    ERROR_PASSWORD: 'INVALID_PASSWORD',
    ERROR_DISABLED: 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
};

export default {
    name: 'SignIn',
    components: ErrorStatus,
    data() {
        return {
            user: {
                email: this.email,
                password: this.password
            },
            ErrorStatus
        }
    },
    computed: {
        ...mapGetters([
            'ERROR'
        ])
    },

    methods: {
        loginUser() {
            this.$store.dispatch('loginUser', this.user)

            if(this.$store.getters.LOGIN_STATE) {
                this.$router.push('/user')
            }
        }
    }  
} 
</script>