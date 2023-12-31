import '@/assets/vendor/bootstrap/css/bootstrap.css'
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/vendor/font-awesome/css/fontawesome-5.14.0.min.css'
// import '@/assets/vendor/font-awesome/css/flaticon.min.css'
import '@/assets/css/animate.css'
import '@/assets/css/locomotive-scroll.css'

import '@/assets/css/style.css'
import '@/assets/css/theme-styles.css'
import '../src/assets/sass/theme-styles.scss'

import {
    createApp
} from 'vue'
import App from './App.vue'
import router from '@/router'
import {
    OhVueIcon,
    addIcons
} from "oh-vue-icons";



createApp(App)
    .use(router)
    .component('v-icon', OhVueIcon)
    .mount('#app')