<template>
  <div id="home">
    <Toolbar></Toolbar>
    <v-content>
      <Parallax></Parallax>
      <Cuerpo></Cuerpo>
      <v-layout>
        <Cards v-for="card in cards" :key="card.id" :id="card.id" :reviews="card.reviews" :value="card.value"></Cards>
      </v-layout>
    </v-content>
    <Pie></Pie>
  </div>
</template>

<script>
  import Cards from './Home/Cards';
  import Parallax from './Home/Parallax';
  import Pie from './Pie'
  import Toolbar from './Toolbar';

  export default {
    name: 'Home',
    components: {
      Cards,
      Parallax,
      Pie,
      Toolbar
    },
    data: () => {
      return {
        cards: [
          { id: 1, reviews: 413, value:3.2 },
          { id: 2, reviews: 512, value:5 }
        ]
      }
    }
  }
</script>

