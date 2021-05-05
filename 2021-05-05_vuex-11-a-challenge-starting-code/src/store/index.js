import { createStore } from 'vuex';

import cartModule from './modules/cart/index.js';
import productsModule from './modules/products/index.js';

const store = createStore({
  modules: {
    cart: cartModule,
    products: productsModule
  },
  state() {
    return {};
  }
});

export default store;
