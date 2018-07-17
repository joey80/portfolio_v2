require('typeface-raleway');
require('typeface-coustard');

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app/App.vue';
import { routes } from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export const state = {};
export const eventBus = new Vue();

library.add(faLongArrowAltRight);

Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});