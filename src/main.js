import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'
import './plugins/vuetify'
import App from './App.vue'

Vue.use(VueRouter)

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
