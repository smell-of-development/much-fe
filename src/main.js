import "./assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "@/assets/main.css";

import pinia from "@/store";
import apiClient from "@/service/config";
import ApiService from "@/service/ApiService";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.use({
  async install(app) {
    app.config.globalProperties.$axios = apiClient;
    ApiService.shared.install(app);
  },
});

app.mount("#app");
