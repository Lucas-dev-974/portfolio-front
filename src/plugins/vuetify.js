// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {  createVuetify } from 'vuetify'


export default createVuetify({
  theme: {
    defaultTheme: 'custom',
    themes: {
      custom:{
        dark: true,
        colors: {
          background: '#1E1E1E',
          surface: '#FFEFCF',
          primary: '#ff5aac',
          'primary-darken-1': '#3700B3',
          secondary: '#00FFFF',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        }
      }
    }
  }
})
