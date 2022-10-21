import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";

createApp(App).use(router).use(store).use(vuetify).mount("#app");
