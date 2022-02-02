<template>
  <div id="vue2-main">
    <div class="routes">
      <router-link to="/">Home</router-link>
      <router-link to="/vue2-main/a">A</router-link>
      <router-link to="/vue2-main/b">B</router-link>
    </div>

    <p>Router view:</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
