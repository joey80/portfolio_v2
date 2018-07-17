require('typeface-raleway');
require('typeface-coustard');

import Vue from 'vue';
//import VueRouter from 'vue-router';
import App from './components/app/App.vue';

export const state = {};
export const eventBus = new Vue();

// Vue.use(VueRouter);

// const routes = [
//     { path: '/', component: Content },
//     { path: '/home', redirect: '/'},
//     { path: '/projects', component: Projects },
//     { path: '/about', component: About}
// ];

// const router = new VueRouter({
//     routes
// });

new Vue({
    el: '#app',
    render: h => h(App)
});