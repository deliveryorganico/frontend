import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/vuetify'
import App from './App.vue'
import Home from './components/Home.vue'
import Test from './components/Test.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/test', component: Test },
  { path: '/', component: Home }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
