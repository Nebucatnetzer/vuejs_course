import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

const app = createApp(App);
app.use(router);
app.mount('#app');

if (module.hot) {
  0;
  module.hot.accept(); // already had this init code

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
