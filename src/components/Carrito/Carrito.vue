<template>
  <v-layout row style="margin-top: 40px; margin-bottom: 40px">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Carrito</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>  
        </v-toolbar>
        
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider" :inset="item.inset" :key="index">
            </v-divider>

            <v-list-tile v-else :key="item.title" avatar @click="" :search="search">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title> {{ item.title }} </v-list-tile-title>
                <v-list-tile-sub-title> {{ item.subtitle }} </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn color="red" dark>
                  <v-icon dark>block</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        items: [
          { header: 'Productos' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            title: 'Fruta',
            subtitle: "$192"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            title: 'Cafe Badilico',
            subtitle: "$192"
          },
        ]
      }
    }
  }
</script>