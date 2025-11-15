import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import QRGenerator from "../views/QRGenerator.vue";
import RegisterPet from "../views/RegisterPet.vue";


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
  {
    path: '/miss/:id',   //상세보기
    name: 'MissDView',
    component: () => import('../views/MissDView.vue')
  },
  {
    path: '/qr-generator',
    name: 'qr-generator',
    component: QRGenerator
  },
  {
    path: '/user-info/:id',
    name: 'user-info',
    component: RegisterPet,
    props: true // URL로 전달된 qrId를 props로 받을 수 있음
  },
  {
    path: '/pet-info/:id',
    name: 'pet-info',
    component: () => import("../views/PetInfo.vue"),
    props: true
  },
  {
  path: '/qr-detail/:qrId',
  name: 'qr-detail',
  component: () => import('../views/QRDetail.vue'), 
  props: true
  }

]

const router = createRouter({
  history: createWebHashHistory (),
  routes
})

export default router
