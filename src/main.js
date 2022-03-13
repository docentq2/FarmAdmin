import { createApp } from 'vue'
import App from './App.vue'
import { stateSymbol, createStore } from './store';

const app =  createApp(App)

app.provide(stateSymbol, createStore());

app.mount('#app');
