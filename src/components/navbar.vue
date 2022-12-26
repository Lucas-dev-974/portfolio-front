<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <link rel="stylesheet" type="text/css" href="'https://cdn.jsdelivr.net/npm/vuetify@3.0.1/dist/vuetify.min.css'">
    <nav id="navbar" class="px-6">
        <div class="nav-section uppered letter-space-1" id="logo-link">
            <a href="/" class=" ">Nova</a>
        </div>
        <div class="nav-end d-flex ">
            <v-switch theme='light' hide-details v-model='$store.state.dark' @click='changeTheme' density='compact' true-icon='mdi-moon-waxing-crescent' false-icon='mdi-weather-sunny'></v-switch>
            <span id="horloge" class="px-5 d-flex align-center"></span>
            <div v-if='$store.state.user && $store.state.user.role == 1' >
                <v-btn class="mt-2" ligth color="secondary" elevation="7" size="x-small" v-on:click="goToDashboard" >dashboard</v-btn>
            </div>
        </div>
    </nav>
</template>

<script>
export default{

    mounted(){
        this.showDate()
    },

    methods: {
        goToDashboard: function(){
            window.location.href = '/dash'
        },

        showDate: function(){
            let date = new Date(),
                   h = date.getHours(),
                   m = date.getMinutes(),
                   s = date.getSeconds()
            
            if( h < 10 ){ h = '0' + h; }
            if( m < 10 ){ m = '0' + m; }
            // if( s < 10 ){ s = '0' + s; }
            var time = h + ':' + m 
            document.getElementById('horloge').innerHTML = time;
            this.refresh();
        },

        refresh: function(){
            setTimeout(this.showDate, 1000)
        },

        changeTheme: function(){
            this.$vuetify.theme.themes.custom.dark = !this.$vuetify.theme.themes.custom.dark
            this.$store.commit('setDark', '')
        }
    }
}

</script>
