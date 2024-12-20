import "./assets/index.css"
import "iconify-icon"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// To handle error in higher level
// app.config.errorHandler = (error) => {}

app.mount('#app')