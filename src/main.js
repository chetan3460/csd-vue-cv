
import '@/assets/css/animate.css'


// import '@/assets/css/style.css'
// import '@/assets/css/theme-styles.css'
import '../src/assets/sass/theme-styles.scss'
import '../src/assets/base.css'

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