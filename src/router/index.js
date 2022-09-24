import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue'
import Doces from '@/views/MyDoces.vue'
import Elevador from '@/views/MyElevador.vue'


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
    },
    {
        name: 'elevador',
        path: '/elevador',
        component: Elevador,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
