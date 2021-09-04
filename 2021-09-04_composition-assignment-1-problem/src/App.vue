<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="Goal.visibility">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const courseGoal = 'Something is written here';
    //const showGoal = ref(false);
    const Goal = ref({
      visibility: false
    });

    // ref way
    //function toggleGoal() {
    //  showGoal.value = !showGoal.value;
    //  console.log(showGoal.value);
    //}

    // ref object way
    function toggleGoal() {
      Goal.value.visibility = !Goal.value.visibility;
    }

    return {
      courseGoal,
      Goal,
      toggleGoal
    };
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
