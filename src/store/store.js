import Vue from 'vue'
import Vuex from 'vuex'

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
    msg2: 'Juegos de PC y consolas'
  },
  getters: {
    titulo(state){
      return state.msg1;
    },
    subtitulo(state){
      return state.msg2;
    },
    stokProductos(state){
      return state.datosProductos.filter(juegos => juegos.stok > 0)
    },
    totalProductos(state){
      return state.datosProductos.length;
    },
    listaProductos(state){
      return state.datosProductos
    },
  },
  mutations: {
  },
  actions: {
  }
})
