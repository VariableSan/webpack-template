/*==================== ASSETS START====================*/
// JS
import './js/script'

// Sass
import './assets/sass/main.sass'

// CSS
import './assets/css/main.css'
/*==================== ASSETS END====================*/

/*==================== VUE DEPENDENCY START====================*/
import Vue from 'vue'
import router from './plugins/router/router'
import vuetify from './plugins/vuetify'
import store from './plugins/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
/*==================== VUE DEPENDENCY END====================*/

/*==================== DEPENDENCY LIBRARIES START====================*/
import 'regenerator-runtime'
/*==================== DEPENDENCY LIBRARIES END====================*/

/*==================== INITIAL APP TEMPLATE START====================*/
import App from './init/App.vue'
/*==================== INITIAL APP TEMPLATE END====================*/

/*==================== COMPONENTS START====================*/
// Vue.component('example-component', import('./components/Example.vue))
/*==================== COMPONENTS END====================*/

/*==================== PLUGINS START====================*/
Vue.use(VueAxios, axios)
/*==================== PLUGINS END====================*/

// Vue init
const app = new Vue({
  el: '#app',
  render: h => h(App),
  vuetify,
  router,
  store
})
