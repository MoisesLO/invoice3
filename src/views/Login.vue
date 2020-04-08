<template>
  <div class="d-flex justify-content-center">
    <div class="col-6 pt-5">
      <div class="card">
        <div class="card-header">Entrar al sistema</div>
        <div class="card-body">

          <form @submit.prevent="Login">

            <div class="form-group row">
              <label class="col-form-label col-3 text-right">Email</label>
              <div class="col-9">
                <input type="email" v-model="user.email" class="form-control">
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-3 text-right">Password</label>
              <div class="col-9">
                <input type="password" v-model="user.password" class="form-control">
              </div>
            </div>

            <div class="form-group row">
              <div class="col-form-label col-3"></div>
              <div class="col-9">
                <button type="submit" class="btn btn-primary">Entrar</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  // axios.defaults.withCredentials = true;
  // axios.defaults.baseURL = "http://localhost:8000/";
  export default {
    data(){
      return{
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      Login(){
        axios.get('http://www.filltext.com/?rows=1&name={firstName}&pretty=true&email={email}').then(res => {
          // console.log(res.data)
          if (res.data.name != '') {
            this.$store.commit('login', res.data[0]);
            this.$router.push('/documentos')
            // console.log(res.data)
          }
        });

        // axios.get('/sanctum/csrf-cookie').then(response => {
        //   axios.post('/login', this.user).then(res => {
        //     if (res.data.name != ''){
        //       this.$store.commit('login',res.data);
        //       this.$router.push('/documentos')
        //       // console.log(res.data)
        //     }
        //   })
        // });
      }
    }
  }
</script>