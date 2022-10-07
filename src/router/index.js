import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/Home.vue'
import Doces from '@/views/MyDoces.vue'
import Elevador from '@/views/MyElevador.vue'
import AnalisadorLexo from '@/views/AnalisadorLexo.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/doces',
        name: 'doces',
        component: Doces,
    },
    {
        path: '/elevador',
        name: 'elevador',
        component: Elevador,
    },
    {
        path: '/analisador',
        name: 'AnalisadorLexo',
        component: AnalisadorLexo,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
