import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import "@/assets/main.css";

const app = createApp(App);
app.use(router);

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.mount("#app");
