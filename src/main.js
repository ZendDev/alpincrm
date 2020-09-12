import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/main.scss"

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
