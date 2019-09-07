import Vue from 'vue';
import Router from 'vue-router';
import ESP32Example from './examples/ESP32';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ESP32Example,
    },
  ],
});
