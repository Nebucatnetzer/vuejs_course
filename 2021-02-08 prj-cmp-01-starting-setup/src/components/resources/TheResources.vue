<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resources')"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
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
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
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
