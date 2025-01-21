import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Listings from '../components/Listings.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/listings', name: 'Listings', component: Listings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
