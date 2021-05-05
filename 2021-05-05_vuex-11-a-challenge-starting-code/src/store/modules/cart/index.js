import cartActions from './actions.js';
import cartGetters from './getters.js';
import cartMutations from './mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      items: []
    };
  },
  actions: cartActions,
  getters: cartGetters,
  mutations: cartMutations
};
