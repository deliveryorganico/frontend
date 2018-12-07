<template>
  <div id="home">
    <v-content>
      <Parallax></Parallax>
      <v-layout row wrap>
          <Product 
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            :title="product.title"
            :img="product.photo"
          />
      </v-layout>
    </v-content>
  </div>
</template>
mprar
<script>
  import { mapState } from 'vuex'
  import Product from './Home/Product'
  import Parallax from './Home/Parallax'

  export default {
    name: 'Home',
    components: {
      Product,
      Parallax
    },
    mounted() {
      this.$store.dispatch('obtainProducts')
    },
    computed: mapState([
      'products'
    ])
  }
</script>

