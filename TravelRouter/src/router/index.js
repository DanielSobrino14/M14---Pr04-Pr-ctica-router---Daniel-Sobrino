import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DestinationShow from '@/views/DestinationShow.vue';
import ExperienceShow from '@/views/ExperienceShow.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/destination/:id/:slug', // Ruta dinámica para destinos
    name: 'destination.show',
    component: DestinationShow,
    props: true,
  },
  {
    path: '/experience/:id/:slug', // Ruta para experiencias de un destino
    name: 'experience.show',
    component: ExperienceShow,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
