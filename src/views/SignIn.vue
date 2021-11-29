<template>
<div class="sign-container">
    <div class="sign" v-if="LOGIN_STATE">
        <p class="sign__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="sign-form__button" type="submit">Sign out</button>
    </div>

    <div class="sign" v-else>
    <h1 class="sign__title">Sign in</h1>
    <form @submit.prevent='loginUser' class="sign-form">
        <input :class="[ERROR !== this.errorStatusEmail ? 'sign-form__active' : 'sign-form__error']" v-model="user.email" type="email" value="" placeholder="E-mail">
        <p class="sign-form__error-text" v-if="ERROR === ErrorStatus.ERROR_EMAIL">  {{ $t('authorizationErrorEmail') }}  </p>

        <input :class="[ERROR !== this.errorStatusPassword ? 'sign-form__active' : 'sign-form__error']" v-model="user.password" type="password" placeholder="Password">
        <p class="sign-form__error-text" v-if="ERROR === ErrorStatus.ERROR_PASSWORD">  {{ $t('authorizationErrorPassword') }}  </p>

        <button class="sign-form__button" type="submit" @click="loginUser">Sign in</button>
    </form>
  </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {saveUser} from '../mixins/saveUser';

const ErrorStatus = {
    ERROR_EMAIL: 'EMAIL_NOT_FOUND',
    ERROR_PASSWORD: 'INVALID_PASSWORD',
};

export default {
    name: 'SignIn',
    mixins: [saveUser],
    components: {ErrorStatus},
    data() {
        return {
            user: {
                email: this.email,
                password: this.password
            },
            emailUser: this.$store.state.email,
            
            ErrorStatus,
            errorStatusEmail: ErrorStatus.ERROR_EMAIL,
            errorStatusPassword: ErrorStatus.ERROR_PASSWORD
        }
    },
    computed: {
        ...mapGetters([
            'LOGIN_STATE',
            'ERROR'
        ])
    },

    methods: {
        loginUser() {
            this.$store.dispatch('loginUser', this.user)
            this.emailUser = this.user.email
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