<template>
  <div id="base">
    <Toolbar/>
    <Formulario/>
    <router-view/>
    <Pie/>
  </div>
</template>

<script>
  import Pie from './Base/Pie'
  import Toolbar from './Base/Toolbar'
  import Formulario from './Formulario/Formulario'

  export default {
    name: 'Base',
    components: {
      Pie,
      Toolbar,
      Formulario
    }
  }
</script>

