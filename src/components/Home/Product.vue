<template>
  <div id="product">
    <v-flex xs6>
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="mx-auto"
          width="344">
          <v-img
            :aspect-ratio="16/9"
            :src="img"/>
          <v-card-title>
            <span class="headline">{{ title }}</span>
            <v-spacer/>
            <router-link 
              :to="{ name: 'comprar', params: { id: id } }">
              <v-btn round color="primary" dark>Comprar</v-btn>
            </router-link>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </div>
</template>

<script>
  export default {
    name: 'product',
    props: ['id', 'title', 'img']
  }
</script>
