import { registerApplication, start } from "single-spa";

registerApplication({
  name: 'vue3app',
  app: () => import('vue3app/App'),
  activeWhen: '/vue3',
});

registerApplication({
  name: 'vue2app',
  app: () => import('vue2app/App'),
  activeWhen: '/',
})

start();
