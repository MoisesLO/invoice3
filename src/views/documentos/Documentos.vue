<template>
  <div class="mt-4">

    <!-- Header -->
    <h4 class="mb-3">Documentos Electronicos <small>07-04-2020</small></h4>
    <div class="d-flex row">
      <!-- Lado Izquierdo -->
      <div class="col-6 mr-auto">
        <router-link to="/factura" class="btn btn-secondary">Factura</router-link>
        <router-link to="/boleta" class="btn btn-secondary">Boleta</router-link>
        <router-link to="/credito" class="btn btn-secondary">Nota Credito</router-link>
        <router-link to="/debito" class="btn btn-secondary">Nota Debito</router-link>
      </div>
      <!-- Lado Derecho -->
      <div class="col-6 d-flex">
        <div class="form-row ml-auto">
          <div class="col-4">
            <button class="btn btn-secondary btn-block">Buscar</button>
          </div>
          <div class="col-8">
            <input type="text" class="form-control" placeholder="23456">
          </div>
        </div>
      </div>
    </div> <!-- End Header -->

    <!-- Table -->
    <table class="table table-striped table-bordered mt-3">
      <tbody>
      <tr>
        <th>#Tipo</th>
        <th>Numero</th>
        <th>Documento</th>
        <th>Razon</th>
        <th>Sunat</th>
        <th class="text-right pr-3">Total</th>
        <th>Opciones</th>
      </tr>
      <tr v-for="documento in documentos">
        <td>{{documento.tipo}}</td>
        <td>{{documento.numero}}</td>
        <td>{{documento.documento}}</td>
        <td>{{documento.razon}}</td>
        <td>{{documento.sunat}}</td>
        <td class="text-right pr-3">{{documento.total.toFixed(2)}}</td>
        <td>
          <button class="btn btn-sm btn-outline-secondary">Imprimir</button>
          <button class="btn btn-sm btn-outline-secondary ml-1">Opciones</button>
        </td>
      </tr>
      </tbody>
    </table>


  </div> <!-- End Container -->
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        documentos: {}
      }
    },
    methods: {
      getDocumentos() {
        axios.get('http://www.filltext.com/?rows=25&tipo=["Factura","Boleta"]&numero=["F001","B001"]~-~{numberLength|5}&documento={numberLength|11}&razon={firstName}~{lastName}&sunat=["Enviado","No"]&total={randomDecimal|4000}').then(res => {
          this.documentos = res.data;
          // console.log(typeof res.data[0].total)
        })
      }
    },
    mounted() {
      this.getDocumentos();
    }
  }
</script>