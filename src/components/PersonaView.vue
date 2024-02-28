<template>
  <div>
    <span>{{persona.id}} {{persona.nom}}</span><button @click="eliminaPersona(persona)">Elimina</button><button @click="editaPersona(persona)">Edita persona</button>
  </div>
</template>

<script>
  export default {
    name: 'PersonaViewer',
    props:['persona'],
    methods:{
      eliminaPersona:function(persona){
        this.$emit('persona-a-eliminar',persona);
      },
      editaPersona:function(persona){
        this.$emit('persona-a-editar',persona);
      }
    } 
  }
</script>

<style scoped>

</style>
