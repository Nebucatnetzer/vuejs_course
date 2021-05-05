export default {
  quantity(state) {
    return state.qty;
  },
  items(state) {
    return state.items;
  },
  total(state) {
    var total = 0;
    state.items.forEach(item => {
      total = total + item.price;
    });
    return total.toFixed(2);
  }
};
