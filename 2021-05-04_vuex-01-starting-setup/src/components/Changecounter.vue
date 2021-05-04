<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({ value: 13 })">Add 13</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['increment', 'increase'])
  }
};
</script>
