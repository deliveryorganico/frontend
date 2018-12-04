<template>
  <div id="Toolbar">
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ user.username }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :href="item.redi"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                <router-link 
                  class="link"
                  :to="item.route">
                  {{ item.title }}
                </router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar class="amber">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link
          class="link"
          :to="{name: 'home'}">
          Delivery Organico 
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: "Toolbar",
    data () {
        return {
          user: {} || this.$store.state.user,
          drawer: null,
          items: [
            { title: 'Home', icon: 'dashboard', route: '/' },
            { title: 'Profile', icon: 'person', route: 'profile' },
            { title: 'Carrito', route: 'carrito' },
            { title: 'Log Out', icon: 'meeting_room', route: 'logout',}
          ]
        }
      }
  }
</script>

<style>
  a {
    color: black;
    text-decoration: none;
  }

  .link {
    color: black;
  }
</style>

