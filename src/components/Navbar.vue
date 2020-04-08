<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Lineysoft</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown" v-if="user.loggedIn == 'si'">
          <a class="nav-link dropdown-toggle" href="#" id="productos" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Productos
          </a>
          <div class="dropdown-menu" aria-labelledby="productos">
            <a class="dropdown-item" href="#">Productos</a>
            <a class="dropdown-item" href="#">Categorias</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-if="user.loggedIn != 'si'" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-if="user.loggedIn != 'si'" href="#">Registro</a>
        </li>
        <li class="nav-item dropdown" v-if="user.loggedIn == 'si'">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{user.name}}
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Tu Cuenta</a>
            <a class="dropdown-item" @click="logout" href="#">Salir</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          loggedIn: ''
        }
      }
    },
    methods: {
      getUser(){
        let usuario = this.$store.getters.getUser;
        this.user.name = usuario.name;
        this.user.email = usuario.email;
        this.user.loggedIn = usuario.loggedIn;
        // console.log(this.user);
      },
      logout(){
        this.$store.commit('logout')
        this.$router.push('/login')
      }
    },
    mounted() {
      this.getUser();
    }
  }
</script>