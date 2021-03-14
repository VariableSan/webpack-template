/*==================== ASSETS START====================*/
// JS
import './js/script'

// Sass
import './assets/sass/main.sass'
/*==================== ASSETS END====================*/

/*==================== VUE DEPENDENCY START====================*/
import Vue from 'vue'
import router from './plugins/router/router'
import vuetify from './plugins/vuetify'
import store from './plugins/store'
/*==================== VUE DEPENDENCY END====================*/

/*==================== DEPENDENCY LIBRARIES START====================*/
import 'regenerator-runtime'
/*==================== DEPENDENCY LIBRARIES END====================*/

// import components
import App from './layouts/App.vue'

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
