import { createApp, h } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//   ]
// })

// const app = createApp(App)

// app.use(router)
// app.mount('#app');

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  // handleInstance: (app) => {
  //   app.use(router);
  // }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
