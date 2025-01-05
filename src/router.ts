import { createRouter, createWebHistory } from 'vue-router';
import ProfileDashboard from './modules/profile/ProfileDashboard.vue';
import Login from "./modules/Login.vue";
import Home from "./modules/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'ProfileDashboard',
    component: ProfileDashboard,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
