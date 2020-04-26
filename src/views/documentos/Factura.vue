<template>
  <div>
    <h1 class="display-4 pt-3">Nueva Facturaa</h1>



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
                  <input type="text" class="form-control" id="documento" />
                  <small class="form-text text-muted">Ejm. 42516253</small>
                </div>
                <!-- Razon Social-->
                <div class="col-4 form-group">
                  <label for="razon">Razon Social</label>
                  <input type="text" class="form-control" id="razon" />
                  <small class="form-text text-muted">Ejm. Exportaciones Juanito S.A.C.</small>
                </div>
                <!-- Direccion -->
                <div class="col-4 form-group">
                  <label for="direccion">Direccion</label>
                  <input type="text" class="form-control" id="direccion" />
                  <small class="form-text text-muted">Ejm. Avenida Juan More 1567</small>
                </div>
                <!-- Serie -->
                <div class="col-2 form-group">
                  <label for="serie">Serie</label>
                  <select v-model="categoria.serie_id" class="form-control" id="serie">
                    <option value>Seleccione</option>
                    <option
                      :value="categoria.id"
                      v-for="categoria in categorias"
                    >{{categoria.serie}}</option>
                  </select>
                  <small class="form-text text-muted">Ejm. F001</small>
                </div>
              </div>
              <!-- End FormRow -->

              <!-- FormRow -->
              <div class="form-row">
                <!-- Tipo Operacion-->
                <div class="col-3">
                  <label for="tipo_operacion">Tipo Operacion</label>
                  <select
                    v-model="documento.tipo_operacion"
                    class="form-control"
                    id="tipo_operacion"
                  >
                    <option value>Seleccione</option>
                    <option
                      v-for="operacion in tipo_operaciones"
                      :value="operacion.codigo"
                    >{{operacion.descripcion}}</option>
                  </select>
                </div>
                <!-- Moneda -->
                <div class="col-2">
                  <label for="moneda">Moneda</label>
                  <select v-model="documento.moneda" id="moneda" class="form-control">
                    <option value>Seleccione</option>
                    <option
                      v-for="moneda in monedas.list"
                      :value="moneda.codigo"
                    >{{moneda.descripcion}}</option>
                  </select>
                </div>
                <!-- Fecha -->
                <div class="col-3">
                  <label for="fecha_emision">Fecha Emision</label>
                  <input
                    type="date"
                    v-model="documento.fecha_emision"
                    class="form-control"
                    id="fecha_emision"
                  />
                </div>
                <!-- Tipo Cambio -->
                <div class="col-2">
                  <label for="tipo_cambio">Tipo Cambio</label>
                  <input type="text" class="form-control" id="tipo_cambio" disabled />
                </div>
                <!-- Add Item -->
                <div class="col-2">
                  <label for="add_item">Agregar</label>
                  <a
                    href="#"
                    @click="OpenAddProducto"
                    class="btn btn-secondary form-control"
                    id="add_item"
                  >+ Add Item</a>
                </div>
              </div>
              <!-- End FormRow-->

              <!-- Raya -->
              <hr class="mt-4" />

              <!-- Titulos Items Producto Form Row -->
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
              </div>
              <!-- End Form Row -->

              <!-- Items Productos Form Row -->
              <div class="d-flex flex-row bd-highlight mb-2">
                <!-- Productos -->
                <div style="width: 47%">
                  <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe">
                  <div class="bg-white rounded-lg py-2 mt-2">
                    <a href="" class="block ">Opcion 1</a>
                    <a href="">Opcion 2</a>
                    <a href="">Opcion 3</a>
                  </div>
                  <!--<div class="input-group dropdown">
                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
                    <div class="absolute normal-case bg-white border right-0 w-108 text-left rounded-lg shadow overflow-hidden z-10">
                      <div class="flex flex-col">
                        Titulo
                      </div>
                    </div>
                    <div class="input-group-append">
                      <button type="button" class="btn btn-outline-secondary">Editar</button>
                      <button
                              data-toggle="dropdown"
                              class="btn btn-secondary dropdown-toggle"
                              aria-haspopup="true" aria-expanded="false">
                              <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <div class="dropdown-menu">
                        <form class="p-3 bg-light">
                          <h6 class="dropdown-header p-0 text-center">Item Avanzadas</h6>
                          <div class="dropdown-divider mb-0"></div>
                           Tipo IGV
                          <small class="text-muted">Tipo de IGV</small>
                          <select class="form-control form-control-sm">
                            <option value="1">Gravada</option>
                            <option value="2">Exonerada</option>
                            <option value="2">Inafecto</option>
                          </select>
                          &lt;!&ndash; Descuento &ndash;&gt;
                          <small class="text-muted">Descuento</small>
                          <input type="text"
                                 class="form-control form-control-sm"
                                 placeholder="0.00">
                          &lt;!&ndash; IGV Linea &ndash;&gt;
                          <small class="text-muted">IGV Linea</small>
                          <input type="text" disabled
                                 class="form-control form-control-sm"
                                 placeholder="0.00">
                          &lt;!&ndash; Eliminar &ndash;&gt;
                          <button type="button" class="btn btn-light btn-sm mt-1 btn-block dropdown-toggle"><i class="fa fa-trash"></i> Eliminar Fila</button>
                        </form>
                      </div>
                    </div>
                  </div>-->
                </div>

                <!-- Avanzadas Item -->
                <!--https://github.com/MoisesLO/factura/blob/master/view/documentos/modal_facturas.php-->
                <div style="width:5%" class="dropdown dropright pr-0 pl-2">
                  <!--                  <button
                      class="btn btn-secondary dropdown-toggle pl-1"
                      style="width: 100%"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                    <i class="fa fa-cog"></i>
                  </button>
                  <div class="dropdown-menu p-0 bg-light" style="max-width: 190px;">
                    <form class="p-3">
                      <h6 class="dropdown-header p-0 text-center">Item Avanzadas</h6>
                      <div class="dropdown-divider mb-0"></div>
                      &lt;!&ndash; Tipo IGV &ndash;&gt;
                      <small class="text-muted">Tipo de IGV</small>
                      <select class="form-control form-control-sm">
                        <option value="1">Gravada</option>
                        <option value="2">Exonerada</option>
                        <option value="2">Inafecto</option>
                      </select>
                      &lt;!&ndash; Descuento &ndash;&gt;
                      <small class="text-muted">Descuento</small>
                      <input type="text"
                             class="form-control form-control-sm"
                             placeholder="0.00">
                      &lt;!&ndash; IGV Linea &ndash;&gt;
                      <small class="text-muted">IGV Linea</small>
                      <input type="text" disabled
                             class="form-control form-control-sm"
                             placeholder="0.00">
                      &lt;!&ndash; Eliminar &ndash;&gt;
                      <button type="button" class="btn btn-light btn-sm mt-1 btn-block dropdown-toggle"><i class="fa fa-trash"></i> Eliminar Fila</button>
                    </form>
                  </div>-->
                </div>

                <!-- Cantidad -->
                <div style="width: 13%; box-sizing: border-box;">
                  <div class="pr-2 pl-2 bg-light">
                    <input type="text" class="form-control text-right" placeholder="0" />
                  </div>
                </div>
                <!-- Precio -->
                <div style="width: 15%; box-sizing: content-box;">
                  <div class="pr-2">
                    <input type="text" class="form-control text-right" placeholder="0.00" />
                  </div>
                </div>
                <!-- Subtotal -->
                <div class style="width: 15%; box-sizing: content-box;">
                  <div class="pr-2">
                    <input type="text" class="form-control text-right" placeholder="0.00" disabled />
                  </div>
                </div>
                <!-- Total -->
                <div style="width: 15%; box-sizing: border-box;">
                  <div class="bg-light">
                    <input type="text" class="form-control text-right" placeholder="0.00" disabled />
                  </div>
                </div>
              </div>

              <!-- Form Row -->
              <div v-for="item in documento.items" class="form-row pb-1">
                <!-- Producto -->
                <div class="col-3">
                  <input type="text" class="form-control" />
                </div>
                <!-- Add -->
                <div class="col-1">
                  <button class="btn btn-outline-secondary btn-block">Ad</button>
                </div>
                <!-- Cantidad -->
                <div class="col-1">
                  <input type="text" class="form-control" />
                </div>
                <!-- Unidad -->
                <div class="col-1">
                  <select class="form-control">
                    <option value>Kilogramos</option>
                    <option value>Litros</option>
                    <option value>Miligramos</option>
                    <option value>Gramos</option>
                  </select>
                </div>
                <!-- Precio -->
                <div class="col-2">
                  <input type="text" class="form-control" />
                </div>
                <!-- IGV -->
                <div class="col-2">
                  <input type="text" class="form-control" />
                </div>
                <!-- Total -->
                <div class="col-2">
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- Form Row -->
            </form>

            <!-- Modal Item -->
            <div
              class="modal fade"
              id="AddProducto"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-row justify-content-center">
                      <div class="col-8">
                        <input
                          type="text"
                          class="form-control form-control-lg align-content-center"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal Item -->
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import $ from "jquery";

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      documento: {
        moneda: "",
        tipo_operacion: "",
        fecha_emision: "",
        items: [
          {
            codigo: "",
            producto_id: "",
            descripcion: "",
            unidad: "",
            cantidad: "",
            precio_sin_igv: "",
            precio_con_igv: "",
            total: ""
          },
          {
            codigo: "",
            producto_id: "",
            descripcion: "",
            unidad: "",
            cantidad: "",
            precio_sin_igv: "",
            precio_con_igv: "",
            total: ""
          }
        ]
      },
      categoria: {
        serie_id: ""
      },
      tipo_operaciones: [],
      monedas: {
        default: "",
        list: []
      },
      categorias: []
    };
  },
  methods: {
    OpenAddProducto() {
      $("#AddProducto").modal("show");
      console.log("salio modal");
    },
    GetSeleccionado(producto) {
      console.log(producto);
    },
    GetProducto(producto) {
      axios.get("http://localhost:3000/productos?q=" + producto).then(res => {
        this.options = res.data;
      });
      console.log(producto);
    },
    GetFecha() {
      axios.get("http://localhost:3000/fecha_emision").then(res => {
        this.documento.fecha_emision = res.data.fecha;
        console.log(res.data.fecha);
      });
    },
    GetMonedas() {
      axios.get("http://localhost:3000/monedas").then(res => {
        this.monedas.list = res.data;
        // console.log(res.data)
        res.data.forEach(item => {
          if (item.default == 1) {
            this.documento.moneda = item.codigo;
          }
        });
      });
    },
    GetSeries() {
      axios
        .get("http://localhost:3000/series?type=FF&_sort=default&_order=desc")
        .then(res => {
          this.categorias = res.data;
          res.data.forEach(item => {
            if (item.default == 1) {
              this.categoria.serie_id = item.id;
            }
          });
          // console.log(this.categoria)
        });
    },
    GetOperaciones() {
      axios.get("http://localhost:3000/operaciones").then(res => {
        res.data.forEach(item => {
          if (item.default == 1) {
            this.documento.tipo_operacion = item.codigo;
          }
        });
        this.tipo_operaciones = res.data;
      });
    }
  },
  mounted() {
    this.GetSeries();
    this.GetOperaciones();
    this.GetMonedas();
    this.GetFecha();
  }
};
</script>
<style lang="scss">
  @import "../../css/tailwind.css";
</style>
