<template>
  <div id="base">
    <Toolbar/>
    <router-view/>
    <Pie/>
  </div>
</template>

<script>
  import Pie from './Base/Pie'
  import Toolbar from './Base/Toolbar'

  export default {
    name: 'Base',
    components: {
      Pie,
      Toolbar
    }
  }
</script>

