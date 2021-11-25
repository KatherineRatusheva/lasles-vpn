<template>
<div class="signUp-container">
    <div class="signIn" v-if="LOGIN_STATE">
        <p class="signIn__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="signIn-form__button" type="submit">Sign out</button>
    </div>

    <div class="signIn" v-else>
    <h1 class="signIn__title">Sign in</h1>
    <form @submit.prevent='loginUser' class="signIn-form">
        <input class="signIn-form__input" v-model="user.email" type="email" value="" placeholder="E-mail">
        <input class="signIn-form__input" v-model="user.password" type="password" placeholder="Password">
        <button class="signIn-form__button" type="submit">Sign in</button>
    </form>
  </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import {saveUser} from '../mixins/saveUser';

export default {
    name: 'SignIn',
    mixins: [saveUser],
    data() {
        return {
            user: {
                email: this.email,
                password: this.password
            },
            emailUser: this.$store.state.email
        }
    },
    computed: {
        ...mapGetters([
            'LOGIN_STATE',
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