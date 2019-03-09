import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/about',
    name: 'About',
    component: AboutPage,
  }, {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  },
],
});
