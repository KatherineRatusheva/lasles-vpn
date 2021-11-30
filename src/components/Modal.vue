<template>
<div class="form" v-show="isModalVisible">
    <form class="modal-form" v-click-outside="onClickOutside">
        <h2 class="modal-form__title" v-if="dataUserModal.selectPlan">{{ $t('modalMessagePlan') }} {{dataUserModal.selectPlan}}</h2>
        <h2 class="modal-form__title" v-else> {{ $t('modalMessage') }} </h2>

        <input :class="[!errorName ? 'modal-form__active' : 'modal-form__error']" v-model="dataUserModal.name" type="text" placeholder="Name" required>
        <p class="modal-form__text-error" v-if="errorName"> {{ $t('modalErrorName') }} </p>
        
        <input :class="[!errorPhone ? 'modal-form__active' : 'modal-form__error']" v-model="dataUserModal.phone" type="tel" placeholder="Phone" required>
        <p class="modal-form__text-error" v-if="errorPhone"> {{ $t('modalErrorPhone') }} </p>

        <button  type="button" class="modal-form__button-send" @click="sendRequest">Send</button>
        <button type="button" class="modal-form__button-close" @click="closeModal">✖</button>
    </form>
</div>
 
</template>

<script>
import { isPhoneLength, isNameLength } from "../helpers/validate";
import vClickOutside from 'v-click-outside'

export default {
    name: 'modal',
    data() {
        return {
            isModalVisible: false,
            errorName: false,
            errorPhone: false,
            dataUserModal: {
                name: this.name,
                phone: this.phone,
                selectPlan: '',
            }
        }
    },

    directives: {
        clickOutside: vClickOutside.directive
    },

    methods: {
        sendRequest() {
            this.errorName = isNameLength(this.dataUserModal.name)
            this.errorPhone = isPhoneLength(this.dataUserModal.phone)
            
            if(this.errorName === false) {
                if(this.errorPhone === false) {
                    this.$store.dispatch('sendRequest', this.dataUserModal)
                    this.closeModal()
                }
            }
        },

        open(value) {
            this.isModalVisible = true
            if(value) {
                this.dataUserModal.selectPlan = value
            }
        },

        closeModal() {
            this.dataUserModal.selectPlan = ''
            this.dataUserModal.name = '';
            this.dataUserModal.phone = '';

            this.isModalVisible = false
            this.errorPhone = false;
            this.errorName = false;
        },

        onClickOutside (event) {
            if(event.target.localName !== "button") {
                this.closeModal()
            }
        },
    }
}
</script>


