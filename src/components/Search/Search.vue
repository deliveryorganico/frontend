<template>
  <div id="search">
    <v-layout row wrap style="margin-top: 40px; margin-bottom: 40px">
        <!-- <v-flex xs1></v-flex> -->
        <div v-for="product in products_search"
          :key="product.id"
          style="margin-right: 40px; margin-left: 110px; margin-top: 40px;">
          <Product
          :key="product.id"
          :id="product.id"
          :title="product.title"
          :img="product.photo"/>
        </div>
      </v-layout>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Product from '../Home/Product'
  
  export default {
    name: 'Search',
    components: {
      Product
    },
    computed: mapState([
      'products_search'
    ]) 
  }
</script>
