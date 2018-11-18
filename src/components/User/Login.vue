<template>
  <v-app id="inspire">
    <v-content>
      <div v-for="user in users" :key="user.id">
        {{ user }}
      </div>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="amber">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field 
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"></v-text-field>
                  <v-text-field 
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        users: null
      }
    },
    created () {
      axios.get('http://192.168.20.182:8000/rest/profile/')
      .then(res => {
        this.users = res.data
      });
    }
  }
</script> 