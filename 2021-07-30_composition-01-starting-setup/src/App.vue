<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="user.firstName" />
      <input type="text" placeholder="Last Name" v-model="user.lastName" />
    </div>
  </section>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const user = reactive({
      firstName: '',
      lastName: '',
      age: 23
    });

    user.name = computed(function() {
      return user.firstName + ' ' + user.lastName;
    });

    function setAge() {
      user.age = '25';
    }

    return {
      user,
      setAge
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
