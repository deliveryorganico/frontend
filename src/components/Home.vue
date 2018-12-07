<template>
  <div id="home">
    <v-content>
      <Parallax></Parallax>
      <v-layout row wrap style="margin-top: 40px; margin-bottom: 40px">
        <!-- <v-flex xs1></v-flex> -->
        <div v-for="product in products"
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :img="product.photo"
          style="margin-right: 40px; margin-left: 110px; margin-top: 40px;">
          <Product
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :img="product.photo"/>
        </div>
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

