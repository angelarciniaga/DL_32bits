<template>
  <div>
    <div class="card text-center mt-5">
        <div class="card-header">
            PRODUCTOS CON STOCK
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0">
            <footer class="blockquote">Total: <cite title="Source Title">{{totalProductos}}</cite></footer>
            </blockquote>
        </div>
    </div>
    <h1 class="dislplay-3 text-center mt-5">Productos en Ventas</h1>
        <table class="container text-center table">
            <thead class="thead-dark">
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Stok</th>
                <th>Precio</th>
                <th>Venta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in stockProductos" :key="index">
                <th>{{item.codigo}}</th>
                <th>{{item.nombre}}</th>
                <th>{{item.stock}}</th>
                <th>{{item.precio}}</th>
                <th><button type="button" class="btn btn-success" @click="decrementaStock(index)">Comprar</button></th>
                </tr>
            </tbody>
            </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'VentaJuegos',
    computed: {
        ...mapGetters(['totalProductos', 'stockProductos'])
    },
    methods: {
        ...mapActions(['decrementaStock'])
    },
}
</script>

<style>

</style>