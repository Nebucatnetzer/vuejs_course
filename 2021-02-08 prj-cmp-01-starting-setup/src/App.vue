<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      {{ resource.title }}
      <ul>
        <li>
          {{ resource.description }}
        </li>
        <li>
          <a :href="resource.link">{{ resource.link }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
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
