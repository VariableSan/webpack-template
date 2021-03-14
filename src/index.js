/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*==================== ASSETS START====================*/
// JS
import './js/'

// Sass
import './assets/sass/main.sass'
/*==================== ASSETS END====================*/

/*==================== VUE DEPENDENCY START====================*/
window.Vue = require('vue')
import router from './router/router'
import vuetify from './vuetify/vuetify'
import store from './store/store'
/*==================== VUE DEPENDENCY END====================*/

/*==================== DEPENDENCY LIBRARIES START====================*/
const regeneratorRuntime = require('regenerator-runtime')
/*==================== DEPENDENCY LIBRARIES END====================*/

// import components
import App from './components/App.vue'

// Vue components (for use in html)
// Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app',
  render: h => h(App),
  vuetify,
  router,
  store
})
