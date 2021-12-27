import Vue from 'vue'
import App from './App.vue'
import { IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
