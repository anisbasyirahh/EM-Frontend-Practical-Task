<template>
    <div>
      <h2>Recipe Collection</h2>
      <SearchBar @filterRecipes="filterRecipes" />
      <RecipeList :recipes="displayedRecipes" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import axios from 'axios';
  import RecipeList from '@/components/RecipeList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  import { useRecipeStore } from '@/store';
  
  export default defineComponent({
    components: { RecipeList, SearchBar },
    setup() {
      const store = useRecipeStore();
      const displayedRecipes = ref(store.publicRecipes);
  
      onMounted(async () => {
        const { data } = await axios.get('https://raw.githubusercontent.com/micahcochran/json-cookbook/refs/heads/main/cookbook-100.json');
        store.setPublicRecipes(data);
        displayedRecipes.value = store.publicRecipes;
      });
  
      const filterRecipes = (searchText: string) => {
        displayedRecipes.value = store.publicRecipes.filter(recipe => recipe.name.includes(searchText));
      };
  
      return { displayedRecipes, filterRecipes };
    },
  });
  </script>
  