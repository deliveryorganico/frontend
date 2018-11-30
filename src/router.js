import VueRouter from 'vue-router'
import Base from './components/Base.vue'
import Home from './components/Home.vue'
import Login from './components/User/Login.vue'
import Register from './components/User/Register.vue'
import Comprar from './components/Compra/Comprar.vue'
import Profile from './components/Profile/Profile.vue'

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
      }
    ] 
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

export default new VueRouter({
  routes,
  mode: 'history'
})