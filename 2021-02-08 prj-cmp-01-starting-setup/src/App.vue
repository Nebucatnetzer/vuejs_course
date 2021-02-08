<template>
  <the-header title="One big application"></the-header>
  <stored-resources :stored-resources="storedResources"></stored-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader';
import storedResources from './components/resources/StoredResources';
export default {
  components: {
    storedResources,
    TheHeader
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
