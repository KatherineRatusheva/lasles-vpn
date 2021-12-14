<template>
<div class="user">

    <div class="user-container" v-if="LOGIN_STATE">
        <p class="user-container__title">{{this.emailUser}}</p>
        <button @click="signOutUser" class="user-container__button" type="submit">Sign out</button>
    </div>

    <div class="basket" v-if="GET_USERS_BASKET">
        <div class="basket__title">Basket</div>

        <div :class="[item.name === GET_USERS_BASKET.selectPlan ? 'select-plan' : 'error-plan']" v-for="item in $t('plan')" :key="item.name">
            <p class="select-plan__title"> {{item.name}} </p>
            <ul class="select-plan__list">
                <li class="select-plan__item" v-for="item in item.include" :key="item"> {{item}} </li>
            </ul>
            <p class="select-plan__price">{{item.price}}</p>
            <button class="far fa-times-circle" @click="deleteBasket"></button>
        </div>
    </div>
        
    <div class="basket" v-else>Basket is empty</div>

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
            'GET_USERS_BASKET'
        ])
    },

    methods: {
        signOutUser() {
            this.deleteUser()
            this.$router.push('/')
            this.emailUser = ''
        },
        deleteBasket() {
            this.$store.dispatch('deleteItemBasket')
        }
    },

    created() {
        this.$store.dispatch('getUser')
        this.$store.dispatch('getUsersBasket')

        if(this.$store.state.token) {
            this.$store.commit('SIGN_IN')
            this.$store.dispatch('toggleSignIn')
        }
    }
}
</script>