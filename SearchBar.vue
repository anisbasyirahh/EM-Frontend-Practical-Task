<template>
    <input type="text" class="form-control" placeholder="Search recipes..." @input="onInput" />
  </template>
  
  <script lang="ts">
  import { defineComponent, Emit } from 'vue';
  
  export default defineComponent({
    emits: ['filterRecipes'],
    methods: {
      onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.$emit('filterRecipes', target.value);
      },
    },
  });
  </script>
  