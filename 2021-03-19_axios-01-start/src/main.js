import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import axios from "axios"
axios.defaults.baseURL = "https://axios-test-44b62-default-rtdb.europe-west1.firebasedatabase.app"
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

if (module.hot) {
  module.hot.accept(); // already had this init code

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}
