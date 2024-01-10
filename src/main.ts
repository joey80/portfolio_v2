import { createApp } from 'vue';
import { createGtm } from '@gtm-support/vue-gtm';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.use(
  createGtm({
    id: process.env.VUE_APP_GTM_ID,
    nonce: '2726c7f26c',
    debug: true,
    loadScript: true,
    vueRouter: router,
  }),
);

app.mount('#app');
