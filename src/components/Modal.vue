<template>
<div class="form" v-show="isModalVisible">
    <form class="modal-form">
        <h2 class="modal-form__title" v-if="dataUserModal.selectPlan">You chose {{dataUserModal.selectPlan}}</h2>
        <h2 class="modal-form__title" v-else>Seek advice</h2>

        <p class="modal-form__error" v-if="error">String must not be empty</p>
        <p class="modal-form__error" v-if="errorPhone">Example for the Belarus +37529 ХХХ ХХ ХХ</p>

        <input class="modal-form__name" v-model="dataUserModal.name" type="text" placeholder="Name">
        <input class="modal-form__phone" v-model="dataUserModal.phone" type="tel" placeholder="Phone">
        <button  type="button" class="modal-form__button-send" @click="sendRequest">Send</button>
        <button type="button" class="modal-form__button-close" @click="closeModal">✖</button>
    </form>
</div>
 
</template>

<script>

export default {
    name: 'modal',
    data() {
        return {
            isModalVisible: false,
            error: false,
            errorPhone: false,
            dataUserModal: {
                name: this.name,
                phone: this.phone,
                selectPlan: '',
            }
        }
    },
    methods: {
        sendRequest() {
            if(this.dataUserModal.name != null && this.dataUserModal.phone != null ) {

                if(this.dataUserModal.phone.length >= 12) {
                    this.$store.dispatch('sendRequest', this.dataUserModal)
                    this.isModalVisible = false;
                    this.errorPhone = false;

                } else this.errorPhone = true;

            } else this.error = true;
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
            this.error = false;
        },
    }
}
</script>


