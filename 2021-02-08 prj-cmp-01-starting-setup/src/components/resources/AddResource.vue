<template>
  <base-card>
    <form @submit.prevent="returnNewResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          v-model="description"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="text" name="link" id="link" v-model="link" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input may not be empty</h2>
      <button @click="resetErrorDialog">Ok</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from '../ErrorAlert';
export default {
  components: {
    ErrorAlert
  },
  inject: ['storeNewResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      inputIsInvalid: false
    };
  },
  methods: {
    validateInput(resource) {
      if (!resource.title || !resource.description || !resource.link) {
        this.inputIsInvalid = true;
        return false;
      } else {
        return true;
      }
    },
    resetErrorDialog() {
      this.inputIsInvalid = false;
    },
    returnNewResource() {
      const resource = {
        id: new Date().toISOString(),
        title: this.title,
        description: this.description,
        link: this.link
      };
      if (this.validateInput(resource)) {
        this.storeNewResource(resource);
      }
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
