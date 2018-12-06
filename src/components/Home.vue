<template>
  <div id="home">
    <v-content>
      <Parallax></Parallax>
      {{ token }}
      <v-layout row wrap style="margin-top: 40px; margin-bottom: 40px">
        <v-flex xs1></v-flex>
          <Cards 
            v-for="card in cards"
            :key="card.id"
            :id="card.id"
            :title="card.title"
            :img="card.photo"
            style="margin-right: 40px; margin-left: 40px; margin-top: 40px;"
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
        errors: [],
        token: this.$store.state.token
      }
    },
    created() {
      axios
        .get('http://0.0.0.0:8000/rest/product/')
        .then(res => {
          this.cards = res.data
        })
        .catch(e => this.errors.push(e))
    }
  }
</script>

