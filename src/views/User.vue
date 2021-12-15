<template>
<div class="user">

    <div class="user-container" v-if="LOGIN_STATE">
        <p class="user-container__title">{{this.emailUser}}</p>
        <button @click="signOutUser" class="user-container__button" type="submit">Sign out</button>
    </div>

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
            window.location.href = '/'
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