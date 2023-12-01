import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { IonicVue } from '@ionic/vue';

// Icons Plugin
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faUser, faStar } from '@fortawesome/free-regular-svg-icons'
import { faPlusCircle, faQuestionCircle, faPerson, faKey, faHome, faArrowRotateBack } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faKey, faPlusCircle, faPerson, faUser, faQuestionCircle, faHome, faStar, faArrowRotateBack)

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});