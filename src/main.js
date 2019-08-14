import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComment, faMapMarkedAlt, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import store from './store/index';
import 'normalize.css';
import 'bootstrap';
import App from './App.vue';

library.add(faComment, faMapMarkedAlt, faToolbox);

Vue.component('font-awesome-icon', FontAwesomeIcon);
//

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
