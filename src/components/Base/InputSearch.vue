<template>
    <div id="input_search">
      <v-form @submit.prevent='search'>
        <v-text-field
          v-model="title"
          class="mx-3"
          label="Search"
          prepend-inner-icon="search"
          flat
          solo-inverte/>
        <v-btn type="submit" hidden/>
      </v-form>
    </div>
</template>

<script>
  export default {
    name: 'InputSearch',
    data() {
      return {
        title: '',
      }
    },
    methods: {
      search() {
        this.$store.dispatch('search', this.title)
      }
    }
  }
</script>

