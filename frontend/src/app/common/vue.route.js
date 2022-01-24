import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Memo from './views/Memo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/memo',
      name: 'memo',
      component: Memo,
    },
  ],
});
