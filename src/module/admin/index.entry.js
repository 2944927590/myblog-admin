import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import Index from './index.vue';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#index',
  components: {
    login: Index
  },
});
