<template>
  <div id="app">
    <navbar :key="updated"></navbar>
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
  import Navbar from '../src/components/Navbar'
  export default {
    components: {
      navbar: Navbar
    },
    data() {
      return {
        updated: 0
      }
    },
    watch: {
      '$route': function (value) {
        // console.log(value)
        // Actualiza el componente Heade cuando pasa a esas rutas
        if (value.name == 'Documentos' || value.name == 'Login'){
          this.updated++;
        }
        // console.log(value.name)
      }
    }
  }
</script>