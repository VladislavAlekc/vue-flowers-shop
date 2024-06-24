import './assets/main.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import VueTheMask from 'vue-the-mask'
import { createApp } from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate-next'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import { router } from './router'
const app = createApp(App)

app.component('Paginate', Paginate)
app.component('VueSlider', VueSlider)

app.use(createPinia())
app.use(router)
app.use(autoAnimatePlugin)
app.use(VueTheMask)

app.mount('#app')
