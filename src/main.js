import Vue from 'vue'
import App from './App.vue'
import router from './router/index';

import ContactForm from './components/ContactForm.vue';
import FooterSection from './components/FooterSection.vue';

Vue.config.productionTip = false

Vue.component('FooterSection', FooterSection);
Vue.component('ContactForm', ContactForm);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
