import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')

const app = createApp(App);

app.use(store).use(router);

app.config.globalProperties.$auth = require('./components/firebaseInit').default.auth;
app.config.globalProperties.$db = require('./components/firebaseInit').default.db;
app.config.globalProperties.$date = require('./components/firebaseInit').default.date;

app.mount('#app');