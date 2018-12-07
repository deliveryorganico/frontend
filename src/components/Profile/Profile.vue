<template>
  <div id="profile">
    <v-layout row style="margin-top: 40px; margin-bottom: 40px;">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            :src="user.photo"
            height="300px"/>
          <v-list two-line>
            <div 
              v-for="i in items"
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
      const user = this.$store.state.user
      
      return {
        user: user,
        items: [
          { icon: 'person', title: 'Usuario', data: user.username},
          { icon: 'account_box', title: 'Nombre', data: `${user.first_name} ${user.last_name}` },
          { icon: 'phone', 'title': 'Número', data: `${user.phone}`},
          { icon: 'alternate_email', title: 'E-Mail', data: `${user.email}`},
          { icon: 'place', title: 'Ubicación', data: `${user.address} ${user.st_number}, ${user.locality}, ${user.city}` },
          { icon: 'markunread_mailbox', title: 'Código Postal', data: `${user.zip_code}` }
        ]
      }
    }
  }
</script>
