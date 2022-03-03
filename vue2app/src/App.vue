<template>
  <div id="app">
    <h1>Vue 2 app</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/vue3">Vue3</router-link>
    </div>
    <router-view/>
  </div>
</template>
