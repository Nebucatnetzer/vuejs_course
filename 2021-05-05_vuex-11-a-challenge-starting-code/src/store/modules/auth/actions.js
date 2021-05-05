export default {
  logout(context) {
    context.commit('logout');
  },
  login(context) {
    context.commit('login');
  }
};
