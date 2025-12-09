import "./assets/css/styles.sass";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueLazyload from "vue-lazyload";

const app = createApp(App);

app.use(router);

app.use(VueLazyload);

app.mount("#app");

window.addEventListener(
  "wheel",
  (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  },
  { passive: false }
);

window.addEventListener("keydown", (e) => {
  const zoomKeys = ["+", "-", "=", "0", "NumLock", "Subtract", "Add"];

  if ((e.ctrlKey || e.metaKey) && zoomKeys.includes(e.key)) {
    e.preventDefault();
  }
});
