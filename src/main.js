import "./assets/css/bootstrap.min.css";
import "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import store from "./store/index.js";

createApp(App).use(router).use(ToastPlugin).use(store).mount("#app");
