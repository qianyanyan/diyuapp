// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'webpack-zepto'
import App from './App'
import router from './router'
import './assets/scss/common.scss'
Vue.config.productionTip = false
$.ajaxSettings.crossDomain = true
let vm = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

Vue.use({
  vm
})
