import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from '../components/pages/Home.vue'
import Test from '../components/pages/Test.vue'

Vue.use(VueRouter)


let routOpt = {
	// mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/test',
			component: Test
		},
		{
			path: '*',
			redirect: '/'
		}
	]
}

export default new VueRouter(routOpt)