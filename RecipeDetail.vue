<template>
    <div v-if="recipe">
      <h2>{{ recipe.name }}</h2>
      <img :src="recipe.image" alt="Recipe Image" />
      <p><strong>Author:</strong> {{ recipe.author }}</p>
      <h4>Ingredients</h4>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>
      <h4>Instructions</h4>
      <p>{{ recipe.instructions }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRecipeStore } from '@/store';
  
  export default defineComponent({
    setup() {
      const route = useRoute();
      const recipe = ref(null);
      const store = useRecipeStore();
  
      onMounted(() => {
        recipe.value = store.publicRecipes.find(r => r.id === route.params.id);
      });
  
      return { recipe };
    },
  });
  </script>
  