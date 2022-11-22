import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ProjectTemplate from '../views/project-template.vue'
import Portfolio from '../components/Home-portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/dash',
    name: 'dashboard',
    component: ''
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },

  {
    path: '/projet/:projetid',
    name: 'projet',
    component: ProjectTemplate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
