import Vue from 'vue';
import Vuex from 'vuex';
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosProductos: [
      {codigo: '0001', nombre: 'Sekiro', stock: 100, precio: 30000, color: 'red', destacado: true},
      {codigo: '0002', nombre: 'Fifa 21', stock: 100, precio: 25000, color: 'blue', destacado: false},
      {codigo: '0003', nombre: 'Gears of War 4', stock: 100, precio: 15000, color: 'green', destacado: true},
      {codigo: '0004', nombre: 'Mario Tennis Aces', stock: 100, precio: 35000, color: 'yellow', destacado: false},
      {codigo: '0005', nombre: 'Bloodborne', stock: 100, precio: 10000, color: 'blue', destacado: false},
      {codigo: '0006', nombre: 'Forza Horizon 4', stock: 100, precio: 20000, color: 'red', destacado: true}
    ],
    msg1: '32 Bits',
    msg2: 'Juegos de PC y consolas',
  },
  getters: {
    titulo(state){
      return state.msg1;
    },
    subtitulo(state){
      return state.msg2;
    },
    buscarCodigo: (state) => (codigo) => {
      return state.datosProductos.filter(producto => producto.codigo == codigo)
    },
    stockProductos(state){
      return state.datosProductos.filter(productos => productos.stock > 0)
    },
    totalProductos(state, getters){
      return getters.stockProductos.length;
    },
    listaProductos(state){
      return state.datosProductos
    },
    ventasTotales(state){
      return state.datosProductos.reduce((acumulador, valor) => {
        return acumulador + (valor.precio*valor.stock);
      },0);
    },
    ventasRegistrada(state){
      return state.datosProductos.reduce((acumulador, valor) => {
        return acumulador + valor.stock;
      },0);
    }
  },
  mutations: {
    decreStock(state, index){
      if (state.datosProductos[index].stock > 0) {
        state.datosProductos[index].stock--;
        
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '¡Producto sin Stock!',
          footer: `Te invitamos a Comprar nuestro juego del mes ${state.datosProductos[1].nombre}`
        })
      }
      if (state.datosProductos[index].stock == 0) {
        state.datosProductos[index].disponible = false;
      }
    },
  },
  actions: {
    decrementaStock(context, index){
      context.commit('decreStock', index);
    }
  }
})
