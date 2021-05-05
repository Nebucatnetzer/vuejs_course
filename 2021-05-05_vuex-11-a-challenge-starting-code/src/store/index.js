import { createStore } from 'vuex';

import authModule from './modules/auth/index.js';
import cartModule from './modules/cart/index.js';
import productsModule from './modules/products/index.js';

const store = createStore({
  modules: {
    auth: authModule,
    cart: cartModule,
    products: productsModule
  },
  state() {
    return {};
  }
});

export default store;
