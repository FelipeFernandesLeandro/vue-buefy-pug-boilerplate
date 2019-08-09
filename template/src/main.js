import Vue from 'vue'
import Buefy from 'buefy'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

Vue.use(VeeValidate)
Vue.use(Buefy)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
