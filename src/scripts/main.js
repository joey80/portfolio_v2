require('typeface-raleway');
import Vue from 'vue';
import App from './components/app/App.vue';

export const state = {};
export const eventBus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App)
});