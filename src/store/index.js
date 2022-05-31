import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persones: [],
    //persones:[{id: 1, nom: "Pepito"}, {id: 2, nom: "Pepita"}, {id: 3, nom: "Juan"}],
    id: 0
  },
  getters: {
    getPersona: function (state) {
      return function (personaId) {
        return state.persones.filter(p => p.id === personaId)
      };
    },
    getPersones: function (state) {
      return state.persones;
    },
  },
  mutations: { 
    init(state) {
      console.log("---init---");
      try {
        state.persones = JSON.parse(localStorage.getItem("persones"));
      } catch (ex) {
        state.persones = [];
      }
      if (state.persones == null) state.persones = [];
      console.log(state.persones);
      try {
        state.id = JSON.parse(localStorage.getItem("id"));
      } catch (ex) {
        state.id = 0;
      }
      if (state.id == null) state.id = 0;
    },
    eliminaPersona:function(state, persona){
      let posicio = state.persones.indexOf(persona);
      state.persones.splice(posicio, 1);
      localStorage.setItem("persones", JSON.stringify(state.persones));
    }
  },
  actions: {
  },
  modules: {
  }
})
