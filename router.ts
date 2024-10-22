import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import RecipeDetail from './views/RecipeDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/recipe/:id', component: RecipeDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
