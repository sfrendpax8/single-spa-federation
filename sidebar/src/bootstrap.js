import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render(h) {
      return h(App);
    },
    router: new VueRouter({
      mode: 'history',
      routes: [],
    }),
    el: '#app-content',
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
