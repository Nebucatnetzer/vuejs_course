<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <change-counter></change-counter>
    <button @click="increaseCounter">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/Changecounter';
import FavoriteValue from './components/FavoriteValue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue
  },

  methods: {
    increaseCounter() {
      this.$store.commit('increase', { value: 10 });
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
