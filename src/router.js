import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from './components/Base'
import Comprar from './components/Compra/Comprar'
import Error from './components/Error/Error'
import Home from './components/Home'
import Login from './components/User/Login'
import Logout from './components/User/Logout'
import Profile from './components/Profile/Profile'
import Register from './components/User/Register'

Vue.use(VueRouter)

const routes = [
  { 
    path: '',
    component: Base,
    meta: { 
      title: 'Base' 
    },
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        meta: {
          title: 'Home'
        }
      },
      {
        path: 'comprar/:id',
        component: Comprar,
        name: 'comprar',
        meta: {
          title: 'Publicacion'
        }
      },
      {
        path: 'profile',
        component: Profile,
        name: 'profile',
        meta: {
          title: 'Perfil'
        }
      },
      {
        path: '/error',
        component: Error,
        name: 'error',
        meta: {
          title: 'Error'
        }
      }
    ]
  },
  { 
    path: '/login',
    component: Login,
    name: 'login',
    meta: { 
      title: 'Log In' 
    }
  },
  {
    path: '/logout',
    component: Logout,
    name: 'logout',
    meta: {
      title: 'Log Out'
    }
  },
  { 
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      title: 'Register'
    }
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})