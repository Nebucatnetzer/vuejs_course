<template>
  <button @click="login" v-if="!userIsAuthenticated">Login</button>
  <button @click="logout" v-if="userIsAuthenticated">Logout</button>
</template>
<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['userIsAuthenticated'])
  }
};
</script>
