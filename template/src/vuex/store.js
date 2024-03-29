import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Modules
 */
import exempleModule from './modules/exempleModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exempleModule
  }
})
