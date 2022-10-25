import Vue from 'vue'
import App from './App.vue'
import mainContent from './components/mainContent';

Vue.component('main-content', mainContent)

new Vue({
  el: '#app',
  render: h => h(App)
})
