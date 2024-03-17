import { createApp } from "vue";

import store from "./store/index.js";
import "./assets/index.css";

import Home from "./pages/Home.vue";

const app = createApp(Home);
app.use(store);
app.mount("#app");
