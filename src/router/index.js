import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/SigninView.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import('../views/PriceView.vue')
  },
  {
    path: '/paid',
    name: 'paid',
    component: () => import('../views/PaidView.vue')
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import('../components/MapApiW.vue')
  },
  {
    path: '/missing-write',
    name: 'missing-write',
    component: () => import('../views/MissWView.vue')
  },
    {
    path: '/sighting-detail/:id',
    name: 'sighting-detail',
    component: () => import('../views/SightDView.vue') 
  },
    {
    path: '/missing-detail/:id',
    name: 'missing-detail',
    component: () => import('../views/MissDView.vue') 
  },
  {
    path: '/sighting-write/:id',
    name: 'sighting-write',
    component: () => import('../views/SightWView.vue') 
  },
  {
    path: '/missing-list',
    name: 'missing-list',
    component: () => import('../views/PetList.vue')
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () => import('../views/MyPage.vue')
  },
    {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue') 
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: () => import('../views/DepositView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
