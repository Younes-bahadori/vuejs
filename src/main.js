import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import * as bootstrap from 'bootstrap'
import "./assets/css/bootstrap.min.css";
// import "./assets/css/bootstrap.rtl.min.css";


createApp(App).use(router).mount('#app')
