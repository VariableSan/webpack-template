import store from './stores/store'

const guard = function (to, from, next) {
  if (store.getters.user) {
    next()
  } else {
    next('/login?loginError=true')
  }
}

const noguard = function (to, from, next) {
  next()
}

export default noguard
