import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import Homepage from './Homepage.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook)
library.add(faTwitter)
library.add(faLinkedin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Homepage)
}).$mount('#app')
