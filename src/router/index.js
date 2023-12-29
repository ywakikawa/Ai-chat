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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
