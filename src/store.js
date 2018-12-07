import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://192.168.0.4:8000'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    user: localStorage.getItem('user') || null,
    products: null
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    obtainToken(state, token) {
      state.token = token
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    createProduct(context, product) {
      axios
        .post('/rest/product/', {
          title: product.title,
          description: product.description,
          price: product.price,
          branch: product.branch,
        })
        .catch(() => {
          this.$router.push({ name: 'error' })
        })
    },
    obtainProducts(context) {
      axios
        .get('/rest/product/')
        .then(response => {
          const products = response.data
          context.commit('setProducts', products)
        })
        .catch(() => {
          this.$router.push({ name: 'error' })
        })
    },
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
    },
    register(context, user) {
      return new Promise((resolve, reject) => {
        axios
          .post('/rest/profile/', {
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            password: user.password,
            city: user.city,
            locality: user.locality,
            address: user.address,
            st_number: user.st_number,
            phone: user.phone,
            zip_code: user.zip_code
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
})