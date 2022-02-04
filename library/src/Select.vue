<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
    </select>
    <pre>{{ selected }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = ['Autotask', 'Connectwise', 'Kaseya', 'Repairshopr', 'Syncro', 'Tigerpaw']
const selected = ref('Autotask')

</script>