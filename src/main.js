import { createApp } from 'vue';
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(mdiVue, {
  icons: mdijs,
})
  .mount('#app');
