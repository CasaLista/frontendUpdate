import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);

app.use(router); // Ensure the router is used in the app
app.mount('#app');
