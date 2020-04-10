<template>
  <div class="pt-4">
    <h4>Productos</h4>
    <div class="d-flex">
      <div class="mr-auto">
        <button class="btn btn-light">Agregar Producto</button>
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
            <th>Total</th>
            <th>Acciones</th>
          </tr>
          <tr v-for="(producto, index) in productos">
            <td>{{index+1}}</td>
            <td>{{producto.codigo}}</td>
            <td>{{producto.producto}}</td>
            <td>{{producto.fecha}}</td>
            <td>{{producto.precio.toFixed(2)}}</td>
            <td>{{producto.igv.toFixed(2)}}</td>
            <td>{{producto.total.toFixed(2)}}</td>
            <td>
              <button class="btn btn-secondary btn-sm">Editar</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  var dateFormat = require('dateformat');
  export default {
    data() {
      return {
        productos: {}
      }
    },
    methods: {
      getProductos(){
        axios.get('http://www.filltext.com/?rows=20&pretty=true&codigo={string|8}&producto={lorem}&fecha=["01-04-2020","25-07-2020","12-09-2020","24-12-2020"]&precio={randomDecimalRange|500to2000}&igv={randomDecimalRange|30to200}&total={randomDecimalRange|800to300}').then(res => {
          this.productos = res.data;
          console.log(dateFormat(res.data[0].fecha))
        })
      }
    },
    mounted() {
      this.getProductos();
    }
  }
</script>