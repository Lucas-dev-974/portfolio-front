export default {
    data(){
        return {
            on_page: this.$store.state.dash.on_page,

        }
    },

    methods: {
        /**
         * This method will add item (post, project or note) depending on the parameter this.state.dash.onpage
         * @param {object} item_values 
         */
        addItem: function(item_values){
            if(this.$sotre.state.dash.on_page == 'project'){
                console.log();
            }
            
            if(this.$sotre.state.dash.on_page == 'post'){
                console.log();
            }

            if(this.$sotre.state.dash.on_page == 'note'){
                console.log();
            }
        },

        
        appendProject: function(){

        },

        
    }
}

