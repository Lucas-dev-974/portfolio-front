require('../../assets/login.css')
import request from '../../request';


export default{
    data(){
        return {
            email: '',
            email_rule: [
                v => !!v || 'Un mail est requis !',
                v => /.+@.+/.test(v) || 'l\'email doit être valide !',
            ],

            password: '',
            
        }
    },

    methods: {
        login: async function(){
            const response = await request.post('/api/auth/login', {
                'email': this.email, 'password': this.password
            })

            const jsonResponse = await response.json()

            if(response.status != 200){ 
                this.$store.commit('Notif', { on: true, color: 'red', message: jsonResponse.message })
                return false
            }

            this.$store.commit('updateToken', jsonResponse.authorisation.token)
            this.$store.commit('setUser',     jsonResponse.user)

            window.location.href = '/'
        }
    }
}