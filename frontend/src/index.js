// -------------------------------
//
//  Import SCSS files
//
// -------------------------------
import 'the-new-css-reset/css/reset.css';
import './app/common/scss/style.scss';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import components from './app/common/components/vue.components.js';
import store from './app/common/components/vue.store.js';

// https://vue-scrollto.netlify.app/
import VueScrollTo from 'vue-scrollto';
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: [0.79, 0.21, 0.57, 1],
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

// https://www.npmjs.com/package/dayjs
import dayjs from 'dayjs';
dayjs.locale('ja');
Vue.prototype.$dayjs = dayjs;

// https://www.npmjs.com/package/vue-mq
import VueMq from 'vue-mq';
Vue.use(VueMq, {
  breakpoints: {
    s: 641,
    t: 899,
    d: Infinity,
  },
  defaultBreakpoint: 'd',
});

// https://www.npmjs.com/package/vue-fragment
import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);

// https://vuetifyjs.com/en/features/treeshaking/#manually-importing
import Vuetify from 'vuetify/lib';
import {Ripple} from 'vuetify/lib/directives';
Vue.use(Vuetify, {
  directives: {
    Ripple,
  },
});

// https://www.npmjs.com/package/vue-axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);


// https://jp.vuejs.org/v2/api/index.html#productionTip
Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  store,
  components,
  vuetify: new Vuetify({
    theme: {
      disable: true,
    },
  }),
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {});
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {},
}).$mount('#app');
