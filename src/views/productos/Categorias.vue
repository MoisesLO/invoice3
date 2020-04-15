<template>
  <div class="row d-flex justify-content-center">
    <div class="col-6 mt-4">
      <!-- Categoria Header -->
      <div class="row">
        <div class="col-7">
          <h1 class="display-4">Categorias</h1>
        </div>
        <div class="col-5 text-right m-auto">
          <button @click="OpenCategoria('new')" class="btn btn-secondary">Nuevo</button>
        </div>
      </div>

      <table class="table bg-light">
        <tbody>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
        <tr v-for="(categoria, index) in categorias">
          <td>{{index + 1}}</td>
          <td>{{categoria.nombre}}</td>
          <td>
            <button @click="OpenCategoria('edit')" class="btn btn-secondary btn-sm">Editar</button>
          </td>
        </tr>
        </tbody>
      </table>

      <!-- Modal -->
      <div class="modal fade" id="categoriaModal" tabindex="-1" role="dialog" aria-labelledby="categoriaModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 v-if="option=='new'" class="modal-title">Nueva Categoria</h5>
              <h5 v-if="option=='edit'" class="modal-title">Editar Categoria</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-row">
                <div class="col-7">
                  <input type="text" class="form-control" v-model="categoria.nombre">
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button v-if="option=='edit'" type="button" @click="DeleteCategoria" class="btn btn-danger">Eliminar Categoria</button>
              <button v-if="option=='new'" type="button" @click="SaveCategoria" class="btn btn-primary">Crear Categoria</button>
              <button v-if="option=='edit'" type="button" @click="EditCategoria" class="btn btn-primary">Editar Categoria</button>
            </div>
          </div>
        </div>
      </div><!-- End Modal -->

    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import $ from 'jquery';

  export default {
    data() {
      return {
        option: '',
        categoria: {
          nombre: ''
        },
        categorias: []
      };
    },
    methods: {
      DeleteCategoria(){
        $('#categoriaModal').modal('hide');
      },
      EditCategoria(){
        $('#categoriaModal').modal('hide');
        this.GetCategorias();
      },
      SaveCategoria(){
        $('#categoriaModal').modal('hide');
        this.GetCategorias();
      },
      OpenCategoria(option){
        this.option = option;
        if (option == 'new'){
          this.categoria.nombre = '';
        }else if (option == 'edit'){
          axios.get('http://www.filltext.com/?rows=20&pretty=true&nombre={lorem}').then(res => {
            this.categoria.nombre = res.data[0].nombre;
          })
        }
        $('#categoriaModal').modal('show');
        // console.log(option)
      },
      GetCategorias() {
        axios.get('http://www.filltext.com/?rows=20&pretty=true&nombre={lorem}').then(res=>{
          this.categorias = res.data;
        })
      }
    },
    mounted() {
      this.GetCategorias();
    }
  };
</script>