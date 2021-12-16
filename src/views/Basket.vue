<template>
<div class="user">

    <div class="basket" v-if="UPDATE_BASKET.length > 0">
        <div class="basket__title">Basket</div>

        <div class="select-plan" v-for="item in UPDATE_BASKET" :key="item.name">
            <p class="select-plan__title">{{item.name}}</p>
            <ul class="select-plan__list">
                <li class="select-plan__item" v-for="item in item.include.split('\n')" :key="item"> {{item}} </li>
            </ul>
            <p class="select-plan__price">{{item.price}}</p>
            <button class="far fa-times-circle" @click="deleteBasket(item)"></button>
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
            'UPDATE_BASKET'
        ])
    },

    methods: {
        deleteBasket(name) {
            const newBasket = this.UPDATE_BASKET.filter(item => item !== name)
            this.$store.dispatch('deleteItemBasket', newBasket)
        }
    },

    created() {
        this.$store.dispatch('getUsersBasket')
    }
}
</script>