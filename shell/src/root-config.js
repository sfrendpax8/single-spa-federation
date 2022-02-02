import { registerApplication, start } from "single-spa";

registerApplication({
  name: "vue2-main",
  app: () => {
    return System.import("vue2-main");
  },
  activeWhen: "/vue2-main",
});

registerApplication({
  name: "vue3app",
  app: () => {
    return System.import("vue3app");
  },
  activeWhen: "/vue3app",
});

registerApplication({
  name: "navbar",
  app: async () => {
    return System.import("navbar");
  },
  activeWhen: "/",
});

start();
