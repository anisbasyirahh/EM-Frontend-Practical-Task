<template>
    <div class="recipe-list">
      <div v-for="recipe in recipes" :key="recipe.id" class="recipe-card" @click="viewRecipe(recipe)">
        <RecipeCard :recipe="recipe" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import RecipeCard from './RecipeCard.vue';
  
  export default defineComponent({
    components: { RecipeCard },
    props: {
      recipes: {
        type: Array as PropType<any[]>,
        required: true,
      },
    },
    methods: {
      viewRecipe(recipe: any) {
        this.$router.push(`/recipe/${recipe.id}`);
      },
    },
  });
  </script>
  
  <style scoped>
  .recipe-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
  </style>
  