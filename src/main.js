import Vue from "vue";
import Pixel from "@mekari/pixel";
import App from "./App.vue";
import router from "./route";

Vue.config.productionTip = false;
Vue.use(Pixel);

new Vue({
  el: "#app",
  router,
  template: "<App />",
  components: { App }
});
