<template>
  <div id="vue3app">
    <p class="text-gray-500">Vue 3 App</p>

    <input type="text" v-model="searchInput"/>
    <p>Vue3App: {{ searchInput }}</p>
    <steve-select />
    <something />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Select as something } from 'library';

const searchInput = ref('');
</script>

<style lang="scss">
#vue3app {
  ul {
    padding: 3rem;
  }
}
</style>
