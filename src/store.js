import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://192.168.0.4:8000'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    user: localStorage.getItem('user') || null,
    products: []
  },
  mutations: {
    obtainToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    obtainToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('/auth/obtain_token/', {
            username: credentials.username,
            password: credentials.password
          })
          .then(response => {
            const token = response.data.token
            localStorage.setItem('access_token', token)
            context.commit('obtainToken', token)
            
            const user = response.data.user
            localStorage.setItem('user', user)
            context.commit('setUser', user)
            
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  destroyToken(context) {
    return context.commit('destroyToken')
  }
})