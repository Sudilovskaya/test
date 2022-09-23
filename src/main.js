import { createApp } from 'vue'
import App from './App.vue'
import store from './store/vuex'
import router from './router/router'
import './registerServiceWorker'

createApp(App).use(store).use(router).mount('#app')
