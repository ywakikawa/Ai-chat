// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Miibo from '../components/Miibo.vue';

const routes = [
    {
        path: '/miibo',
        name: 'Miibo',
        component: Miibo,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
