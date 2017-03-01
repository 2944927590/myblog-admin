import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import login from './login.vue';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#login',
  components: {
    login: login
  },
});
