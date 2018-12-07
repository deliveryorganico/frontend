<template>
  <div id="Comprar">
    <v-layout row style="margin-top: 40px">
      <v-flex xs12 sm6 offset-sm3 style="margin-bottom: 40px">
        <v-card>
          <v-img 
            :src="datos.photo" 
            height="300px">
            <v-layout column fill-height>
              <v-spacer></v-spacer>
              <v-card-title class="black--text pl-5 pt-5">
                <div class="display-1 pl-5 pt-5">{{ datos.title }} {{ id }}</div>
              </v-card-title>
            </v-layout>
          </v-img>

          <v-list two-line>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>money</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Precio</v-list-tile-title>
                <v-list-tile-sub-title style="text-align: right; color: black; font-size: 25px">${{ datos.price }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>info</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Descripcion</v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ datos.description }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            
            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-select :items="items" label="Cantidad"></v-select>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>star</v-icon>
              </v-list-tile-action>

              <v-list-tile-action>
                <v-card-actions class="pa-3" style="margin-left: -15px">
                  <v-spacer></v-spacer>
                  <span class="dark--text text--lighten-2 caption mr-2">({{ rating }})</span>
                  <v-rating v-model="rating" background-color="dark" color="yellow accent-4" dense half-increments hover size="18"  ></v-rating>
                </v-card-actions>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: 'Comprar',
    data() {
      return {
        id: this.$route.params.id,
        datos: [],
        rating: 4.3,
        items: ['1', '2', '3', '4', '5', '10'],
      }
    },
    created() {
      axios
        .get(`http://192.168.0.4:8000/rest/product/${this.id}/`)
        .then(response => {
          this.datos = response.data
        })
        .catch(() => {
          this.$router.push({ name: 'error' })
        })
    }
  }
</script>

