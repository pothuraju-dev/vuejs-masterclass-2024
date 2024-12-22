import "./assets/index.css"
import "iconify-icon"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin } from '@formkit/vue'
import config from '../formkit.config'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(plugin, config)

// To handle error in higher level
// app.config.errorHandler = (error) => {}

app.mount('#app')
