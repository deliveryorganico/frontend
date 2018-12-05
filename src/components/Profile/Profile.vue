<template>
  <div id="profile">
    <Toolbar></Toolbar>
    <v-layout>
      <v-flex xs3 sm4 offset-sm>
        <v-container>
          <v-card>
            <v-img
              src="https://t1.kn3.net/taringa/5/9/0/8/3/0/El___pollo/34B.jpg"
              aspect-ratio="2.75"
              width =100%
              height = 290
            ></v-img>
            <v-list>
              <template v-for="(info, i) in infos">
                <v-divider v-if="info.divider" :key="i"></v-divider>
                <v-list-tile v-else :key="info.title">
                  <v-list-tile-action>
                    <v-icon>{{ info.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-title>{{ info.title }}</v-list-tile-title>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex xs9 sm12 offset-sm>
        <v-container>
          <v-card>
            <v-container>
              <div v-bind:style="styleObject">Informacion Personal</div>
            </v-container>
          </v-card>

            <v-list>
              <template v-for="(item, i) in items">
                <v-divider v-if="item.divider" :key="i"></v-divider>
                <v-list-tile v-else :key="item.title">
                  <v-list-tile-title>
                    {{ item.quest }}
                    {{ item.title }}
                  </v-list-tile-title>
                </v-list-tile>
              </template>
              <v-card>
                <v-container>
                  <div v-bind:style="styleObject">Ubicacion</div>
                </v-container>
              </v-card>
              <v-list>
                <template v-for="(direc, i) in direcs">
                  <v-divider v-if="direc.divider" :key="i"></v-divider>
                  <v-list-tile v-else :key="direc.title" @click>
                    <v-list-tile-title>
                      {{ direc.quest }}
                      {{ direc.title }}
                    </v-list-tile-title>
                  </v-list-tile>
                </template>
              </v-list>
            </v-list>

        </v-container>
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
    el: '#app',
  data: () => ({
    width: 300,
    infos: [
      { icon: 'home', title: 'Jose Hernandez' },
      { icon: 'mail', title: 'jose.hernande7@gmail.com' },
    ],
    items: [
      { quest: 'Nombre Completo:', title: 'Jose del Valle Hernandez'},
      { quest: 'Compania:', title: ' No'},
      { quest: 'Telefono:', title: ' 351234654'},
    ],
    direcs: [
      { quest: 'Localidad: ', title: 'BsAs'},
      { quest: 'Direccion: ', title: 'Palermo'},
      { quest: 'Altura: ', title: '345'},
      { quest: 'Piso:', title: '3'},
      { quest: 'Codigo Postal:', title: '310'}
    ],
    styleObject: {
      color: 'grey',
      fontSize: '25px'
    },
    desc: {
      color: 'black',
      fontSize: '16px'
    }


  })
  }

</script>
