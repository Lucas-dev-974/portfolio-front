import defaultProjectRepresentation from '../../assets/photo-1629757509637-7c99379d6d26.avif'
import request from '../../request';

export default{
	data(){
		return {
			projects: [],
            on_page: (window.location.pathname == '/portfolio') ? true : false,
            page: 1,
            total_page: 1,

            categories: null
		}
	},

	mounted(){
		this.getProjects()
        this.getCategories()
        
	},

	methods: {
        getProjects: async function(){
            let max_items  = this.on_page ? 15 : 6
            const response = await request.get('/api/projects' + '?page=' + this.page + '&number_items=' + max_items)
            const jsonResponse = await response.json()

            if(jsonResponse.data.length > 0){
                this.projects = jsonResponse.data
                this.total_page = jsonResponse.last_page

                this.$store.commit('setProjects', jsonResponse.data)                
            }

        },

        openCard: function(projectid){
            window.location.href = '/projet/' + projectid
        },

        changePage: function(value){
            this.page = value
            this.getProjects()

        },

        getCategories: async function(){
            const response = await request.get('/api/categories')
            const jsonResponse = await response.json()

            if(!jsonResponse) return false

            this.categories = jsonResponse
        },

        getbyCategorie: async function(categ_id){
            const response = await request.get('/api/projects/by/categ' + '?categorie_id=' + categ_id)
            const jsonResponse = await response.json()

            this.projects = jsonResponse
        }
	}
}