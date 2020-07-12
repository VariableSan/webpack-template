import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from '../components/pages/Home.vue'

Vue.use(VueRouter)


let routOpt = {
	// mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '*',
			redirect: '/'
		}
	]
}

export default new VueRouter(routOpt)