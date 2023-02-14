import { createApp } from "vue";
import router from "./router/index";
import Particles from "particles.vue3";
import App from "./App.vue";

createApp(App).use(router).use(Particles).mount("#app");
