import Vue from 'vue';
import VueNotification from '@mathieustan/vue-notification';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.use(VueNotification);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
