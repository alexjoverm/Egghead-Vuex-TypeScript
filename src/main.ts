// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import { store } from './store'

Vue.config.productionTip = false

const load = true

if (!load) {
  import('./store/login').then(({ login }) => {
    store.registerModule('login', login)
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
