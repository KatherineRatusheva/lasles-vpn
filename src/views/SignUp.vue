<template>
<div class="signUp-container">

    <div class="signUp" v-if="LOGIN_STATE">
        <p class="signUp__title">Hello {{this.emailUser}}</p>
        <button @click="signOutUser" class="signUp-form__button" type="submit">Sign out</button>
    </div>

    <div class="signUp" v-else>
        <h1 class="signUp__title">Sign up</h1>
        <form @submit.prevent='registerUser' class="signUp-form">
            <input class="signUp-form__input" v-model="user.email" type="email" placeholder="E-mail">
            <input class="signUp-form__input" v-model="user.password" type="password" placeholder="Password">
            <p class="signUp-form__error" v-if="error">Password must be at least 6 characters</p>
            <button class="signUp-form__button" type="submit">Sign up</button>
        </form>
    </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {saveUser} from '../mixins/saveUser';

export default {
    name: 'SignUp',
    mixins: [saveUser],
    data() {
        return {
            user: {
                email: this.email,
                password: this.password
            },
            error: false,
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
            if(this.user.password.length < 6){
                this.error = true
            }
            this.$store.dispatch('registerUser', this.user)
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