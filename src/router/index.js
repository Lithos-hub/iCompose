import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: true,
    children: [
      {
        path: '/spreadSheet',
        name: 'SpreadSheet',
        component: () => import('../components/SpreadSheet.vue'),
      },
      {
        path: '/dataTable',
        name: 'Data Table',
        component: () => import('../components/DataTable.vue'),
      },
      {
        path: '/card',
        name: 'Card',
        component: () => import('../components/Card.vue'),
      },
      {
        path: '/smartForm',
        name: 'SmartForm',
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
