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
                  <select class="form-control" id="tipo_operacion">
                    <option value="">Seleccione</option>
                    <option value="01">Venta Interna</option>
                    <option value="02">Exportacion</option>
                    <option value="03">No Domicialados</option>
                    <option value="03">Venta Interna - Anticipos</option>
                    <option value="03">Venta Itinerante</option>
                    <option value="03">Factura Guia</option>
                    <option value="03">Venta Arroz Pilado</option>
                    <option value="03">Factura - Comprobante de Percepcion</option>
                    <option value="03">Factura - Guia Remitente</option>
                    <option value="03">Factura - Guia Transportista</option>
                    <option value="03">Boleta de Venta - Comprobante de Percepcion</option>
                    <option value="03">Gasto Deducible Pesona Natural</option>
                  </select>
                </div>
                <!-- Moneda -->
                <div class="col-2">
                  <label for="moneda">Moneda</label>
                  <select id="moneda" class="form-control">
                    <option value="">Seleccione</option>
                  </select>
                </div>
                <!-- Fecha -->
                <div class="col-3">
                  <label for="fecha_emision">Fecha Emision</label>
                  <input type="date" class="form-control" id="fecha_emision">
                </div>
                <!-- Tipo Cambio -->
                <div class="col-2">
                  <label for="tipo_cambio">Tipo Cambio</label>
                  <input type="text" class="form-control" id="tipo_cambio">
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
        categoria: {
          serie_id: ''
        },
        categorias: []
      }
    },
    methods: {
      GetSeries(){
        axios.get('http://localhost:3000/series?type=FF&_sort=default&_order=desc').then(res => {
          this.categorias = res.data;
          res.data.forEach(item => {
            if (item.default == 1){
              this.categoria.serie_id = item.id;
            }
          })
          console.log(this.categoria)
        })
      }
    },
    mounted() {
      this.GetSeries();
    }
  }
</script>