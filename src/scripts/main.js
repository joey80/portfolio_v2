require('typeface-raleway');
require('typeface-coustard');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app/App.vue';
import { routes } from './routes';

export const state = {};
export const eventBus = new Vue();

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});