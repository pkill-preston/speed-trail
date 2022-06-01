import { createRouter, createWebHistory } from 'vue-router';

const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import('../views/LandingPage/LandingPage.vue'),
    },
  ],
});

export default Router;
