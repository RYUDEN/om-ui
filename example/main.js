// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Omui from '../src/index'
import '../packages/stylus/common.styl'
import router from './router'

Vue.config.productionTip = false
Vue.use(Omui)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
