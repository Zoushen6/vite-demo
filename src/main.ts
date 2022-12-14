import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
const app = createApp(App);
import { Button } from "ant-design-vue";

import "./router/guard/permissionGuard";
import { createPinia } from "pinia";
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Button);

app.mount("#app");
