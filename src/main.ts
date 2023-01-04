import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// @ts-ignore
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";
import dayjs from 'dayjs';
const app  = createApp(App);

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $dayjs: any;
      $name:string;
    }
  }

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$name = '글로벌 변수';
app.use(router).use(store).use(vuetify).mount("#app");
