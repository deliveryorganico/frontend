<template>
  <div id="profile">
    <v-layout row style="margin-top: 40px; margin-bottom: 40px;">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://s-i.huffpost.com/gen/780630/thumbs/o-ILLUSTION-570.jpg?6"
            height="300px"/>
          <v-list two-line>
            <div 
              v-for="i in user"
              :key="i.icon">
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>{{ i.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ i.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ i.data }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset/>
            </div>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        user: [
          { icon: 'person', title: 'Usuario', data: 'Cacha'},
          { icon: 'account_box', title: 'Nombre', data: 'Ivan Nuñez' },
          { icon: 'phone', 'title': 'Número', data: '3513153889'},
          { icon: 'alternate_email', title: 'E-Mail', data: 'example@gmail.com'},
          { icon: 'place', title: 'Ubicación', data: 'Av. Siempre Viva 1234, Córoba, Córdoba'},
          { icon: 'markunread_mailbox', title: 'Código Postal', data: '4343'}
        ]
      }
    }
  }
</script>
