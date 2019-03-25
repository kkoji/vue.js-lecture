import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDc4c7mlhZT0IWH-tteNj5WGDIXcxG1cFY",
  authDomain: "my-address-pj-78a96.firebaseapp.com",
  databaseURL: "https://my-address-pj-78a96.firebaseio.com",
  projectId: "my-address-pj-78a96",
  storageBucket: "my-address-pj-78a96.appspot.com",
  messagingSenderId: "406233405488"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
