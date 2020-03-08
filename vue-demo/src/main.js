import Vue from 'vue'
import App from './5.App.vue'
import router from './5.Vue-Router/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
