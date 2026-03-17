import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setPrimeVue } from './modules/primevue.modules'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from './router'
import InputNumber from 'primevue/inputnumber'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('InputNumber', InputNumber)

setPrimeVue(app)

app.mount('#app')
