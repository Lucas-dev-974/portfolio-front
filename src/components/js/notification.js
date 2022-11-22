export default{
    data(){
        return{
            message: this.$store.state.notif.message,
            alert:   this.$store.state.notif.on,
            color:   this.$store.state.notif.color
        }
    },


    methods: {
        close(){
            this.$store.commit('Notif', { alert: false })
        }
    }
}