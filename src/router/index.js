import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Factors from '../views/Factors.vue'
import Sections from '../views/Sections.vue'
import FileUploading from '../views/FileUploading.vue'
import Login from '../Login.vue'
import Register from '../Register.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    params: true,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/file-uploading',
        name: '',
        component: FileUploading
      },
      {
        path: '/factors',
        name: 'Factors',
        component: Factors
      },
      {
        path: '/sections',
        name: 'Sections',
        component: Sections
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
