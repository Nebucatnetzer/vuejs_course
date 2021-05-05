export default {
  addProductToCart(context, payload) {
    const productId = payload.id;
    const products = context.rootGetters['products/products'];
    const product = products.find(product => product.id === productId);
    context.commit('addProductToCart', product);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  }
};
