import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Busqueda',
    name: 'Busqueda',
    component: () => import('../views/Busqueda.vue')
  },
  {
    path: '/Ventas',
    name: 'Ventas',
    component: () => import('../views/Ventas.vue')
  },
  {
    path: '/Total',
    name: 'Total',
    component: () => import('../views/Total.vue')
  },
  {
    path: '*/',
    name: 'Vista404',
    component: () => import('../views/Vista404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
