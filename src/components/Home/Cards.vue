<template>
  <div id="card">
    <v-flex xs6>
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 12 : 2}`"
          class="mx-auto"
          width="344"
        >
          <v-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>
            <div>
              <span class="headline">Cafe Badilico</span>
              <div class="d-flex">
                <v-rating
                  :value="value"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="ml-2 grey--text text--darken-2">
                  <span>{{ value }}</span>
                  <span>({{ reviews }})</span>
                </div>
              </div>
            </div>
            <v-spacer></v-spacer>
            <router-link to="/comprar">
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
    props: ['id', 'reviews', 'value']
  }
</script>
