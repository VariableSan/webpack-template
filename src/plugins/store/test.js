const state = () => ({
  test1: 'this is test1',
  test2: 'this is test2'
})

const getters = {
  test1: state => state.test1,

  test2: state => state.test2
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
