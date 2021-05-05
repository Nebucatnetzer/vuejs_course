export default {
  finalTotal(state) {
    return state.total.toFixed(2);
  },
  quantity(state) {
    return state.qty;
  }
};
