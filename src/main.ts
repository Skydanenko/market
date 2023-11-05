import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/config/firebase'

Vue.config.productionTip = false

initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
