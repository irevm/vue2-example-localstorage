<template>
  <div class="persona">
    <h1>Persona</h1>
    <p v-if="$route.params.id">{{ $route.params.id }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Persona',
    
  }
</script>
