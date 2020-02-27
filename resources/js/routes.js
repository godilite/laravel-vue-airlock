import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/js/pages/Home';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes: [{
            path: '/',
            name: 'home',
            component: Home,

    }]
});

export default router;
