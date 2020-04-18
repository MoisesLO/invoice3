import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'

// Documentos
import Documentos from '../views/documentos/Documentos'
import Factura from "../views/documentos/Factura";
import Boleta from "../views/documentos/Boleta";
import Credito from "../views/documentos/Credito";
import Debito from "../views/documentos/Debito";

// Productos
import Productos from '../views/productos/Productos'
import Categorias from '../views/productos/Categorias'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/documentos',
    name: 'Documentos',
    component: Documentos
  },
  {
    path: '/factura',
    name: 'Factura',
    component: Factura
  },
  {
    path: '/boleta',
    name: 'Boleta',
    component: Boleta
  },
  {
    path: '/credito',
    name: 'Credito',
    component: Credito
  },
  {
    path: '/boleta',
    name: 'Boleta',
    component: Boleta
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
