<template>
<div class="user">

    <div class="basket" v-if="GET_USERS_BASKET">
        <div class="basket__title">Basket</div>

        <div :class="[item.name === GET_USERS_BASKET ? 'select-plan' : 'error-plan']" v-for="item in $t('plan')" :key="item.name">
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
import {mapGetters} from 'vuex'

export default {
    name: 'Basket',
    
    computed: {
        ...mapGetters([
            'GET_USERS_BASKET',
        ])
    },

    methods: {
        deleteBasket() {
            this.$store.dispatch('deleteItemBasket')
        }
    },

    created() {
        this.$store.dispatch('getUsersBasket')
    }
}
</script>