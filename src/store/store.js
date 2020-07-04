import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


/*==================== IMPORT MODULES START====================*/
// import sidebar from './sidebar'
import testStore from './testStore'
/*==================== IMPORT MODULES END====================*/


export default new Vuex.Store({
	modules: {
		testStore
	}
})