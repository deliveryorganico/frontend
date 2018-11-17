<template>
  <div id="profile">
    <Toolbar></Toolbar>
    <v-layout>
      <v-flex xs12 sm1 offset-sm1>
        <v-card max-width = "200">
          <v-img>
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            aspect-ratio="2.0"
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Hugo Torres</h3>
              <div>Hugo.torres@gmail.com<br>26 anios</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <u><h2 class="text-sm-left grey">INFORMACION PERSONAL</h2></u>
        <h3 class="text-sm-left ">Nombre Completo:</h3>
        <h3 class="text-sm-left ">Fecha de Nacimiento:</h3>
        <h3 class="text-sm-left ">Email:</h3>
        <h3 class="text-sm-left ">Cantidad de Productos vendidos:</h3>
        <h3 class="text-sm-left ">Compania/vendedor:</h3>
        <h3 class="text-sm-left ">Reputacion:</h3>
      </v-flex>
    </v-layout>
    <Pie></Pie>
  </div>
</template>

<script>
  import Pie from '../Pie'
  import Toolbar from '../Toolbar'

  export default {
    name: 'Profile',
    components: {
      Pie,
      Toolbar
    },
    data () {
     return {
       card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
     }
   }
  }

</script>
