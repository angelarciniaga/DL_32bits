<template>
    <div class="text-center">
        <div class="container jumbotron mt-5 jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-4">{{titulo}}</h1>
                <p class="lead">{{subtitulo}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Jumbotron',
    computed: {
    ...mapGetters(['titulo','subtitulo'])
    },
}
</script>

<style>

</style>