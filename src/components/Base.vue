<template>
  <div id="base">
    <Toolbar/>
    <Producto/>
    <router-view/>
    <Pie/>
  </div>
</template>

<script>
  import Pie from './Base/Pie'
  import Toolbar from './Base/Toolbar'
  import Producto from './Formulario/Producto'

  export default {
    name: 'Base',
    components: {
      Pie,
      Toolbar,
      Producto
    }
  }
</script>

