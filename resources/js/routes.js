import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/js/pages/Login'
import Register from '@/js/pages/Register'
import Dashboard from '@/js/pages/Dashboard'
import Home from '@/js/pages/Home';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        },
    ]
});

export default router;
