export default {
  quantity(state) {
    var itemsInCart = 0;
    state.items.forEach(item => {
      itemsInCart = itemsInCart + item.qty;
    });
    return itemsInCart;
  },
  items(state) {
    return state.items;
  },
  total(state) {
    var total = 0;
    state.items.forEach(item => {
      var itemTotal = 0;
      itemTotal = item.price * item.qty;
      total = total + itemTotal;
    });
    return total.toFixed(2);
  }
};
