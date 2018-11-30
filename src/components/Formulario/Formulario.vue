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
                  <v-flex xs12>
                    <v-text-field label="Nombre del producto" hint="Ej: Cafe badilico" persistent-hint required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Precio" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <upload-btn title="Foto">
                      <v-icon>add</v-icon>
                    </upload-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field label="Descripcion" required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
  </div>
</template>

<script>
  import UploadButton from 'vuetify-upload-button';
  export default {
    name: 'Formulario',
    data: () => ({
      dialog: false
    }),
    components: {
      'upload-btn': UploadButton
    }
  }
</script>
  
