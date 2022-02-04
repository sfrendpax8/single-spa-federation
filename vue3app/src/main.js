import { h, createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import singleSpaVue from 'single-spa-vue';
import library from 'library';

import App from './App.vue';

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]
})


const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance: (app) => {
    app.use(router);
    app.use(library);
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
