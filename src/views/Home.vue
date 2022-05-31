<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PersonaView v-for="persona in $store.getters.getPersones" :key="persona.id" v-bind:persona="persona" v-on:persona-a-eliminar="eliminaPersona" v-on:persona-a-editar="editaPersona"></PersonaView>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonaView from '@/components/PersonaView.vue'

export default {
  name: 'Home',
  methods: {
    eliminaPersona(persona){
      this.$store.commit("eliminaPersona", persona);
    },
    editaPersona(persona){
      console.log("edit");   
      //console.log(persona.id)   
      console.log(this.$store.getters.getPersona(persona.id))
      let p = this.$store.getters.getPersona(persona.id)

      this.$router.push({ name: "Persona", params: { id: p[0].id } });
    }
  },
  components: {
    PersonaView
  }
}
</script>
