// import { h, createApp } from 'vue'
// import singleSpaVue from 'single-spa-vue';

// import App from './App.vue';

// const vueLifecycles = singleSpaVue({
//   createApp,
//   appOptions: {
//     render() {
//       return h(App);
//     },
//   },
// });

// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;

import Select from './Select.vue';

export default {
  install(Vue) {
    Vue.component('steve-select', Select);
  },
};

// Export programatic components
export { Select };

