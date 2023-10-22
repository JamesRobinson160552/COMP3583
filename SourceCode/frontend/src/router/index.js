import { createRouter, createWebHistory } from 'vue-router'

import BusinessDetailsView from '../views/BusinessDetailsView.vue'
import BusinessOwnerView from '../views/BusinessOwnerView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ReportView from '../views/ReportView.vue'
import SearchResultsView from '../views/SearchResultsView.vue'
import SignUpView from '../views/SignupView.vue'
import UserProfileView from '../views/UserProfileView.vue'

const routes = [
  {
    path: '/businessdetails/:id',
    name: 'BusinessDetails',
    component: BusinessDetailsView
  },
  {
    path: '/businessowner/:id',
    name: 'BusinessOwner',
    component: BusinessOwnerView
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/report',
    name: 'Report',
    component: ReportView
  },
  {
    path: '/searchresults/:term',
    name: 'searchresults',
    component: SearchResultsView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/profile',
    name: 'Profile',
    component: UserProfileView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
