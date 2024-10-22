<template>
  <div class="card">
    <img :src="recipe.image" class="card-img-top" alt="Recipe Image" />
    <div class="card-body">
      <h5 class="card-title">{{ recipe.name }}</h5>
      <p class="card-text">Author: {{ recipe.author }}</p>
      <button @click.stop="addRecipe" class="btn btn-primary">Save Recipe</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRecipeStore } from '@/store';

interface Recipe {
  image: string;
  name: string;
  author: string;
}

export default defineComponent({
  props: {
    recipe: {
      type: Object as PropType<Recipe>,
      required: true,
    },
  },
  setup(props) {
    const store = useRecipeStore();
    const addRecipe = () => {
      store.addRecipeToLocal(props.recipe);
    };

    return { addRecipe };
  },
});
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  margin: 10px;
}
</style>
