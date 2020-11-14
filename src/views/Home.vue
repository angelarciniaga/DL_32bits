<template>
  <div class="text-center">
    <div class="jumbotron jumbotron-fluid">
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
  name: 'Home',
  computed: {
    ...mapGetters(['titulo','subtitulo'])
  },
}
</script>
