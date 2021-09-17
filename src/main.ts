import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom, library } from '@fortawesome/fontawesome-svg-core';

import App from './App.vue';
import './registerServiceWorker';
import { store, key } from './store';

library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

createApp(App)
  .use(store, key)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
