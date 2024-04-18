// main.js
import { createApp } from "vue";
import "@/style.css";
import App from "./App.vue";
import router from "@/router/router.js";
import store from "@/store/store.js";
import i18nCustom from "@/language/i18nCustom/index.js";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18nCustom);

app.mount("#app");
