export default {
	state: {
		name: 'Foo'
	},

	getters: {
		getName(state) {
			return state.name
		}
	},

	mutations: {
		setName(state, payload) {
			state.name = payload
		}
	},

	actions: {
		async setNameFromServer({commit}) {
			const fromServer = await new Promise(resolve => {
				setTimeout(() => {
					resolve('Random name')
				}, 1000)
			})
			commit('setName', fromServer)
		}
	}
}