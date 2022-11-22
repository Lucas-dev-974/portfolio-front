import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist'
import request from '../request.js'

var VuexLocalStorage = new VuexPersist({
  key:     'vuex',
  storage: window.localStorage
})

const local_host   = 'http://127.0.0.1:8000'
const backend_host = 'https://lcs-lvn-portfolio.herokuapp.com'

export default createStore({
  plugins: [ VuexLocalStorage.plugin ],
  state: {
    backend_host: window.location.hostname == 'localhost' ? local_host : backend_host,
    token: null,
    user: null,

    projects: [],

    notif: {
      on: false,
      color: '',
      message: ''
    },


    dark: false,
    in_build_message: false,

    theme_colors: {
      _secondary: 'rgb(0, 255, 255)',
      git_icon: 'white',
      demo_icon: 'white',
      card_icon: '#1E1E1E'
    }
  },

  getters: {
  },


  mutations: {

    setThemeColor: function(state, color_infos){
      state.theme_colors[color_infos.name] = color_infos.value
    },

    setDark: function(state, value){
      state.dark = value
    },

    setInBuildMessage: function(state, value){
      state.in_build_message = true
    },

    updateToken: function(state, token){
      state.token = token
    },

    setUser: function(state, user){
      state.user = user
    },

    setProjects: function(state, projects){
      state.projects = projects
    },

    updateProject: function(state, project){
      state.projects.filter(_project => {
        if(_project.id == project.id){
          console.log('can update')
        } 
      })
    },

    Notif(state, notifData){
      if(notifData.on){
          state.notif.on      = true
          state.notif.message = notifData.message
          state.notif.color   = notifData.color
      }else{
          state.notif.on = false
      }
    }, 


    
  },

  actions: {
    checkConnexion:  function({commit, state}){
      document.addEventListener('DOMContentLoaded', async ()=> {
        if(!state.token && window.location.pathname != '/dash') return false
        const response = await request.get('/api/token/check')
        if(response.status == 401){
          state.user  = {}
          state.token = null
          if(window.location.pathname != '/login' 
              && window.location.pathname != '/'
               && window.location.pathname != '/portfolio'
               && !window.location.pathname.includes('projet')){
             window.location.href = '/login'
          }
        }
      })
    },

    manageFooter: function(){
        const footer = document.getElementById('footer')

        let boundingPosition = footer.getBoundingClientRect().top

        console.log(boundingPosition, window.innerHeight)
    }
  },
})
