<template>
  <div id="logout">
    <h1>Logged Out!</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    created() {
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'home' })
    }
  }
</script>