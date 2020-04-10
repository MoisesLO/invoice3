<template>
  <div class="pt-4">

    <!-- Title -->
    <h4>Productos</h4>
    <div class="d-flex">
      <div class="mr-auto">
        <button class="btn btn-light" data-toggle="modal" data-target="#exampleModal">Agregar Producto</button>
      </div>
      <div>
        <div class="form-row">
          <div class="col-4">
            <button class="btn btn-light form-control">Buscar</button>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" placeholder="Nombre Producto">
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla -->
    <div class="d-flex justify-content-center row mt-3">
      <div class="col-12">
        <table class="table table-striped">
          <tbody>
          <tr>
            <th>#</th>
            <th>Codigo</th>
            <th>Producto</th>
            <th>Actualiza</th>
            <th>Precio</th>
            <th>IGV</th>
            <!--<th>Total</th>-->
            <th>Acciones</th>
          </tr>
          <tr v-for="(producto, index) in productos">
            <td>{{index+1}}</td>
            <td>{{producto.codigo}}</td>
            <td>{{producto.producto}}</td>
            <td>{{producto.fecha}}</td>
            <td>{{producto.precio.toFixed(2)}}</td>
            <td>{{producto.igv.toFixed(2)}}</td>
            <!--<td>{{producto.total.toFixed(2)}}</td>-->
            <td>
              <button class="btn btn-secondary btn-sm">Editar</button>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div class="form-row">
              <!-- Codigo -->
              <div class="col-4 form-group">
                <label for="codigo">Codigo</label>
                <input type="text" v-model="producto.codigo" class="form-control" id="codigo">
                <small class="form-text text-muted">Ejm. RTGF567G</small>
              </div>
              <!-- Producto -->
              <div class="col-8 form-group">
                <label for="producto">Producto</label>
                <input type="text" v-model="producto.producto" class="form-control" id="producto">
                <small class="form-text text-muted">Ejm. Arroz Costeno Graneadito 23 Kg</small>
              </div>
            </div>

            <div class="form-row">
              <!-- Precio Sin Igv -->
              <div class="col form-group">
                <label for="precio_sin_igv">Precio Sin Igv</label>
                <input type="text" v-model="producto.precio_sin_igv" class="form-control" id="precio_sin_igv">
                <small class="form-text text-muted">Ejm. 30.45</small>
              </div>
              <!-- Igv -->
              <div class="col form-group">
                <label for="igv">Igv</label>
                <input type="text" v-model="producto.igv" class="form-control" id="igv">
                <small class="form-text text-muted">Ejm. 23.78</small>
              </div>
              <!-- Precion con Igv -->
              <div class="col form-group">
                <label for="precio_con_igv">Precio Con Igv</label>
                <input type="text" v-model="producto.precio_con_igv" class="form-control" id="precio_con_igv">
                <small class="form-text text-muted">Ejm. 45.34</small>
              </div>
<!--              <div class="col form-group">-->
<!--                <label for="total">Total</label>-->
<!--                <input type="text" class="form-control" id="total">-->
<!--                <small class="form-text text-muted">Ejm. 134.78</small>-->
<!--              </div>-->
            </div>

            <div class="form-row">
              <!-- Tipo Igv -->
              <div class="col-5 form-group">
                <label for="tipo_igv">Tipo de Igv</label>
                <select v-model="producto.tipo_igv" class="custom-select" id="tipo_igv">
                  <option selected>Seleccione</option>
                  <option value="1">Operacion Onerosa</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <small class="form-text text-muted">Ejm. Operacion fiable</small>
              </div>
              <!-- Stock-->
              <div class="col-4">
                <label for="stock">Stock</label>
                <input type="text" v-model="producto.stock" class="form-control" id="stock">
                <small class="form-text text-muted">Ejm. 3500</small>
              </div>
              <!-- Unidad -->
              <div class="col-3 form-group">
                <label for="unidad">UND</label>
                <select v-model="producto.unidad" class="custom-select" id="unidad">
                  <option selected>Seleccione</option>
                  <option value="1">Kilogramos</option>
                  <option value="2">Gramos</option>
                  <option value="3">Litros</option>
                </select>
                <small class="form-text text-muted">Ejm. Kilogramos</small>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" @click="SendProducto" class="btn btn-primary">Crear Producto</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        productos: {},
        producto: {
          codigo: '',
          producto: '',
          precio_sin_igv: '',
          precio_con_igv: '',
          igv: '',
          tipo_igv: '',
          stock: '',
          unidad: ''
        }
      }
    },
    methods: {
      getProductos(){
        axios.get('http://www.filltext.com/?rows=20&pretty=true&codigo={string|8}&producto={lorem}&fecha=["01-04-2020","25-07-2020","12-09-2020","24-12-2020"]&precio={randomDecimalRange|500to2000}&igv={randomDecimalRange|30to200}&total={randomDecimalRange|800to300}').then(res => {
          this.productos = res.data;
        })
      },
      SendProducto(){
        console.log(this.producto)
      }
    },
    mounted() {
      this.getProductos();
    }
  }
</script>