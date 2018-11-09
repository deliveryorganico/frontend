<template>
  <v-app>
    <!-- Toolbar here -->
    <Toolbar></Toolbar>
    <v-content>
      <!-- Components here -->
      <Parallax></Parallax>
      <Cuerpo></Cuerpo>
      <Pie></Pie>
    </v-content>
  </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar';
  import Parallax from './components/Parallax';
  import Cuerpo from './components/Cuerpo';
  import Pie from './components/Pie';
  
  export default {
    name: 'App',
    components: {
      Toolbar,
      Cuerpo,
      Parallax,
      Pie,
    },
    data () {
      return {
        //
      }
    }
  }
</script>
