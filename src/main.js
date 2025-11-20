import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase_conf'
const app = createApp(App)

//Composition Api --> use functions (composables) increases the capacity of the language - for creating reactive views of data
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})

app.use(router)

app.mount('#app')
