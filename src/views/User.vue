<template>
<div class="sign" v-if="LOGIN_STATE">
    <p class="sign__title">Hello {{this.emailUser}}</p>
    <button @click="signOutUser" class="sign-form__button" type="submit">Sign out</button>
    
    <div v-for="item in $t('plan')" :key="item.name">
        <div class="price-block__package" v-if="item.name === selectPlan">
            <div class="price-block__list">
                <p class="price-block__title"> {{item.name}} </p>
                <div class="price-block__item" v-for="item in item.include" :key="item"> 
                    <div class="fas fa-check"></div>
                    {{item}}
                </div>
            </div>
            <div class="price-block__bottom">
                <p class="price-block__cost"></p>
            </div>
        </div>
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
            selectPlan: this.$store.state.itemBasket
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