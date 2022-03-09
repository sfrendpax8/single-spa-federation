<template>
  <div id="vue2app">
    <div id="nav">
      <p>Internal Navigation</p>
      <p>Click <a @click="navigateToUrl('/')">HERE</a> to navigate to the root view</p>
      <hr/>
      <nav class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
    <router-view class="view"/>
  </div>
</template>

<script>
// single-spa is shared from the shell
import { navigateToUrl } from 'single-spa';

export default {
  name: 'Vue2App',
  data: () => ({
    navigateToUrl,
  }),
};

</script>

<style>
#vue2app {
  background: lightblue;
  height: 100%;
  overflow: hidden;
  padding: var(--contentPadding);
}

#vue2app nav {
  margin-bottom: 1rem;
}

#vue2app nav a {
  margin-right: 1rem;
}

#vue2app .view {
  padding: 2rem;
  background: lightpink;
}
</style>
