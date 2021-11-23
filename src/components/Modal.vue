<template>
<div class="form" v-show="isModalVisible">
    <form class="modal-form">
        <h2 class="modal-form__title" v-if="selectPlan">You chose {{selectPlan}}</h2>
        <h2 class="modal-form__title" v-else>Seek advice</h2>
        <p class="modal-form__error" v-if="error">String must not be empty</p>
        <p class="modal-form__error" v-if="errorPhone">Example for the Belarus +37529 ХХХ ХХ ХХ</p>

        <input class="modal-form__name" v-model="name" type="text" placeholder="Name">
        <input class="modal-form__phone" v-model="phone" type="tel" placeholder="Phone">
        <button  type="button" class="modal-form__button-send" @click="sendRequest">Send</button>
        <button type="button" class="modal-form__button-close" @click="closeModal">✖</button>
    </form>
</div>
 
</template>

<script>
import axios from 'axios';
import {apiUrls} from '../apiUrls.js';

export default {
    name: 'modal',
    data() {
        return {
            isModalVisible: false,
            name: this.name,
            phone: this.phone,
            selectPlan: '',
            error: false,
            errorPhone: false
        }
    },
    methods: {
        sendRequest() {
            if(this.name != null && this.phone != null ) {
                if(this.phone.length >= 12) {
                    axios.post( apiUrls.sendRequest, {
                        name: this.name,
                        phone: this.phone,
                        selectPlan: this.selectPlan
                        }).then(response => {
                            this.isModalVisible = false;
                            this.errorPhone = false;
                            this.error = false;
                            this.name = '';
                            this.phone = '';

                            return response
                        }).catch(error => {
                            console.log(error);
                        })
                } else this.errorPhone = true;
            } else this.error = true;
        },
        closeModal() {
            this.isModalVisible = false
            this.selectPlan = ''

            this.errorPhone = false;
            this.error = false;
            this.name = '';
            this.phone = '';
        },
    }
}
</script>


