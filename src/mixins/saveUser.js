export const saveUser = {
    methods: {
        saveRegisterUser(res) {
            localStorage.setItem('user-token', res.data.idToken);
            localStorage.setItem('user-email', res.data.email);
            
            this.$store.commit('SIGN_IN');
            this.$store.dispatch('toggleSignIn');
        },
        deleteUser() {
            localStorage.removeItem('user-token')
            localStorage.removeItem('user-email')

            this.$store.commit('LOG_OUT')
            this.$store.dispatch('isLogOut')
        }
    }
}