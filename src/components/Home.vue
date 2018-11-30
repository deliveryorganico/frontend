<template>
  <div id="home">
    <v-content>
      <Parallax></Parallax>
      <v-layout row wrap>
          <Cards 
            v-for="card in cards"
            :key="card.id"
            :id="card.id"
            :title="card.title"
            :img="card.photo"
          ></Cards>
      </v-layout>
    </v-content>
  </div>
</template>
mprar
<script>
  import axios from 'axios'
  import Cards from './Home/Cards'
  import Parallax from './Home/Parallax'

  export default {
    name: 'Home',
    components: {
      Cards,
      Parallax
    },
    data() {
      return {
        cards: [],
        errors: []
      }
    },
    created() {
      axios
        .get('http://192.168.60.119:8000/rest/product/')
        .then(res => {
          this.cards = res.data
        })
        .catch(e => this.errors.push(e))
    }
  }
</script>

