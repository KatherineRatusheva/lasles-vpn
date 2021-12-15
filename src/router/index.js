import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'
import Testimonials from '../views/Testimonials.vue'
import Help from '../views/Help.vue'
import Main from '@/components/Main'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import User from '../views/User.vue'
import Basket from '../views/Basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router