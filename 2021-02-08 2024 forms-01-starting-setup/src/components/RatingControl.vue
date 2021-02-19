<template>
  <ul>
    <li :class="poorIsActive">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="averageIsActive">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="greatIsActive">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],

  computed: {
    poorIsActive() {
      if (this.modelValue === 'poor') {
        return 'active';
      } else {
        return '';
      }
    },
    averageIsActive() {
      if (this.modelValue === 'average') {
        return 'active';
      } else {
        return '';
      }
    },
    greatIsActive() {
      if (this.modelValue === 'great') {
        return 'active';
      } else {
        return '';
      }
    }
  },

  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: purple;
}
.active button {
  color: purple;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
