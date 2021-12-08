<template>
<div class="sign" v-if="LOGIN_STATE">
    <p class="sign__title">Hello {{this.emailUser}}</p>
    <button @click="signOutUser" class="sign-form__button" type="submit">Sign out</button>
</div>
</template>

<script>
import {saveUser} from '../mixins/saveUser';
import {mapGetters} from 'vuex'

export default {
    name: 'User',
    mixins: [saveUser],
    data() {
        return {
            emailUser: this.$store.state.email,
        }
    },
    
    computed: {
        ...mapGetters([
            'LOGIN_STATE',
        ])
    },

    methods: {
        signOutUser() {
            this.deleteUser()
            this.$router.push('/')
            this.emailUser = ''
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