import { createRouter, createWebHistory } from 'vue-router'
import MainClientView from '../views/MainClientView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotView from '../views/ForgotView.vue'
import ContactView from '../views/ContactView.vue'
import ModuleView from '../views/ModuleView.vue'
import PacksView from '../views/PacksView.vue'
import AboutView from '../views/AboutView.vue'
import ModuleDetailsView from '../views/ModuleDetailsView.vue'
import PackDetailsView from '../views/PackDetailsView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AccountView from '../views/AccountView.vue'
import AccountDetailsView from '../views/AccountDetailsView.vue'
import PasswordView from '../views/PasswordView.vue'
import FavoriteView from '../views/FavoriteView.vue'
import TestView from '../views/TestView.vue'

//Admin
import MainAdminView from '@/views/Admin/MainAdminView.vue'
import DashboardView from '@/views/Admin/DashboardView.vue'
import CreateModuleView from '@/views/Admin/Modules/CreateModuleView.vue'
import CreatePackageView from '@/views/Admin/Packages/CreatePackageView.vue'

//Guards
import guest from '@/guards/guestGuard'
import user from '@/guards/userGuard'
import checkout from '@/guards/checkoutGuard'

const routes = [
  // {
  //   path : '/login',
  //   component : LoginView,
  //   beforeEnter : guest
  // },
  // {
  //   path : '/register',
  //   component : RegisterView,
  //   beforeEnter : guest
  // },
  {
    path : '/test',
    component : TestView
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
    path : '/account',
    redirect : '/account/profile'
  },
  {
    path : '/admin',
    redirect : '/admin/dashboard'
  },
  {
    path: '/',
    name: 'main',
    component: MainClientView,
    children : [
      {
        path : 'home',
        component : HomeView
      },
      {
        path : 'login',
        component : LoginView,
        beforeEnter : guest
      },
      {
        path : 'register',
        component : RegisterView,
        beforeEnter : guest
      },
      {
        path : 'contact',
        component : ContactView
      },
      {
        path : 'modules',
        component : ModuleView
      },
      {
        path : 'packages',
        component : PacksView
      },
      {
        path : 'about',
        component : AboutView
      },
      {
        path : 'module/:id/:slug',
        component : ModuleDetailsView
      },
      {
        path : 'package/:id/:slug',
        component : PackDetailsView
      },
      {
        path : 'cart',
        component : CartView
      },
      {
        path : 'checkout',
        component : CheckoutView,
        beforeEnter : checkout
      },
      {
        path : '/account',
        component : AccountView,
        beforeEnter : user,
        children : [
          {
            path : 'profile',
            component : AccountDetailsView,
          },
          {
            path : 'password',
            component : PasswordView
          },
          {
            path : 'favorite',
            component : FavoriteView
          }
        ]
      }
    ]
  },
  {
    path: '/admin',
    name: 'adminmain',
    component: MainAdminView,
    children : [
      {
        path : 'dashboard',
        component : DashboardView
      },
      {
        path : 'module/create',
        component : CreateModuleView
      },
      {
        path : 'package/create',
        component : CreatePackageView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    var link = window.location.href
    if(link.indexOf('#') != -1){
      var elm = document.getElementById(link.split('#')[1])
      if(elm != undefined){
        elm.scrollIntoView({
          behavior:'smooth'
        })
      }
    }
  }
})

export default router
