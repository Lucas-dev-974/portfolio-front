import defaultProjectRepresentation from '../../assets/photo-1629757509637-7c99379d6d26.avif'
import request from '../../request';


export default {
	data(){
		return {
			project: {},
			imgs: []
		}
	},

	mounted(){
		this.loadProject()
	},

	methods: {
		loadProject: async function(){
			const array_pathname = window.location.pathname.split('/')
			const project_id     = array_pathname[array_pathname.length - 1]

			if(isNaN(project_id)) window.location.href = '/portfolio'

			const response = await request.get('/api/project/' + project_id)
			const jsonResponse = await response.json()

			// If project with x id doesnt exist return to portfolio page
			if(response.status == 404){ 
				this.$store.commit('Notif', { on: true, color: 'red', message: jsonResponse.message })
				window.location.href = '/portfolio'
			}

			if(jsonResponse.medias.length > 0){
				jsonResponse.medias.forEach(media => {
					this.imgs.push(this.$store.state.backend_host + media)
				})
			}else
				this.imgs.push(defaultProjectRepresentation)
			

			this.project = jsonResponse	


		},

		// TODO to review
		openLink: function(url){
			if(url != null)
				if(url.includes('github'))
					window.open(url, '_blank').focus()
				else
					window.open(this.$store.state.backend_host + url, '_blank')
		},


	}
}