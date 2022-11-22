/* eslint-disable */
import request from '../../request';
import Portfolio from '../../components/Home-portfolio.vue'

export default {
    name: 'HomeView',
    components: {
        Portfolio
    },

    data(){
        return {
            pages: [],
            jsScroll: true,
        }
    },

    methods: {
        timer: function(ms){
            return new Promise(callback => setTimeout(callback, ms))
        },

        task: async function(ms){
            await this.timer(10)
        } ,

        scrollDown: async function(){
            const scrollTo = 500

            window.addEventListener('wheel', () => {
                this.jsScroll = false
            })

            for (let i = 0; i < scrollTo; i += 2) {
                if(this.jsScroll){
                    window.scrollBy(0, 10)
                    await this.task()
                }else{
                    this.jsScroll = true
                    i += (scrollTo - 300)
                }
            }

        },

    }
}
