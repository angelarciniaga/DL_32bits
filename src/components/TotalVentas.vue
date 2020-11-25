<template>
    <div>
        <div class="card text-center mt-5">
            <div class="card-header">
                TOTAL DE PRODUCTOS: 
                {{ventasRegistrada}}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                <footer class="blockquote">Total: <cite title="Source Title">$ {{ventasTotales--}}</cite></footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TotalVentas',
    computed: {
        ...mapGetters(['ventasTotales','ventasRegistrada'])
    },
}
</script>

<style>

</style>