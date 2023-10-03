import '@/assets/vendor/bootstrap/css/bootstrap.css'
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/vendor/font-awesome/css/fontawesome-5.14.0.min.css'
import '@/assets/vendor/font-awesome/css/flaticon.min.css'
import '@/assets/css/animate.css'


import '@/assets/css/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'



// const app = createApp(App)    
// .use(router)
// app.mount('#app')

createApp(App)
    .use(router)
    .mount('#app')
