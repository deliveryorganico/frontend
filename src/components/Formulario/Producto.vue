<template>
  <div id="form_producto">
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <button slot="activator" color="primary" dark type="button" class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark red" style="">
          <div class="v-btn__content"><i aria-hidden="true" class="v-icon material-icons theme--dark">add</i></div>
        </button>
        <v-card>
          <v-card-title>
            <span class="headline">Crear Producto</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="postProduct" method="POST">
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field 
                      v-model="product.title"
                      label="Nombre del producto"
                      hint="Ej: Cafe badilico"
                      persistent-hint
                      required/>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field 
                      v-model="product.description"
                      label="Descipción"
                      required/>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field 
                      v-model="product.price"
                      label="Precio"
                      required/>
                  </v-flex>
                  {{ product }}
                  <!-- <v-flex xs12>
                    <upload-btn
                      v-model="models[photo]"
                      title="Foto">
                      <v-icon>add</v-icon>
                    </upload-btn>
                  </v-flex> -->
                </v-layout>
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog=false">Close</v-btn>
                <v-btn color="primary" flat type="submit">Save</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Producto',
    data() {
      return {
        dialog: false,
        product: {
          title: 'Test',
          description: 'Esto es un test',
          price: '150',
          branch: '1',
          photo: "http://192.168.0.4:8000/media/img/fede_nvpZVYL.jpg"
        }
      }
    },
    methods: {
      postProduct() {
        this.$store.dispatch('createProduct', this.product)
      }
    }
  }
</script>
  
