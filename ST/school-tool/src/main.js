import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";

Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
