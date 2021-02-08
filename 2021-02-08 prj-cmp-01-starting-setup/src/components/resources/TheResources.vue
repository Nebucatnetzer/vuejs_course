<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesActive"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResourceActive"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab" @new-resource="storeNewResource"></component>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';
export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Oficial Guide',
          description: 'The official documentation for Vue.js.',
          link: 'https://vuejs.org'
        },
        {
          id: 'duckduckgo',
          title: 'Duckduckgo',
          description: 'A search engine that values privacy.',
          link: 'https://duckduckgo.com'
        }
      ]
    };
  },
  computed: {
    storedResourcesActive() {
      if (this.selectedTab === 'stored-resources') {
        return null;
      } else {
        return 'flat';
      }
    },
    addResourceActive() {
      if (this.selectedTab === 'add-resource') {
        return null;
      } else {
        return 'flat';
      }
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    storeNewResource(resource) {
      this.storedResources.push(resource);
      this.selectedTab = 'stored-resources';
    }
  },
  provide() {
    return {
      storedResources: this.storedResources
    };
  }
};
</script>

<style></style>
