<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastlName" />
    </div>
  </section>
</template>

<script>
import { reactive, ref, computed } from 'vue';

export default {
  setup() {
    const user = reactive({
      age: 23
    });
    const firstName = ref('');
    const lastName = ref('');

    user.name = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    function setAge() {
      user.age = '25';
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    function setLastlName(event) {
      lastName.value = event.target.value;
    }
    return {
      user,
      setAge,
      setFirstName,
      setLastlName
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
