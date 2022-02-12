import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/spreadSheet',
        name: 'SpreadSheet',
        component: () => import('../components/SpreadSheet.vue'),
      },
      {
        path: '/dataTable',
        name: 'SpreadSheet',
        component: () => import('../components/DataTable.vue'),
      },
      {
        path: '/card',
        name: 'SpreadSheet',
        component: () => import('../components/Card.vue'),
      },
      {
        path: '/smartForm',
        name: 'SpreadSheet',
        component: () => import('../components/SmartForm.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
