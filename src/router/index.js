// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Miibo from '../components/Miibo.vue';
import Prompt from "../components/Prompt.vue";

const routes = [
    {
        path: '/miibo',
        name: 'Miibo',
        component: Miibo,
    },
    {
        path: '/prompt',
        name: 'Prompt',
        component: Prompt,
    },
    {
        path: '/numberOne',
        name: 'numberOne',
        component: () => import('../components/numberOne.vue'),
    },
    {
        path: '/numberTwo',
        name: 'numberTwo',
        component: () => import('../components/numberTwo.vue'),
    },
    {
        path: '/numberThree',
        name: 'numberThree',
        component: () => import('../components/numberThree.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
