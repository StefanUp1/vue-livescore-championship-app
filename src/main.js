import Vue from 'vue'
import App from './App.vue'

import VueMoment from 'vue-moment'

import { router } from './router.js'

Vue.use(VueMoment)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
