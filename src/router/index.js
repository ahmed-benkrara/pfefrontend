import { createRouter, createWebHistory } from 'vue-router'
import MainClientView from '../views/MainClientView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotView from '../views/ForgotView.vue'
import guest from '@/guards/guestGuard'

const routes = [
  {
    path : '/login',
    component : LoginView,
    beforeEnter : guest
  },
  {
    path : '/register',
    component : RegisterView,
    beforeEnter : guest
  },
  {
    path : '/forgot',
    component : ForgotView
  },
  {
    path : '/',
    redirect : '/home'
  },
  {
    path: '/',
    name: 'main',
    component: MainClientView,
    children : [
      {
        path : 'home',
        component : HomeView
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
