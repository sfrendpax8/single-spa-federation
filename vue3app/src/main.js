import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue';
import something from 'library';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance: (app) => {
    app.use(something);
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
