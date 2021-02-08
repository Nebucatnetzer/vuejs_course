<template>
  <ul>
    <learning-resource
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/resources/LearningResource';

export default {
  components: {
    LearningResource
  },
  data() {
    return {
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
  }
};
</script>

<style></style>
