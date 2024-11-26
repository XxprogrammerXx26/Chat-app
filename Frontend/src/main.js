import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import socketio from 'socket.io-client';




const socket = socketio('http://localhost:3000');

const app = createApp(App)
app.config.globalProperties.$socket = socket;


app.mount('#app')
