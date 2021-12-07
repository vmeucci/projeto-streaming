import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MeusFilmes from '../views/CatalogoFilmes'
import MinhasSeries from '../views/CatalogoSeries'
import MinhasCategorias from '../views/Categorias'
import Login from '../views/Login'

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
    component: Login,
    meta: {notRenderMenu: true},
  },
  {
    path: '/catalogo-filmes',
    name: 'CatalogoFilmes',
    component: MeusFilmes
  },
  {
    path: '/catalogo-series',
    name: 'CatalogoSeries',
    component: MinhasSeries
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: MinhasCategorias
  },

]

const router = new VueRouter({
  routes,
});

export default router
