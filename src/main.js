import { createApp } from "vue";

import store from "./store/index.js";
import "./assets/index.css";

import Home from "./pages/Home.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const app = createApp(Home);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.mount("#app");
