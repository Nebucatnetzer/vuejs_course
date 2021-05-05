<template>
  <h3>{{ finalCounter }}</h3>
  <p>More...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('counter', ['finalCounter'])
  }
};
</script>
