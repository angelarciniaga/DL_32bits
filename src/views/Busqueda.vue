<template>
  <div class="container">
    
    <TotalProductos/>
    <ListaProductos/>
  </div>
</template>

<script>

import ListaProductos from '../components/ListaProductos.vue';
import TotalProductos from '../components/TotalProductos.vue';

export default {
  name: 'Busqueda',
  
  components: { 
    ListaProductos,
    TotalProductos
  }
}
</script>