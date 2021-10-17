 import Vue from 'vue'
 import App from './App.vue'
 import './registerServiceWorker'
 import router from './router'
 import store from './store'
 import vuetify from './plugins/vuetify';
 import * as VueGoogleMaps from 'vue2-google-maps';
 import 'material-design-icons-iconfont/dist/material-design-icons.css'
 import 'feather-icons'

 Vue.config.productionTip = false

 Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_zJowT3YJgYlfYyKqeMiTpGo9tVZdWEk',
    libraries: 'places'
  },
})

 new Vue({
   router,
   store,
   vuetify,
   render: h => h(App)
 }).$mount('#app')
