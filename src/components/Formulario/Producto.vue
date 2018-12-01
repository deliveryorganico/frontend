<template>
  <div id="Formulario">
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
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex
                  v-for="{key, label, hint} in items"
                  :key="key"
                  xs12
                >
                  <v-text-field
                    v-model="models[key]"
                    :label="label"
                    :hint="hint"
                    persistent-hint
                    required
                  />
                </v-flex>
                {{ models }}
                <!-- <v-flex xs12>
                  <upload-btn
                    v-model="models[photo]"
                    title="Foto">
                    <v-icon>add</v-icon>
                  </upload-btn>
                </v-flex> -->
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="postProduct()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
  import axios from 'axios'
    
  export default {
    name: 'Formulario',
    data() {
      return {
        dialog: false,
        items: [
          {
            key: 'title',
            label: "Nombre del producto",
            hint: "Ej: Cafe badilico"
          },
          {
            key: 'price',
            label: 'Precio'
          },
          {
            key: 'description',
            label: 'Descripcion'
          }
        ],
        models : {
          title: '',
          price: null,
          description: '',
        }
      }
    },
    postProduct() {
      axios
        .post('http://192.168.60.119:8000/rest/product', {
          title: this.title,
          price: this.price,
          photo: this.photo,
          description: this. description
        })
    }
  }
</script>
  
