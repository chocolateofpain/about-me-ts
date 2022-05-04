import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/tailwind.css";

const aboutMe = createApp(App);

aboutMe.use(store).use(router);

aboutMe.mount("#app");
