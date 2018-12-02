<template>
  <div id="form">
    <form action="#" @submit.prevent="login">
      <label for="username">Username:</label>
      <input id="username" name="username" v-model="username" type="text">
      <label for="password">Password:</label>
      <input id="password" name="password" v-model="password" type="password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {             
        this.$store
          .dispatch('obtainToken', {
            username: this.username,
            password: this.password
          })
          .then(() => this.$router.push({ name: 'home' }))
      }
    }
  }
</script> 