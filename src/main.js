import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGesture from 'vue-gesture';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
