import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

console.log(typeof App),
new Vue({
  render: h => h(App),
}).$mount('#app')
