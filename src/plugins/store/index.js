import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*==================== IMPORT MODULES START====================*/
import test from './test'
/*==================== IMPORT MODULES END====================*/

export default new Vuex.Store({
  modules: {
    test
  }
})
