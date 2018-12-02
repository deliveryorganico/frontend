import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    products: []
  },
  mutations: {
    obtainToken(state, token) {
      state.token = token
    }
  },
  actions: {
    obtainToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://192.168.0.4:8000/auth/obtain_token/', {
            username: credentials.username,
            password: credentials.password
          })
          .then(response => {
            console.log(response.data)
            const token = response.data.access_token
  
            localStorage.setItem('access_token', token)
            context.commit('obtainToken', token)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  }
})