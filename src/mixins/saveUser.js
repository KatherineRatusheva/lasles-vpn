export const saveUser = {
    methods: {
        deleteUser() {
            localStorage.removeItem('user-token')
            localStorage.removeItem('user-email')

            this.$store.commit('LOG_OUT')
            this.$store.dispatch('isLogOut')
        }
    }
}