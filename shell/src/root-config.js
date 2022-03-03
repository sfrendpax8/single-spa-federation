import { registerApplication, start } from "single-spa";

registerApplication(
  'vue3app',
  () => import('vue3app/App'),
  (location) => location.pathname.startsWith('/'),
)

start();
