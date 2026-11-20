import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('/src/Login.vue'),
    },
    {
        path: '/student-login',
        name: 'StudentLogin',
        component: () => import('/src/Input.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router