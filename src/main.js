import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import Base from './components/Base.vue'
import Home from './components/Home.vue'
import Login from './components/User/Login.vue'
import Register from './components/User/Register.vue'
import Comprar from './components/Compra/Comprar.vue'
import Profile from './components/Profile/Profile.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { 
    path: '',
    component: Base,
    name: 'base',
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
        path: 'comprar',
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

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
