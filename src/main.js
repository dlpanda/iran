import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGesture from 'vue-gesture';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
