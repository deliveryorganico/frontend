<template>
  <div id="profile">
    <Toolbar></Toolbar>
    <v-layout column justify-center>

    <v-expansion-panel popout>
      <v-expansion-panel-content
        v-for="(message, i) in messages"
        :key="i"
        hide-actions
      >
        <v-layout
          slot="header"
          align-center
          row
          spacer
        >
          <v-flex xs4 sm2 md1>
            <v-avatar
              slot="activator"
              size="36px"
            >
              <v-icon
                v-if="message.avatar"
                alt="Avatar"> account_circle
              </v-icon>

            </v-avatar>
          </v-flex>

          <v-flex sm5 md3 hidden-xs-only>
            <strong v-html="message.name"></strong>
            <span
              v-if="message.total"
              class="grey--text"
            >
              &nbsp;({{ message.total }})
            </span>
          </v-flex>

          <v-flex no-wrap xs5 sm3>
            <v-chip
              v-if="message.new"
              :color="`${message.color} lighten-4`"
              class="ml-0"
              label
              small
            >
              {{ message.new }} new
            </v-chip>
            <strong v-html="message.title"></strong>
          </v-flex>

          <v-flex
            v-if="message.excerpt"
            class="grey--text"
            ellipsis
            hidden-sm-and-down
          >
            &mdash;
            {{ message.excerpt }}
          </v-flex>
        </v-layout>

        <v-card>
          <v-divider></v-divider>
          <v-card-text v-text="lorem">
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
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
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'User Name',
          title: 'Descripcion Personal',

        }
      ],
    })
}
</script>
