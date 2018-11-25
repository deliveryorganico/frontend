<template>
  <div id="profile">
    <v-layout>
      <v-flex xs2>
        <v-container grid-list-md text-xs-center>
          <v-card width = "200">
            <v-img src="data:image/jpeg;base64,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"
            aspect-ratio="1.5"
            position = "align-center"
            >
            </v-img>
            <v-card-title primary-title>
              <div class="text-sm-left">
                <h3 class="headline mb-0">Hugo Torres</h3>
                <div>Hugo.torres@gmail.com<br>26 anios</div>
              </div>
            </v-card-title>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex xs10>
        <v-container grid-list-md text-xs-center>
          <h2 class="text-sm-left white--text blue-grey darken-1">Informacion de Perfil</h2>
          <ul class="list">
            <li><h3 class="text-sm-left ">Nombre Completo: Vestibulum sed</h3></li>
            <li><h3 class="text-sm-left ">Email: Praesent non ultricies justo.</h3></li>
            <li><h3 class="text-sm-left ">Reputacion: Donec gravida</h3></li>
            <li><h3 class="text-sm-left ">Compania/Vendedor: Morbi fringilla nisi</h3></li>
            <li><h3 class="text-sm-left ">tempus lobortis, velit nunc egestas</h3></li>
          </ul>
            <h2 class="text-sm-left white--text blue-grey darken-1" >Descripcion</h2>
            <h4 class="text-sm-left">
              Lorem ipsum dolor sit amet, consecte
              tur adipiscing elit. Pellentesque bibendum, tellus id bibendum dignissim
              , enim nunc egestas turpis, quis vestibulum lorem dui quis leo. Vivamus in
               rutrum est. Nullam venenatis nulla eget sagittis porttitor. Nulla at varius
              ipsum, lacinia vehicula nisi. Donec lobortis sed purus ultrices maximus. Don
              ec tortor neque, scelerisque vel nisi in, tincidunt gravida ipsum. Phasellus
              in lorem ut leo pulvinar ultrices non eget risus.
            </h4>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Profile'
  }
</script>
