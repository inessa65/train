import Vue from "vue";
import App from "./App.vue";
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(Vuelidate)
Vue.use(axios)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
