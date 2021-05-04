<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <change-counter></change-counter>
    <button @click="increaseCounter">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/Changecounter';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter
  },

  methods: {
    increaseCounter() {
      this.$store.commit('increment');
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
