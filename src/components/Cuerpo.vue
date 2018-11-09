<template>
  <v-layout>
    <Cards v-for="card in cards" :key="card.id" :id="card.id" :reviews="card.reviews" :value="card.value"></Cards>
  </v-layout>
</template>

<script>
  import Cards from './Cards'

  export default {
    name: 'Cuerpo',
    components: {
      Cards
    },
    data: () => {
      return {
        cards: [
          {id: 1, reviews: 413, value:3.2},
          {id: 2, reviews: 512, value:5}
        ]
      }
    }
  }
</script>
