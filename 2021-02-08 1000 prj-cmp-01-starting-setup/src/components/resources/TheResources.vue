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
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      this.storedResources.unshift(resource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const resourceIndex = this.storedResources.findIndex(
        resource => resource.id === id
      );
      this.storedResources.splice(resourceIndex, 1);
    }
  },
  provide() {
    return {
      storedResources: this.storedResources,
      storeNewResource: this.storeNewResource,
      removeResource: this.removeResource
    };
  }
};
</script>

<style></style>
