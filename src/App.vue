<template>
  <v-app>
    <!-- Toolbar here -->
    <Toolbar></Toolbar>
    <v-content>
      <!-- Components here -->
      <Parallax></Parallax>
      <Cuerpo></Cuerpo>
      <Login></Login>
      <Register></Register>
      <Pie></Pie>
    </v-content>
  </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar';
  import Parallax from './components/Parallax';
  import Cuerpo from './components/Cuerpo';
  import Pie from './components/Pie';
  import Login from './components/Login';
  import Register from './components/Register';
  
  export default {
    name: 'App',
    components: {
      Toolbar,
      Cuerpo,
      Parallax,
      Pie,
      Login,
      Register,
    },
    data () {
      return {
        //
      }
    }
  }
</script>
