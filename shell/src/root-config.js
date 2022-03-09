import { registerApplication, start } from "single-spa";

registerApplication({
  name: 'navbar',
  app: () => import('navbar/App'),
  activeWhen: '/',
})

registerApplication({
  name: 'sidebar',
  app: () => import('sidebar/App'),
  activeWhen: '/',
})

registerApplication({
  name: 'vue3app',
  app: () => import('vue3app/App'),
  activeWhen: '/vue3',
});

registerApplication({
  name: 'vue2app',
  app: () => import('vue2app/App'),
  activeWhen: '/vue2',
})

start();
