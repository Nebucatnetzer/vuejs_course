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
  <base-dialog
    v-if="inputIsInvalid"
    title="Input may not be empty"
    @close="resetErrorDialog"
  >
    <template #default>
      <p>Unfortunately some inputs seem to be empty.</p>
      <p>Please correct this and try again.</p>
    </template>
    <template #actions>
      <base-button @click="resetErrorDialog">Ok</base-button>
    </template>
  </base-dialog>
</template>

<script>
export default {
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
      if (
        resource.title === '' ||
        resource.description === '' ||
        resource.link === ''
      ) {
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
        title: this.title.trim(),
        description: this.description.trim(),
        link: this.link.trim()
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
