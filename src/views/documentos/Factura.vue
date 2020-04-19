<template>
  <div>
    <h1 class="display-4 pt-3">Nueva Factura</h1>
    <div class="row d-flex justify-content-center">
      <div class="col-10 mt-3">
        <!-- Card -->
        <div class="card bg-light">
          <div class="card-body">
            <form>

              <!-- FormRow-->
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
                  <select v-model="categoria.serie_id" class="form-control" id="serie">
                    <option value="">Seleccione</option>
                    <option :value="categoria.id" v-for="categoria in categorias">{{categoria.serie}}</option>
                  </select>
                  <small class="form-text text-muted">Ejm. F001</small>
                </div>
              </div> <!-- End FormRow -->

              <!-- FormRow -->
              <div class="form-row">
                <!-- Tipo Operacion-->
                <div class="col-3">
                  <label for="tipo_operacion">Tipo Operacion</label>
                  <select v-model="documento.tipo_operacion" class="form-control" id="tipo_operacion">
                    <option value="">Seleccione</option>
                    <option v-for="operacion in tipo_operaciones" :value="operacion.codigo">{{operacion.descripcion}}</option>
                  </select>
                </div>
                <!-- Moneda -->
                <div class="col-2">
                  <label for="moneda">Moneda</label>
                  <select v-model="documento.moneda" id="moneda" class="form-control">
                    <option value="">Seleccione</option>
                    <option v-for="moneda in monedas.list" :value="moneda.codigo">{{moneda.descripcion}}</option>
                  </select>
                </div>
                <!-- Fecha -->
                <div class="col-3">
                  <label for="fecha_emision">Fecha Emision</label>
                  <input type="date" v-model="documento.fecha_emision" class="form-control" id="fecha_emision">
                </div>
                <!-- Tipo Cambio -->
                <div class="col-2">
                  <label for="tipo_cambio">Tipo Cambio</label>
                  <input type="text" class="form-control" id="tipo_cambio" disabled>
                </div>
                <!-- Add Item -->
                <div class="col-2">
                  <label for="add_item">Agregar</label>
                  <button class="btn btn-secondary form-control" id="add_item">+ Add Item</button>
                </div>
              </div><!-- End FormRow-->

              <div class="form-row pt-3">
                <div class="col">
                  <h4>Productos</h4>
                </div>
              </div>

              <!-- Form Row -->
              <div class="form-row">
                <div class="col-3">
                  <label>Productos</label>
                </div>
                <div class="col-1">
                  <label>Op</label>
                </div>
                <div class="col-2 text-left">
                  <label>Cantidad</label>
                </div>
                <div class="col-2 text-right">
                  <label>Precio</label>
                </div>
                <div class="col-2 text-right">
                  <label>Igv</label>
                </div>
                <div class="col-2 text-right">
                  <label>Total</label>
                </div>
              </div><!-- End Form Row -->

              <!-- Form Row -->
              <div class="form-row">
                <!-- Producto -->
                <div class="col-3">
                  <input type="text" class="form-control">
                </div>
                <!-- Add -->
                <div class="col-1">
                  <button class="btn btn-outline-secondary btn-block">Ad</button>
                </div>
                <!-- Cantidad -->
                <div class="col-1">
                  <input type="text" class="form-control">
                </div>
                <!-- Unidad -->
                <div class="col-1">
                  <select class="form-control">
                    <option value="">Kilogramos</option>
                    <option value="">Litros</option>
                    <option value="">Miligramos</option>
                    <option value="">Gramos</option>
                  </select>
                </div>
                <!-- Precio -->
                <div class="col-2">
                  <input type="text" class="form-control">
                </div>
                <!-- IGV -->
                <div class="col-2">
                  <input type="text" class="form-control">
                </div>
                <!-- Total -->
                <div class="col-2">
                  <input type="text" class="form-control">
                </div>
              </div><!-- Form Row -->

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
        documento:{
          moneda: '',
          tipo_operacion: '',
          fecha_emision: ''
        },
        categoria: {
          serie_id: ''
        },
        tipo_operaciones: [],
        monedas: {
          default: '',
          list: []
        },
        categorias: []
      }
    },
    methods: {
      GetFecha(){
        axios.get('http://localhost:3000/fecha_emision').then(res => {
          this.documento.fecha_emision = res.data.fecha;
          console.log(res.data.fecha)
        })
      },
      GetMonedas(){
        axios.get('http://localhost:3000/monedas').then(res => {
          this.monedas.list = res.data;
          // console.log(res.data)
          res.data.forEach(item => {
            if (item.default == 1){
              this.documento.moneda = item.codigo;
            }
          })
        })
      },
      GetSeries(){
        axios.get('http://localhost:3000/series?type=FF&_sort=default&_order=desc').then(res => {
          this.categorias = res.data;
          res.data.forEach(item => {
            if (item.default == 1){
              this.categoria.serie_id = item.id;
            }
          })
          // console.log(this.categoria)
        })
      },
      GetOperaciones(){
        axios.get('http://localhost:3000/operaciones').then(res => {
          res.data.forEach(item => {
            if (item.default == 1){
              this.documento.tipo_operacion = item.codigo;
            }
          })
          this.tipo_operaciones = res.data;
        })
      }
    },
    mounted() {
      this.GetSeries();
      this.GetOperaciones();
      this.GetMonedas();
      this.GetFecha();
    }
  }
</script>