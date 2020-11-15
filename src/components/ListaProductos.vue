<template>
    <div>
        <h1 class="dislplay-3 text-center">Lista de Productos</h1>
        <table class="container text-center table table-dark">
            <thead>
                <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Stok</th>
                <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in listaProductos" :key="index" :style="{backgroundColor: item.color}">
                <th>{{item.codigo}}</th>
                <th>{{item.nombre}}</th>
                <th>{{item.stock}}</th>
                <th>{{item.precio}}</th>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ListaProductos',
    computed: {
        ...mapGetters(['listaProductos'])
    },

}
</script>

<style>

</style>