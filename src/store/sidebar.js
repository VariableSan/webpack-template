/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
export default {
	state: {
		drawer: false
	},
	getters: {
		getDrawer (state) {
			return state.drawer
		}
	},
	mutations: {
		setDrawer (state) {
			state.drawer = !state.drawer
		}
	},
	actions: {
		async someAction ({commit}, {email, pass}) {
			// commit('clearError')
			try {
				
			}
			catch (err) {
				
			}
			finally {
				
			}
		}
	}
}