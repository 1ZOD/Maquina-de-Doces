import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue'
import Doces from '@/views/MyDoces.vue'


const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'doces',
        path: '/doces',
        component: Doces,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
