<template >
    <Navbar />
    <Notif v-if="$store.state.notif.on" />
    <router-view />

    <Footer />
</template>

<script>
import Navbar from './components/navbar.vue'
import Notif  from './components/notification.vue'
import Footer from './components/footer.vue'

export default {
    components: {
        Navbar, Notif, Footer
    },

    async mounted() {
        this.$store.dispatch('checkConnexion')

        this.$store.commit('setDark', this.$vuetify.theme.themes.custom.dark)
        if(!this.$store.state.in_build_message){
            this.$store.commit('Notif', { on: true, color: 'warning', message: 'Les sections Portfolio, Notes, Article sont en cour de construction...'})
            this.$store.commit('setInBuildMessage', true)
        }

        const defineBgColor = () => {
            const app = document.getElementById('app')
            const shadow_animated_bandroll = document.getElementsByClassName('shadow-scroll')

            // light mode
            if(!this.$vuetify.theme.themes.custom.dark){
                if(shadow_animated_bandroll.length > 0){
                    shadow_animated_bandroll[0].style.background = 'rgba(250, 240, 220, 0.5)'
                    shadow_animated_bandroll[1].style.background = 'rgba(250, 240, 220, 0.5)'
                }

                this.$store.commit('setThemeColor', {
                    name: '_secondary',
                    value: '#1E1E1E'
                })

                this.$store.commit('setThemeColor', {
                    name: 'git_icon',
                    value: '#1E1E1E'
                })

                this.$store.commit('setThemeColor', {
                    name: 'demo_icon',
                    value: '1E1E1E'
                })

                app.style.backgroundColor = '#FAF0DC'
            }

            // dark mode
            else{ 
                if(shadow_animated_bandroll.length > 0){
                    shadow_animated_bandroll[0].style.backgroundColor = 'rgba(30, 30, 30, 0.5)'
                    shadow_animated_bandroll[1].style.backgroundColor = 'rgba(30, 30, 30, 0.5)'
                }
                this.$store.commit('setThemeColor', {
                    name: '_secondary',
                    value: '#00FFFF'
                })

                this.$store.commit('setThemeColor', {
                    name: 'git_icon',
                    value: '#fff'
                })


                this.$store.commit('setThemeColor', {
                    name: 'demo_icon',
                    value: '#fff'
                })
                app.style.backgroundColor = '#1c1b22'
            }            
        }

        document.addEventListener('change', defineBgColor)

    }
}
</script>
