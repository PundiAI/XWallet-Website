import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/reset.scss'
import Scrollreveal from 'scrollreveal'
import i18n from './plugins/i18n'
import commonFun from './plugins/commonFun'

Vue.config.productionTip = false

commonFun()

window.sr = new Scrollreveal()

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
