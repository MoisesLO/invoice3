<template>
  <div>
    <h1 class="display-4 pt-3">Nueva Factura</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-10 mt-3">
        <!-- Card -->
        <div class="card bg-light">
          <div class="card-body">
            <form>
              <div class="form-row">
                <!-- Documento -->
                <div class="col-2 form-group">
                  <label for="documento">Documento</label>
                  <input type="text" class="form-control" id="documento">
                  <small class="form-text text-muted">Ejm. 42516253</small>
                </div>
                <!-- Razon Social-->
                <div class="col-4 form-group">
                  <label for="razon">Razon Social</label>
                  <input type="text" class="form-control" id="razon">
                  <small class="form-text text-muted">Ejm. Exportaciones Juanito S.A.C.</small>
                </div>
                <!-- Direccion -->
                <div class="col-4 form-group">
                  <label for="direccion">Direccion</label>
                  <input type="text" class="form-control" id="direccion">
                  <small class="form-text text-muted">Ejm. Avenida Juan More 1567</small>
                </div>
                <!-- Serie -->
                <div class="col-2 form-group">
                  <label for="serie">Serie</label>
                  <select class="form-control" id="serie">
                    <option value="">Seleccione</option>
                  </select>
                  <small class="form-text text-muted">Ejm. F001</small>
                </div>

              </div>
            </form>
          </div>
        </div><!-- End Card -->
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        categorias: []
      }
    },
    methods: {
      GetSeries(){
        axios.get('http://localhost:3000/series').then(res => {
          this.categorias = res.data;
          console.log(res.data)
        })
      }
    },
    mounted() {
      this.GetSeries();
    }
  }
</script>