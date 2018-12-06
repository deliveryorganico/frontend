<template>
  <div id="register">
    <v-app>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card>
                <v-toolbar color="amber">
                  <v-toolbar-title>Register Form</v-toolbar-title>
                  <v-spacer/>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="register">
                    <v-text-field v-model="user.username" label="Username" required/>
                    <v-text-field v-model="user.first_name" label="First name" required/>
                    <v-text-field v-model="user.last_name" label="Last name" required/>
                    <v-text-field v-model="user.password" label="Password" required/>
                    <v-text-field v-model="user.city" label="City" required/>
                    <v-text-field v-model="user.locality" label="Locality" required/>
                    <v-text-field v-model="user.address" label="Address" required/>
                    <v-text-field v-model="user.st_number" label="Street number" required/>
                    <v-text-field v-model="user.phone" label="Phone" required/>
                    <v-text-field v-model="user.zip_code" label="Zip code" required/>               
                    <v-card-actions>
                      <v-spacer/>
                      <v-btn color="primary" type="submit">Register</v-btn>
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
      return{ 
        user: {
          username: null,
          first_name: null,
          last_name: null,
          password: null,
          city: null,
          locality: null,
          address: null,
          st_number: null,
          phone: null,
          zip_code: null
        }
      }
    },
    methods: {
      register() {
        this.$store
          .dispatch('register', this.user)
          .then(() => this.$router.push({ name: 'login' }))
      }
    }
  }
</script> 