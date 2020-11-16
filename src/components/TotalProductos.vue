<template>
    <div>
        <div class="card text-center mt-5">
            <div class="card-header">
                TOTAL DE PRODUCTOS
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <footer class="blockquote">Total: <cite title="Source Title">{{totalProductos}}</cite></footer>
                </blockquote>
            </div>
        </div>
        <div class="card text-center mt-5">
            <div class="card-header">
                FILTRO
            </div>
            <div class="card-body">
                <input type="text" class="text-center" v-model="busqueda">
                <blockquote class="blockquote mb-0">
                <footer class="blockquote"><cite title="Source Title" v-for="(producto, codigo) in buscarCodigo" :key="codigo">{{producto.nombre}}</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TotalProductos',
    data() {
        return {
            busqueda: '',
        }
    },
    computed: {
        ...mapGetters(['totalProductos', 'buscarCodigo']),
        buscarCodigo() {
            return this.$store.getters.buscarCodigo(this.busqueda)
        }
    },
}
</script>

<style>

</style>