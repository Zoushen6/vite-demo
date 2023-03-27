import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import "@/assets/css/index.less";
import router from "./router";
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
const app = createApp(App);
import { Button } from "ant-design-vue";

import "./router/guard/permissionGuard";
import { createPinia } from "pinia";
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Button);
app.use(VXETable);

app.mount("#app");
