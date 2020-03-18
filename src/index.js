// JS
import './js/'

// Sass
import './assets/sass/main.sass'

// Import libraries
window.Vue = require('vue')
import router from './routes'
import vuetify from './vuetify'

// import components
import App from './components/App.vue'

// Vue components (for use in html)
// Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
	el: '#app',
	render: h => h(App),
	vuetify,
	router
})