<template>
  <section class="container">
    <user-data
      :first-name="user.firstName"
      :last-name="user.lastName"
      :age="user.age"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="user.firstName" />
      <input type="text" placeholder="Last Name" v-model="user.lastName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
    </div>
    <button @click="setLastName">Change Lastname</button>
  </section>
</template>

<script>
import { reactive, computed, watch, ref } from 'vue';
import UserData from './components/UserData';

export default {
  components: {
    UserData
  },
  setup() {
    const user = reactive({
      firstName: '',
      lastName: '',
      age: 23
    });

    const userAge = ref(23);
    const userName = ref('Muster');
    const lastNameInput = ref(null);

    watch([userAge, userName], function(newValue, oldValue) {
      console.log('old age: ', oldValue[0]);
      console.log('new age: ', newValue[0]);
      console.log('old name: ', oldValue[1]);
      console.log('new name: ', newValue[1]);
    });

    user.name = computed(function() {
      return user.firstName + ' ' + user.lastName;
    });

    function setAge() {
      user.age = '25';
    }

    function setLastName() {
      user.lastName = lastNameInput.value.value;
    }

    return {
      user,
      setAge,
      setLastName,
      lastNameInput
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
