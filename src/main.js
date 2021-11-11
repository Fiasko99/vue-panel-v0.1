import Vue from 'vue'
import App from './App.vue'
import VueMoment from "vue-moment";
import httpClient from "./httpClient";

Vue.prototype.$http = httpClient.http

Vue.use(VueMoment)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
