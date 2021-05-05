export default {
  addProductToCart(state, productData) {
    const productInCartIndex = state.items.findIndex(
      ci => ci.productId === productData.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
        qty: 1
      };
      state.items.push(newItem);
    }
  },

  removeProductFromCart(state, prodId) {
    const productInCartIndex = state.items.findIndex(
      cartItem => cartItem.productId === prodId
    );
    state.items.splice(productInCartIndex, 1);
  }
};
