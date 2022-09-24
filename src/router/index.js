// import Vue from 'vue'
// import Router from 'vue-router'

import { createWebHistory, createRouter } from "vue-router";

import Home from '@/views/Home.vue'
import Doces from '@/views/MyDoces.vue'

// Vue.use(Router)

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

// const router = new Router({ routes })

// export default router

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
