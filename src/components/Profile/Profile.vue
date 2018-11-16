<template>
  <div id="profile">
    <Toolbar></Toolbar>
    <h1>Profile</h1>
    <Pie></Pie>
  </div>
</template>

<script>
  import Pie from '../Pie'
  import Toolbar from '../Toolbar'

  export default {
    name: 'Profile',
    components: {
      Pie,
      Toolbar
    }
  }
</script>
