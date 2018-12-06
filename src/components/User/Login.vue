<template>
  <div id="form">
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="amber">
                  <v-toolbar-title>Login Form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="login">
                    <v-text-field v-model="username" prepend-icon="person" name="username" label="Username" type="text"/>
                    <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"/>
                    <v-card-actions>
                      <v-spacer/>
                      <v-btn color="primary" type="submit">Login</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {             
        this.$store
          .dispatch('obtainToken', {
            username: this.username,
            password: this.password
          })
          .then(() => {
            this.$router.push({ name: 'home' })
          })
      }
    }
  }
</script> 