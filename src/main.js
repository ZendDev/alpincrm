import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import "./assets/scss/main.scss"

Vue.use(VModal, { componentName: 'Modal',dynamicDefault: { draggable: true, resizable: true } })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
