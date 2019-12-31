import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    checkFormDate:{}
  },
  mutations: {
    formDate:function(state,payload){
      state.checkFormDate = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
