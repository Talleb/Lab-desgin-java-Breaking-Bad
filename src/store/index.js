import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personID:[],
    qName: [],
    drawer: false
  },
  mutations: {  
    setdrawer(state, drawer){
     state.drawer = !drawer
  }
  },
  actions: {
  },
  modules: {
  }
})
