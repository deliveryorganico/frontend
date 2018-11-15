<template>
  <v-app>
    <!-- Toolbar here -->
    <Toolbar></Toolbar>
    <v-content>
      <!-- Components here -->
      <router-view></router-view>
    </v-content>
    <Pie></Pie>
  </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar';
  import Pie from './components/Pie';
  
  export default {
    name: 'App',
    components: {
      Toolbar,
      Pie,
    }
  }
</script>
