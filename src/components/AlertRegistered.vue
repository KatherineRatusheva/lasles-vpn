<template>
<div class="form" v-show="isVisible">
    <form class="form-alert" v-click-outside="onClickOutside">
        <p class="form-alert__title">{{ $t('isNotRegistred') }}</p>
        <p class="form-alert__text"> <a href="/sign-up"> {{ $t('registredText') }} </a> </p>
        <button type="button" class="form-alert__close" @click="close">✖</button>
    </form>
</div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
    name: 'alert',
    data() {
        return {
            isVisible: false,
        }
    },
    methods: {
        open() {
            this.isVisible = true
        },
        close() {
            this.isVisible = false
        },
        onClickOutside (event) {
            if(event.target.localName !== "button") {
                this.close()
            }
        },
    },

    directives: {
        clickOutside: vClickOutside.directive
    }
}
</script>